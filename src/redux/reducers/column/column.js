import { column } from 'app/redux/components'

export const ADD_COLUMN = 'outputData/ADD_COLUMN'
export const REMOVE_COLUMN = 'outputData/REMOVE_COLUMN'

export const addColumn = (parentId) => ({
  type: ADD_COLUMN,
  payload: {
    parentId,
    newColumn: column()
  }
})

export const removeColumn = (myId, parentId) => ({
  type: REMOVE_COLUMN,
  payload: {
    myId,
    parentId
  }
})

const reducer = (state = [], action = {}) => {
  const {
    myId,
    parentId,
    newColumn
  } = action.payload || {}
  switch (action.type) {
    case ADD_COLUMN:
      newColumn.parentId = parentId

      return state.concat(newColumn)
    case REMOVE_COLUMN:
      if(!myId && !parentId) return state

      return myId
        ? state.filter(column => column.id !== myId)
        : state.filter(column => column.parentId !== parentId)
    default:
      return state
  }
}

export default reducer
