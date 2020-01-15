import { createStore, applyMiddleware, compose } from "redux";
//thunk helps us handle asynchronous actions.
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};

//this is the array of middleware that we are going to use.
const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  //we have to add these enhancers to run the redux dev tools.
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
