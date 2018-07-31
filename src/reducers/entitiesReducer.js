import {FETCH_ENTITIES_SUCCESS} from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {

    case FETCH_ENTITIES_SUCCESS:
      return {...state, ...action.payload};

    default:
      return state;
  }
}