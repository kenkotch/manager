import {
  EMPLOYEES_FETCH_SUCCESS
} from '../actions/types'

const ININTIAL_STATE = {}

export default (state = ININTIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEES_FETCH_SUCCESS:
      return action.payload
    default:
      return state
  }
}
