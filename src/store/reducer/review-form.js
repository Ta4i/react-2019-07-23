import {
  SHOW_REVIEW_FORM,
  HIDE_REVIEW_FORM,
  SUBMIT_REVIEW_FORM,
  SUCCESS_REVIEW_FROM,
  ERROR_REVIEW_FORM,
} from '../constants'
import Status from '../../types/status'

const initialState = {
  isVisible: false,
  status: Status.IDLE,
  values: null,
}

export default (formState = initialState, action) => {
  switch (action.type) {
    case SHOW_REVIEW_FORM:
      return {
        ...formState,
        isVisible: true,
        status: Status.IDLE,
      }
    case HIDE_REVIEW_FORM:
      return {
        ...formState,
        isVisible: false,
      }
    case SUBMIT_REVIEW_FORM:
      return {
        ...formState,
        status: Status.SENDING,
        values: action.payload.values,
      }
    case SUCCESS_REVIEW_FROM:
      return {
        ...formState,
        status: Status.DONE,
        values: null,
      }
    case ERROR_REVIEW_FORM:
      return {
        ...formState,
        status: Status.ERROR,
      }
    default:
      return formState
  }
}
