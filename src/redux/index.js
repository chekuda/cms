import { combineReducers } from 'redux'

import row from './reducers/row/row'
import column from './reducers/column/column'
import component from './reducers/component/component'

const rootReducer = combineReducers({
  component,
  column,
  row
})

export default rootReducer
