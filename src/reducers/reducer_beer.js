import { FETCH_BEERS, FETCH_BEER, UPDATE_BEER } from "../actions";


export default function(state = {}, action) {
  switch (action.type) {
    case UPDATE_BEER:
      return action.payload;
    case FETCH_BEER:
      return action.payload;
    case FETCH_BEERS:
      return action.payload;
    default:
      return state;
  }
}
