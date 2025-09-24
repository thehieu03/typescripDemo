import type {Action, State} from "./types.tsx";
import {createContext, type Dispatch} from "react";

export type StoreContextType=[State,Dispatch<Action>];
const StoreContext = createContext<StoreContextType|undefined>(undefined);
export default StoreContext;