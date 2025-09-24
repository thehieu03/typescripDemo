import {ADD_TODO, type SET_TODO_INPUT} from "./constants.tsx";

export  interface State{
    todos:string[];
    todoInput:string;
}
export type Action=|{
    type:typeof SET_TODO_INPUT;
    payload:string;
}|{
    type:typeof ADD_TODO;
    payload:string;
}