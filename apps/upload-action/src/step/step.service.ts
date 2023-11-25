import { createHash } from 'node:crypto'
import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join, resolve, sep } from 'node:path'

import { del, put } from '@vercel/blob'
import { Kysely } from 'kysely'
import micromatch from 'micromatch'
import parseMD from 'parse-md'

import { PostgresDatabase } from '~/postgres.storage'
import { deleteStepsByIds, findAllSteps, insertStep } from '~/step/step.repository'

interface AddStepAction {
  pathname: string
  hash: string
}

interface DeleteStepAction {
  url: string
  id: string
}

interface StepMetaData {
  title: string
  category: string
  tags: string[]
  dateCreated: string
  dateModified: string
}

function calculateStepHashDigest(pathname: string) {
  return createHash('sha256').update(readFileSync(pathname, 'utf8')).digest('hex')
}

function getAllFilesInFolder(folderPath: string): readonly string[] {
  const files = readdirSync(folderPath)
  const ignoredFolders = ['.git', 'node_modules', 'dist']

  return files.reduce((filePaths: readonly string[], file: string) => {
    if (ignoredFolders.includes(file)) {
      return filePaths
    }

    const filePath = join(folderPath, file)
    const fileStat = statSync(filePath)

    if (fileStat.isFile()) {
      return [...filePaths, filePath.replace(join(resolve('./'), sep), '')]
    } else if (fileStat.isDirectory()) {
      return [...filePaths, ...getAllFilesInFolder(filePath)]
    }

    return filePaths
  }, [])
}

export async function createActions(
  db: Kysely<PostgresDatabase>,
  pathPattern: string
): Promise<[AddStepAction[], DeleteStepAction[]]> {
  const steps = await findAllSteps(db)
  const matched = micromatch.match(getAllFilesInFolder(resolve('./')), pathPattern)
  const [toBeAdded, noModified] = matched.reduce<[AddStepAction[], string[]]>(
    ([a, m], pathname) => {
      const hash = calculateStepHashDigest(pathname)

      return steps.find((step) => step.hash_digest === hash) ? [a, [...m, pathname]] : [[...a, { pathname, hash }], m]
    },
    [[], []]
  )
  const toBeDeleted = steps.reduce<DeleteStepAction[]>(
    (d, step) => (noModified.includes(step.pathname) ? d : [...d, { id: step.id, url: step.file_url }]),
    []
  )

  return [toBeAdded, toBeDeleted]
}

export async function addSteps(db: Kysely<PostgresDatabase>, actions: readonly AddStepAction[]) {
  if (!actions.length) return

  await Promise.all(
    actions.map(async (action) => {
      const content = readFileSync(action.pathname, 'utf8')
      const { url } = await put(action.pathname, content, { access: 'public' })
      const metadata = parseMD(content).metadata as StepMetaData

      return insertStep(db, {
        pathname: action.pathname,
        title: metadata.title,
        category: metadata.category,
        tags: metadata.tags,
        created_at: metadata.dateCreated,
        modified_at: metadata.dateModified,
        file_url: url,
        hash_digest: action.hash,
      })
    })
  )
}

export async function deleteSteps(db: Kysely<PostgresDatabase>, actions: readonly DeleteStepAction[]) {
  if (!actions.length) return

  await deleteStepsByIds(
    db,
    actions.map((action) => action.id)
  )
  await Promise.all(actions.map((action) => del(action.url)))
}
