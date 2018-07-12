import { getIdsToRemove } from 'app/redux/helpers/helpers'

export const SELECT_EDITOR = 'outputData/SELECT_EDITOR'
export const REMOVE_EDITOR = 'outputData/REMOVE_EDITOR'

const initialState = {
  currentId: undefined,
  editors: []
}

export const selectEditor = (element) => ({
  type: SELECT_EDITOR,
  payload: {
    currentId: element.id,
    editor: element
  }
})

export const removeEditor = (allElements, id) => ({
  type: REMOVE_EDITOR,
  payload: {
    allElements,
    idToRemove: id
  }
})

const reducer = (state = initialState, action = {}) => {
  const {
    allElements,
    idToRemove,
    currentId,
    editor
  } = action.payload || {}

  switch (action.type) {
    case SELECT_EDITOR:
      const itHasBeenAdded = state.editors.some(ele => ele.id === currentId)

      return {
        ...state,
        currentId,
        editors: itHasBeenAdded ? state.editors : state.editors.concat(editor)
      }
    case REMOVE_EDITOR:
      const idsRemoved = getIdsToRemove(allElements, idToRemove)
      const currentHasBeenRemoved = idsRemoved.includes(state.currentId)
      const listEditorsUpdated = state.editors.filter(ele => !idsRemoved.includes(ele.id))

      return {
        ...state,
        currentId: currentHasBeenRemoved ? undefined : state.currentId,
        editors: listEditorsUpdated
      }
    default:
      return state
  }
}

export default reducer
