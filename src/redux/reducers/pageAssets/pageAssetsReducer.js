export const PULL_PAGE_ASSETS = 'pageAssets/PULL_PAGE_ASSETS'

export const pullPageAssets = (object) => {
  return ({
    type: PULL_PAGE_ASSETS,
    payload: object
  })
}

export const getImageFiles = (state) => state

const pageAssetsReducer = (state = [], action) => {
  switch (action && action.type) {
    case PULL_PAGE_ASSETS:
      return action.payload
    default:
      return state
  }
}

export default pageAssetsReducer
