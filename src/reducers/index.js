import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import BeerReducer from "./reducer_beer";

const rootReducer = combineReducers({
  beers: BeerReducer,
  form: formReducer
});

export default rootReducer;
