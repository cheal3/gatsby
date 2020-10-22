import { combineReducers, createStore } from "redux"
import counterReducer from "./reducers/counter"
import { composeWithDevTools } from "redux-devtools-extension"

const reducer = combineReducers({
  counter: counterReducer,
})

const store = createStore(reducer, composeWithDevTools())

export default store
