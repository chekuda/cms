import { combineReducers } from 'redux'

import component from './reducers/component/component'
import editor from './reducers/editor/editor'

const rootReducer = combineReducers({
  editor,
  component
})

export default rootReducer
