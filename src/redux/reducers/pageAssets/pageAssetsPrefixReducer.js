export const PULL_PAGE_ASSETS_PREFIX = 'pageAssetsPrefix/PULL_PAGE_ASSETS_PREFIX'

export const pullPageAssetsPrefix = (prefix) => {
  return ({
    type: PULL_PAGE_ASSETS_PREFIX,
    payload: prefix
  })
}

export const getPageAssetsPrefix = (state) => state

const pageAssetsPrefixReducer = (state = '', action) => {
  switch (action && action.type) {
    case PULL_PAGE_ASSETS_PREFIX:
      return action.payload
    default:
      return state
  }
}

export default pageAssetsPrefixReducer
