import { ADD_INPUT, Remove_toDo, COMPLETE, EDIT, SAVE_TODO , CLEAR} from "../actions/types";
// const initialState = [{text : 'todo' , id : 1, complete : false}]
// const todosReducer = (state=initialState,action) =>{
const todosReducer = (state = {todos : [] , todoToEdit : null}, action) => {
  switch (action.type) {
    case ADD_INPUT:
      return {...state, todos : [ ...state.todos , action.payload]};
    case Remove_toDo:
      return {...state , todos : state.todos.filter(el => el.text != action.payload)};
    case COMPLETE:
      return {...state , todos : state.todos.map(el =>
        el.text === action.payload.text
          ? { text: el.text, complete: !el.complete }
          : el
      )};
    case EDIT : return {...state , todos :state.todos.map(el => el.id === action.payload.id ? action.payload : el)}
    case SAVE_TODO : return {...state , todoToEdit : action.payload};
    case CLEAR : return {...state , todoToEdit : null}
    default:
      return state;
  }
};
export default todosReducer;
