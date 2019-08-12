import {normalizedUsers} from '../../fixtures'
import { ADD_REVIEW } from '../constants';

const initialState = normalizedUsers.reduce((usersMap, user) => {
  return {
    ...usersMap,
    [user.id]: user,
  }
}, {})

export default (usersState = initialState, action) => {
	switch (action.type) {
		case ADD_REVIEW:
			const {userId} = action.payload
			const {username} = action.payload.review

			return {
				...usersState,
				[userId]: {
					id: userId,
					name: username,
				}
			}
	
		default:
			return usersState
	}
}
