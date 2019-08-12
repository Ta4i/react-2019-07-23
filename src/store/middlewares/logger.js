import {ADD_REVIEW} from '../constants'

export default store => next => action => {
  console.log('before', store.getState())
  console.log('action', action)
  if (action.type === ADD_REVIEW) {
    const {name} = action.payload
    const user = Object.values(store.getState().users).find(u => {
      return u.name === name
    })
    if (user) {
      action.payload.userId = user.id
    } else {
      action.payload.userId = new Date().toString()
    }
    action.payload.id = new Date().toString()
    const text = action.payload.text
    const rating = action.payload.rating
    const restaurantId = action.payload.restaurantId
    // отправляем на сервер
  }
  next(action)
  console.log('after', store.getState())
}
