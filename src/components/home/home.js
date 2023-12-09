import { LeftSidebar } from "./leftsidebar/leftsidebar";
import { RightSidebar } from "./rightsidebar/rightsidebar";
import "./home.css";
import { useEffect } from "react";
import { useUsersValue } from "../../Context/userContext";
import { currentUserdata } from "../../data/data";

export function Home() {
    const {setChating,setUserdata} = useUsersValue();
    useEffect(()=>{
        setChating(currentUserdata.contactList[0]);
        setUserdata(currentUserdata.contactList);
    },[]); 
    return (<>
        <div className="container">
            <LeftSidebar />
            <RightSidebar />
        </div>
    </>)
}