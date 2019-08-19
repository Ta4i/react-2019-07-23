import {DECREMENT, INCREMENT} from '../constants'

export default (countState = 0, action) => {
  switch (action.type) {
    case INCREMENT: {
      return countState + 1
    }
    case DECREMENT: {
      return countState <= 1 ? 0 : countState - 1
    }
    default:
      return countState
  }
}
