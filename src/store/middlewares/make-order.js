import uuid from 'uuid/v4'

export default store => next => action => {
  const {makeOrder, ...rest} = action
  if (!makeOrder) {
    next(rest)
  } else {
    debugger
    next({
      ...rest,
      orderId: uuid(),
    })
  }
}
