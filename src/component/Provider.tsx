import {type FC, type ReactNode, useReducer} from "react";
import logger from "./logger.tsx";
import reducer, {initState} from "./reducer.tsx";
import StoreContext from "./Context.tsx";

interface ProviderProps {
    children: ReactNode;
}
const StoreProvider:FC<ProviderProps> = ({children}) => {
   const [state,dispatch]=useReducer(logger(reducer),initState);
   return <StoreContext.Provider value={[state,dispatch]}>
       {children}
   </StoreContext.Provider>
}
export default StoreProvider;
