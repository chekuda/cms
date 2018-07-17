import { combineReducers } from 'redux'

import pageAssetsPrefixReducer from './pageAssetsPrefixReducer'
import pageAssetsReducer from './pageAssetsReducer'

export default combineReducers({
  pageAssetsPrefixReducer,
  pageAssetsReducer
})
