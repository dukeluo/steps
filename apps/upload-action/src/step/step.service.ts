import { createHash } from 'node:crypto'
import { readdirSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'

import { del, put } from '@vercel/blob'
import { Kysely } from 'kysely'
import { match } from 'micromatch'
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

export async function createActions(
  db: Kysely<PostgresDatabase>,
  pathPattern: string
): Promise<[AddStepAction[], DeleteStepAction[]]> {
  const steps = await findAllSteps(db)
  const matched = match(readdirSync(resolve('./')), pathPattern)
  const noModified = []
  const toBeAdded: AddStepAction[] = []
  const toBeDeleted: DeleteStepAction[] = []

  for (const pathname of matched) {
    const hash = calculateStepHashDigest(pathname)

    if (steps.find((step) => step.hash_digest === hash)) {
      noModified.push(pathname)
    } else {
      toBeAdded.push({ pathname, hash })
    }
  }
  for (const step of steps) {
    if (!noModified.includes(step.pathname)) {
      toBeDeleted.push({ id: step.id, url: step.file_url })
    }
  }

  return [toBeAdded, toBeDeleted]
}

export async function addSteps(db: Kysely<PostgresDatabase>, actions: AddStepAction[]) {
  for (const action of actions) {
    const content = readFileSync(action.pathname, 'utf8')
    const { url } = await put(action.pathname, content, { access: 'public' })
    const metadata = parseMD(content).metadata as StepMetaData

    insertStep(db, {
      pathname: action.pathname,
      title: metadata.title,
      category: metadata.category,
      tags: metadata.tags,
      created_at: metadata.dateCreated,
      modified_at: metadata.dateModified,
      file_url: url,
      hash_digest: action.hash,
    })
  }
}

export async function deleteSteps(db: Kysely<PostgresDatabase>, actions: DeleteStepAction[]) {
  await deleteStepsByIds(
    db,
    actions.map((action) => action.id)
  )
  for (const action of actions) {
    await del(action.url)
  }
}
