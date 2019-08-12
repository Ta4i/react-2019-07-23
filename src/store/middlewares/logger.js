import {selectUsers} from '../selectors'
import uuidv1 from 'uuid/v1'
import {addUser} from '../ac'

export default store => next => action => {
  console.log('before', action)
  let users = selectUsers(store.getState())
  let {comment} = action
  let [selectUser] = users.filter(elem => elem.name === comment.name)
  if (selectUser !== undefined) {
    action.comment.userId = selectUser.id
  } else {
    let userId = uuidv1()
    action.comment.userId = userId
    action.comment.restaurant = comment.restaurant
    let oUser = {id: userId, name: comment.name}
    next(addUser(oUser))
  }
  action.comment.id = uuidv1()
  console.log('before', store.getState())
  next(action)
  console.log('after', store.getState())
}
