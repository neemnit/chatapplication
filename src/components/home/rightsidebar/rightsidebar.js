import { createRef } from "react";
import { useUsersValue } from "../../../Context/userContext";
import { Chating } from "./chating/Chating";
import "./rightsidebar.css"
import { BsFillTelephoneFill,BsFillCameraVideoFill,BsThreeDotsVertical,BsFillImageFill } from "react-icons/bs";
export function RightSidebar() {
    const {chating, handleSendMessage} = useUsersValue();
    const inputmessage = createRef();

    const handlesend = ()=>{
        handleSendMessage(inputmessage.current.value);
        inputmessage.current.value='';
    }
    return (<>
        <div className="right-sidebar">
            <div className="Chat-Navbar">
                <div className="contact-Information">
                    <img src={chating.profilepic} alt={chating.name} />
                    <span>{chating.name} </span>
                </div>


                <div className="features">
                    <span className="video-call"><BsFillCameraVideoFill /></span>
                    <span className="phone-call"><BsFillTelephoneFill /></span>
                    <span className="contact-detail"><BsThreeDotsVertical /></span>
                </div>
            </div>



            <div className="Chating-box">
               {chating && <Chating chating={chating}/>}
            </div>




            <div className="typing-box">
                <input type="text" placeholder="Type a message..." ref={inputmessage} autoFocus />
                <div className="Sending-buttons">
                    <input style={{ display: "none" }} type="file" id="file" />
                    <label htmlFor="file"><BsFillImageFill /></label>
                    <button onClick={handlesend}>Send</button>
                </div>
            </div>
        </div>
    </>)
}