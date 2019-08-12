import {normalizedUsers} from '../../fixtures'

export default (usersState = normalizedUsers, action) => {
  switch (action.type) {
    case 'ADD_USER':
      const {id, name} = action.user
      console.log(action)
      return [
        ...usersState,
        {
          id,
          name,
        },
      ]
    default:
      return usersState
  }
}
