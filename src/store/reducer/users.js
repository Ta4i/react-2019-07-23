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
      const newUserState = Object.keys(initialState).filter(
        index => initialState[index].id !== action.id
      )
      if (newUserState) {
        return {
          ...initialState,
          [action.id]: {
            id: action.id,
            name: action.payload.name,
          },
        }
      }
      return initialState
    }
    default:
      return usersState
  }
}
