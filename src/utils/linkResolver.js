const trimEnd = require('lodash/trimEnd')

const homePageUIDs = ['home']
const typesNeedUnpublishedPagePreview = ['page']

const parseUID = uid => {
  if (homePageUIDs.indexOf(uid) > -1) {
    return ''
  }
  return uid
}

const linkResolver = doc => {
  const type = doc.type.toLowerCase()
  const uid = parseUID(doc.uid)

  if (type === 'page') return `/${uid}`

  return '/'
}

const previewLinkResolver = doc => {
  const result = linkResolver(doc)
  if (typesNeedUnpublishedPagePreview.indexOf(doc.type) > -1) {
    return `/internal-preview${result.replace('#', '/')}`
  }
  return result
}

const getPreviewDirectory = type => {
  const result = previewLinkResolver({ type, uid: '' })
  return trimEnd(trimEnd(result, '#'), '/')
}

module.exports = {
  linkResolver,
  previewLinkResolver,
  getPreviewDirectory,
}
