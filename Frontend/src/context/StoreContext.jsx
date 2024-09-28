import { createContext,useEffect,useState } from "react";

import axios from "axios"

export const  StoreContext=createContext("null");

const StoreContextProvider=(props)=>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [token,setToken]=useState("")
    const url = "http://localhost:4000";


    const logout = () => {
        setIsLoggedIn(false);
        // setUser(null);
        localStorage.removeItem('token');
        console.log("User logged out and localStorage cleared.");     
    };

    useEffect(()=>{
            if(localStorage.getItem("token")){
                setToken(localStorage.getItem("token"))
            }
    },[])

    const contextValue={
        url,
        isLoggedIn,
        setIsLoggedIn,
        user,
        setUser,
        logout,
        token,
        setToken,
    }


    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;




