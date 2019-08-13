import uuidv4 from '../../helpers'

export default store => next => action => {
  if (!action.generateId) {
    next(action)
  } else {
    next({
      ...action,
      newId: uuidv4(),
    })
  }
}
