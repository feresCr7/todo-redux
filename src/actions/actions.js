import { ADD_INPUT ,Remove_toDo, COMPLETE , EDIT , SAVE_TODO, CLEAR} from './types'
export const addTodo = (newTodo) => {
    return {
        type: ADD_INPUT,
        payload: newTodo
    }
}
export const Removetodo=(Remove_text)=>{
    return {
        type: Remove_toDo,
        payload : Remove_text,
    }
}
export const complete=(todo)=>{
    return {
        type: COMPLETE,
        payload : todo
    }
}
export const edit=(todo)=>{
    return {
        type: EDIT,
        payload : todo
    }
}
export const saveTodo=(todo)=>{
    return {
        type: SAVE_TODO,
        payload : todo
    }
}

export const clear = () => {
    return {
        type : CLEAR
    }
}

