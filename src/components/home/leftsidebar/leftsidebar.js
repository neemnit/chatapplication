import { Contacts } from "./contacts/contact"
import { user } from "../../../data/data"
import "./leftsidebar.css"
import { createRef, useEffect, useState } from "react";
import styled from "styled-components";
import { useUsersValue } from "../../../Context/userContext";
import { LuLogOut } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ShowContactTab = styled.div`
  display: ${props => props.show ? 'block' : 'none'};
  width:100vw;
  height:100vh;
  position:absolute;
  background-color:rgba(225,225,225,0.5);
  display:flex;
  justify-content:center;
  align-items:center;
`;
export function LeftSidebar() {
    const [showContact ,setShowContact] = useState(false);
    const {setIslogin,handleAddContactList,userdata,setUserdata,searchdata} = useUsersValue();
    const search = createRef();
    const Navigate = useNavigate();

    const handleAddchatlist = (e,user)=>{
        e.preventDefault();
        handleAddContactList(user);
        setShowContact(prev=> !prev)
    }
    const handleSearchClick=()=>{ 
        if (search.current.value === ""){ 
            setUserdata(userdata); 
            return; 
        } 
        const filterBySearch = userdata.filter((item) => { 
            if (item.name.toLowerCase() 
                .includes(search.current.value.toLowerCase())) { return item; } 
        }) 
        setUserdata(filterBySearch);
    }

    const clearsearchfilter = ()=>{
        search.current.value="";
        setUserdata(searchdata);
    }

    const handlelogout = ()=>{
        window.localStorage.setItem("islogin","false");
        setIslogin(false);
        toast.success("User Logout Successfully !")
        return Navigate("/chatme/");
    }
    return (<>
        <div className="left-sidebar">
            {showContact ? <ShowContactTab show={showContact} >
                <div className="Add-contact">
                    <div className="Heading-add-contact">
                        <h3>Search and Add Contact</h3><button onClick={()=>setShowContact(prev=> !prev)}>Cancel</button>
                    </div>
                    <div className="search-contact">
                        <input type="text" placeholder='Search contact...' />
                    </div>
                    {user.map((data, i) => {
                        return (<div className="show-contact-list" key={i}>
                            <img src={data.profilepic} alt={data.name} />
                            <span>{data.name}</span>
                            <button onClick={(e)=>{handleAddchatlist(e,data)}}>Send Message</button>
                        </div>)
                    })
                    }
                </div>
            </ShowContactTab> : null}
            <div className="User-Navbar">
                <div className="Heading">ChatNow</div>
                <button onClick={()=>setShowContact(prev=> !prev)}>+</button>
                <span className="logout" onClick={handlelogout}><LuLogOut /></span>
                <img src="https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw" alt="" />
            </div>
            <div className="SearchBox">
                <input type="text" placeholder="Search" ref={search} onChange={handleSearchClick} />
            </div>
            <div className="ContactList">
                {userdata.map((data, i) => <Contacts key={i} data={data} clearsearchfilter={clearsearchfilter}/>)}
            </div>
        </div>
    </>)
}