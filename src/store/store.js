import { combineReducers, createStore } from "redux";
import listingReducer from "../reducers/listing-reducer";

let reducers = combineReducers({
  listingPage: listingReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;
