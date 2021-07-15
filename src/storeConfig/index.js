import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "../learnContent/reducers";
import mainReducers from "../appReducers";

export default function configureStore() {
  return createStore(
    combineReducers({
      ...reducers,
      ...mainReducers,
    }),
    applyMiddleware(thunk)
  );
}