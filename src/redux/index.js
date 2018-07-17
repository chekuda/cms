import { combineReducers } from 'redux'

import component from './reducers/component/component'
import editor from './reducers/editor/editor'
import combinedPageAssetsReducer from './reducers/pageAssets/combinedPageAssetsReducer'

const rootReducer = combineReducers({
  editor,
  component,
  combinedPageAssetsReducer
})

export default rootReducer
