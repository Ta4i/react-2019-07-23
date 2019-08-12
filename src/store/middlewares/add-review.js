import { ADD_REVIEW } from '../constants';
import { getUserId } from '../helpers';
const uuidv4 = require('uuid/v4');

export default store => next => action => {	
	switch (action.type) {
		case ADD_REVIEW:
			const {users} = store.getState()
			const {username} = action.payload.review
			const userId = getUserId(username, users)

			action.payload = {
				...action.payload,
				reviewId: uuidv4(),
				userId: (userId) ? userId : uuidv4(),
			}

			break;
	
		default:
			break;
	}

  next(action)
}
