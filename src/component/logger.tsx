import type {Action, State} from "./types.tsx";

function logger(reducer:(state:State,action:Action)=>State){
    return (prevState:State,action:Action):State=>{
        console.group(action.type);
        console.log("Prev state ",prevState);
        const nextState:State=reducer(prevState,action);
        console.log("Next state ",nextState);
        console.groupEnd();
        return nextState;
    }
}
export default logger;