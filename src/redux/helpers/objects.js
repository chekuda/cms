export const update = (obj, path, value) => {
  // path: ['props', 'css', 'backgroundColor']
  if (path.length === 0) return value

  const key = path[0]

  let newObj = undefined
  if (Array.isArray(obj)) {
    newObj = [].concat(obj)
    newObj[key] = update(obj[key], path.slice(1), value)
  } else {
    newObj = {
      ...obj,
      [key]: update(obj[key], path.slice(1), value)
    }
  }

  return newObj
}
