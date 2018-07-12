export const getIdsToRemove = (components, myId) => {
  return components.reduce((acc, ele) => {
    return acc.includes(ele.parentId)
      ? acc.concat(ele.id)
      : acc
  }, [myId])
}
