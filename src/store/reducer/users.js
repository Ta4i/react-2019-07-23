import {ADD_REVIEW, LOAD_USERS, START, FAIL, SUCCESS} from '../constants'
import {fromJS, Map} from 'immutable'

const initialState = {
  loaded: false,
  loading: false,
  error: null,
  entities: [],
}

export default (usersState = fromJS(initialState), action) => {
  switch (action.type) {
    case ADD_REVIEW: {
      const isUserExists = usersState
        .get('entities')
        .some(entry => action.userId === entry.get('id'))
      if (!isUserExists) {
        const newUser = new Map({
          id: action.userId,
          name: action.payload.userName,
        })
        return usersState.update('entities', entities => entities.push(newUser))
      } else {
        return usersState
      }
    }
    case LOAD_USERS + START:
      return usersState.set('loaded', false).set('loading', true)
    case LOAD_USERS + FAIL: {
      return usersState
        .set('loaded', false)
        .set('loading', false)
        .set('error', action.error)
    }
    case LOAD_USERS + SUCCESS: {
      return usersState
        .set('loaded', true)
        .set('loading', false)
        .set('error', null)
        .set('entities', fromJS(action.response))
    }
    default:
      return usersState
  }
}
