import { createContext } from "react"
const INITIAL_STATE={
    darkMode:false
}
export const DarkModeContext = createContext(INITIAL_STATE);
export const darkModeContextProvider = ({children}) =>{

}