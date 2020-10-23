import { combineReducers, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import counterReducer from "./reducers/counter"
import todoDucks from "./todoDucks"

const reducer = combineReducers({
  counter: counterReducer,
  item: todoDucks,
})

const store = createStore(reducer, composeWithDevTools())

export default store
