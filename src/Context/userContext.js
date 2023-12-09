import { useState, useContext, createContext } from "react";
import { currentUserdata } from "../data/data";
const userContext = createContext();

export const useUsersValue = () => {
    const value = useContext(userContext);
    return value;
};

export const UserContextProvider = ({ children }) => {
    const [chating, setChating] = useState(currentUserdata.contactList[0]);
    const [userdata, setUserdata] = useState(currentUserdata.contactList);
    const [searchdata,setSearchData] = useState(userdata);
    const [isLogin, setIslogin] = useState(false);

    const handleSendMessage = (message) => {
        setChating({...chating,
            Chat:[...chating.Chat, {
            text: message,
            timestamp: new Date().getTime(),
            sender: "me",
            message_id: 2,
        }]});
        updatemessages(message);

        userdata.map((user)=>{
            if(user.name === chating.name){
                user.lastUpdate=new Date().getTime();
              return user.lastmessage = message;
            }
            return "";
        })
        
        handlesort();
    }

    const updatemessages = (message)=>{
        userdata.map((data)=>{
            if(data.name===chating.name){
                data.Chat = [...chating.Chat, {
                    text: message,
                    timestamp: new Date().getTime(),
                    sender: "me",
                    message_id: 2,
                }];
                console.log(data.Chat);
            }
        })
        setUserdata(userdata);
    }

    const handlesort=()=>{
        userdata.sort((a, b) => (a.lastUpdate < b.lastUpdate) ? 1 : -1);
        setUserdata(userdata);
        setSearchData(userdata);
    }

    const handleAddContactList = (user)=>{
        console.log(userdata);
        const check = userdata.findIndex((data)=> data.name === user.name);
        if(check === -1){
            setChating(user);
            setUserdata([{...user},...userdata]);
            setSearchData(userdata);
        }else{
            setUserdata([...userdata]);
            setChating(userdata[check]);
            setSearchData(userdata);
        }
    }
    return (
        <userContext.Provider
            value={{isLogin, setIslogin, setChating,searchdata,setSearchData, chating, handleSendMessage,handleAddContactList,setUserdata,searchdata ,userdata}}
        >
            {children}
        </userContext.Provider>
    );
};
