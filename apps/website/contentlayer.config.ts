import { defineDocumentType, makeSource } from 'contentlayer/source-files'

const Step = defineDocumentType(() => ({
  name: 'Step',
  filePathPattern: `**/*.md`,
  contentType: 'markdown',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the step',
      required: true,
    },
    category: {
      type: 'string',
      description: 'The category of the step',
      required: true,
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
      description: 'The tags of the step',
      required: true,
    },
    dateCreated: {
      type: 'date',
      description: 'The creation date of the step',
      required: true,
    },
    dateModified: {
      type: 'date',
      description: 'The modification date of the step',
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/steps/${doc._raw.flattenedPath.replaceAll('/', '-')}`,
    },
  },
}))

export default makeSource({
  contentDirPath: '../../contents',
  documentTypes: [Step],
})
