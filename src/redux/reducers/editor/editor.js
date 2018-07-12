import { getIdsToRemove } from 'app/redux/helpers/helpers'
import { update } from 'app/redux/helpers/objects'

export const SELECT_EDITOR = 'outputData/SELECT_EDITOR'
export const REMOVE_EDITOR = 'outputData/REMOVE_EDITOR'
export const APPLY_CHANGE = 'outputData/APPLY_CHANGE'
export const SAVE_CHANGES = 'outputData/SAVE_CHANGES'

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

export const removeEditor = (allElements, id, removeOnlyMyself) => ({
  type: REMOVE_EDITOR,
  payload: {
    allElements,
    idToRemove: id,
    removeOnlyMyself
  }
})

export const applyChange = (target, newValue, currentId) => ({
  type: APPLY_CHANGE,
  payload: {
    target,
    newValue,
    currentId
  }
})

export const saveChanges = (id) => ({
  type: SAVE_CHANGES,
  payload: {
    currentId: id
  }
})

const reducer = (state = initialState, action = {}) => {
  const {
    allElements,
    target,
    newValue,
    idToRemove,
    currentId,
    editor,
    removeOnlyMyself
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
      const idsRemoved = removeOnlyMyself ? [idToRemove] : getIdsToRemove(allElements, idToRemove)
      const currentHasBeenRemoved = idsRemoved.includes(state.currentId)
      const listEditorsUpdated = state.editors.filter(ele => !idsRemoved.includes(ele.id))

      return {
        ...state,
        currentId: currentHasBeenRemoved ? undefined : state.currentId,
        editors: listEditorsUpdated
      }
    case APPLY_CHANGE:
      const editorToModify = state.editors.find(ele => ele.id === currentId)
      const editorUpdated = update(editorToModify, target.split('.'), newValue)

      return {
        ...state,
        editors: state.editors.map(ele =>
          ele.id === currentId
            ? editorUpdated
            : ele)
      }
    default:
      return state
  }
}

export default reducer
