import * as components from 'app/redux/components'
import { getIdsToRemove } from 'app/redux/helpers/helpers'

export const ADD_COMPONENT = 'outputData/ADD_COMPONENT'
export const REMOVE_COMPONENT = 'outputData/REMOVE_COMPONENT'

export const addComponent = (parentId, type) => ({
  type: ADD_COMPONENT,
  payload: {
    parentId,
    type,
    newSibling: components[type] && components[type]()
  }
})

export const removeComponent = (myId) => ({
  type: REMOVE_COMPONENT,
  payload: {
    myId
  }
})


const reducer = (state = [components.row()], action = {}) => {
  const {
    myId,
    parentId,
    newSibling
  } = action.payload || {}

  switch (action.type) {
    case ADD_COMPONENT:
      newSibling.parentId = parentId

      return state.concat(newSibling)
    case REMOVE_COMPONENT:
      const idsToRemove = getIdsToRemove(state, myId)

      return state.filter(ele => !idsToRemove.includes(ele.id))
    default:
      return state
  }
}

export default reducer
