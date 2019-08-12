import {selectUserIdByName} from '../selectors'

export default store => next => action => {
  if (action.generateId) {
    let userId = selectUserIdByName(store.getState(), action.payload.name)
    console.log('userid', userId)

    return next({
      ...action,
      id: userId.length
        ? userId[0]
        : Math.random()
            .toString(32)
            .slice(2),
    })
  }
  next(action)
}
