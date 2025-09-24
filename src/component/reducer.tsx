import type {Action, State} from "./types.tsx";
import {ADD_TODO, SET_TODO_INPUT} from "./constants.tsx";

export const initState:State={
    todos:[],
    todoInput:""
};
function  reducer(state:State,action:Action):State{
    switch(action.type){
        case SET_TODO_INPUT:
            return {...state,todoInput:action.payload};
        case ADD_TODO: {
            const text=action.payload.trim();
            if(!text){
                return state;
            }
            return {...state,todos:[...state.todos,action.payload],todoInput:""};
        }
        default:
            throw new Error(`Unknown action type "`);
    }
}
export default reducer;