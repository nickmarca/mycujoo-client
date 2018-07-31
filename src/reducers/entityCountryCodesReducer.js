import {FETCH_ENTITY_COUNTRY_CODES_SUCCESS} from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_ENTITY_COUNTRY_CODES_SUCCESS:
      return action.payload || [];

    default:
      return state;
  }
}