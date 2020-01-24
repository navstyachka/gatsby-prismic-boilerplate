const trimEnd = require('lodash/trimEnd')

const homePageUIDs = ['home']
const typesNeedUnpublishedPagePreview = ['generic', 'post']

const parseUID = uid => {
  if (homePageUIDs.indexOf(uid) > -1) {
    return ''
  }
  return uid
}

const linkResolver = doc => {
  const type = doc.type.toLowerCase()
  const uid = parseUID(doc.uid)

  switch (type) {
    case 'article':
      return `/article/${uid}`

    case 'event':
      return `/event/${uid}`

    case 'home':
      return '/'

    default:
      return `/${uid}`
  }
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
