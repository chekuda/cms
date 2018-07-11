import * as components from 'app/redux/components'

export const ADD_COMPONENT = 'outputData/ADD_COMPONENT'
export const REMOVE_COMPONENT = 'outputData/REMOVE_COMPONENT'

export const addComponent = (parentId, type) => ({
  type: ADD_COMPONENT,
  payload: {
    parentId,
    newComponent: components[type] && components[type]()
  }
})

export const removeComponent = (myId, parentId) => ({
  type: REMOVE_COMPONENT,
  payload: {
    myId,
    parentId
  }
})

const reducer = (state = [], action = {}) => {
  const {
    myId,
    parentId,
    newComponent
  } = action.payload || {}

  switch (action.type) {
    case ADD_COMPONENT:
      newComponent.parentId = parentId

      return state.concat(newComponent)
    case REMOVE_COMPONENT:
      if(!myId && !parentId) return state
      let newComponentList = state
      if(myId) {
        newComponentList = state.filter(comp => comp.id !== myId)
      }
      if(parentId) {
        newComponentList = newComponentList.filter(comp => comp.parentId !== parentId)
      }

      return newComponentList
    default:
      return state
  }
}

export default reducer
