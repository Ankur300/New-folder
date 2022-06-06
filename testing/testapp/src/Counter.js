import React,{useState,useContext,createContext,useEffect} from "react";
import { ThemeContext } from "./ThemeContext";

export default function Counter(){
    const context=useContext(ThemeContext);
    const{label}=context;
    const[counter,setCounter]=useState(0);
return(
    <div>
        <label style={{color:label.color,padding:label.padding}}>Context App</label>
    </div>
)
}
