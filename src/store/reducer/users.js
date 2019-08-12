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
      const {userId, name} = action.payload
      if (usersState[userId]) {
        return usersState
      }
      let user = {
        id: userId,
        name,
      }
      return {
        ...usersState,
        [userId]: user,
      }
    }
    default:
      return usersState
  }
}
