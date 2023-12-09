import "./contact.css"
import { BiCheckDouble } from "react-icons/bi";
import { useUsersValue } from "../../../../Context/userContext";
export function Contacts({data,clearsearchfilter}) {
    const {setChating ,chating} = useUsersValue();

    const handleclick = ()=>{
      setChating(data)
      clearsearchfilter();
    }
    return (
      <div className={chating.name === data.name ?"Contact-container active":"Contact-container"} onClick={()=>{handleclick(data)}}>
        <img src={data.profilepic} alt={data.name} />
        <div className="Details">
            <span className="Name">{data.name}</span>
            <span className="Message">
                <span className="Current-Message">{data.lastmessage}</span>
                <span className="Next-Message">{data.lastmessage?<BiCheckDouble />:null}</span>
            </span>
        </div>
      </div>
    );
}