import { createContext, useReducer } from "react"
import darkModeReducer from "./darkModeReducer";
const INITIAL_STATE={
    darkMode:false
}
export const DarkModeContext = createContext(INITIAL_STATE);
export const DarkModeContextProvider = ({children}) =>{
    const [state,dispatch] = useReducer(darkModeReducer,INITIAL_STATE);

    return <DarkModeContext.Provider value={{darkMode: state.darkMode,dispatch}}>
        {children}
    </DarkModeContext.Provider>

}