import StoreContext, {type StoreContextType} from "./Context.tsx";
import {useContext} from "react";

const useStore=():StoreContextType=>{
    const context=useContext(StoreContext);
    if(!context){
        throw new Error("useStore must be used within the StoreProvider");
    }
    return context;
}
export default useStore;