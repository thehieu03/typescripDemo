import {ADD_TODO, SET_TODO_INPUT} from "./constants";
import type { Action } from "./types";

export const setToDoInput = (payload: string): Action => ({
    type: SET_TODO_INPUT,
    payload,
});
export const addTodo=(payload:string):Action=>({
   type:ADD_TODO,
    payload
});