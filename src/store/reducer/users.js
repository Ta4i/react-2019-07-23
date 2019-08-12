import {normalizedUsers} from '../../fixtures'
import {ADD_USER} from '../constants'

const initialState = normalizedUsers.reduce((usersMap, user) => {
  return {
    ...usersMap,
    [user.id]: user,
  }
}, {})

export default (usersState = initialState, action) => {
  switch (action.type) {
    case ADD_USER: {
      const {username} = action.payload
      return {
        ...usersState,
        [action.id]: {
          id: action.id,
          name: username,
        },
      }
    }
    default:
      return usersState
  }
}
