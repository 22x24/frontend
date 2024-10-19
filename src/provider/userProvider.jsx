import React, { createContext, useEffect, useState } from "react";
import { getMAxBandWidth } from "../actions/manager";

// Create UserContext
const UserContext = createContext();

// Create a UserProvider component
const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [activePage,setActivePage]=useState("Users")
    const [max,setMax] = useState(0)
    const [selectedUserId,setSelectedUserId]=useState(null)
    const getMaxWidthBand = async ()=>{
        // Logic to calculate maximum bandwidth for users
        const max= await getMAxBandWidth()
        setMax(max)
    }
    useEffect(()=>{
        getMaxWidthBand()
    },[])
    return (
        <UserContext.Provider value={{max,users,setUsers,setSelectedUserId,selectedUserId,activePage,setActivePage}}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };