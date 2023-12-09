import { createRef } from "react";

import "./createaccount.css"
import { Link } from "react-router-dom";
export function SignUp(){
    const email = createRef();
    const password = createRef();
    const name = createRef();
    const handleSubmit=()=>{
        clearInput();
    }
    const clearInput = ()=>{
        email.current.value="";
        password.current.value="";
        name.current.value="";
    }
    return(<>
    <div className="Login-Container">
        <div className="Box1">
            <h3>Create New Account</h3>
            <form>
                <input type="text" className="login" placeholder="Full Name" ref={name} autoFocus/>
                <input type="email" className="login" placeholder="Email" ref={email} />
                <input type="password" className="password" placeholder="Password" ref={password} />
                <button onClick={handleSubmit} >Create Account</button>
            </form>
            <p className="para">Already have Account? <Link to="/chatme/login">Login</Link></p>
        </div>
    </div>
    </>);
}