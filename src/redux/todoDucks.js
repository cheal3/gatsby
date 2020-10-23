export const ADDITEM = "todoDucks/ADDITEM"

export const addItem = item => ({
  type: ADDITEM,
  item,
})

const initialState = {
  todoItem: [],
}

export default function todoDucks(state = initialState, action) {
  if (action.type === ADDITEM) {
    return {
      ...state,
      todoItem: [...state.todoItem, action.item],
    }
  } else return state
}
