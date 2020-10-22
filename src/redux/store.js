import { combineReducers, createStore } from "redux"
import counter from "./ducks/counter"
import { composeWithDevTools } from "redux-devtools-extension"

const reducer = combineReducers({
  counter: counter,
})

const store = createStore(reducer, composeWithDevTools())

export default store
