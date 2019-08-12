import {normalizedUsers} from '../../fixtures'
import {ADD_REVIEW} from '../constants'

const initialState = normalizedUsers.reduce((usersMap, user) => {
  return {
    ...usersMap,
    [user.id]: user,
  }
}, {})

export default (usersState = initialState, action) => {
  switch (action.type) {
    case ADD_REVIEW: {
      const {username} = action.payload
      return {
        ...usersState,
        [action.idUser]: {
          id: action.idUser,
          name: username,
        },
      }
    }
    default:
      return usersState
  }
}
