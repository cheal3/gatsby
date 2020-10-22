import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement } from "../redux/ducks/counter"

export default () => {
  const count = useSelector(state => state.counter.count)
  const dispatch = useDispatch()

  return (
    <div>
      <h2>The current count is : {count}</h2>

      <button onClick={() => dispatch(increment())}> increase </button>
      <button onClick={() => dispatch(decrement())}> decrease </button>
    </div>
  )
}
