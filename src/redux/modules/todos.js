// import uuid from "react-uuid";
import shortid from "shortid";

const ADD_TODO = "ADD_TODO";

const initialState = [
  {
    id: shortid.generate(),
    title: "",
    body: "",
    isDone: false,
  },
];

export const addTodo = (payload) => {
  return { type: ADD_TODO, payload };
};

// 리듀서
const todos = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      console.log(state);
      return {
        ...state,
        todos: [...state.todos, action.payload],
      }; //TODO: 여기 작성

    case "DELETE_TODO":
      return; //TODO: 여기 작성

    case "SWITCH_TODO":
      return; //TODO: 여기 작성

    default:
      return state;
  }
};

export default todos;
