import "./chating.css";
export function Chating({chating}) {
    return (<>
        <div className="chating-container">
            {chating.Chat?.map((chat,i)=><div className={chat.sender === "me" ?"me":"messages"} key={i}>
                <img src={chating.profilepic} alt="" />
                <span className={chat.sender === "me" ? "mespan":null}>{chat.text}</span>
            </div>)}
        </div>
    </>)
}