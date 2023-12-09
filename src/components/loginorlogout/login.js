import { Link, useNavigate } from "react-router-dom";
import "./login.css"
import { createRef, useEffect } from "react";
import { useUsersValue } from "../../Context/userContext";
import { toast } from "react-toastify";
export function Login() {
    const email = createRef()
    const password = createRef()
    const {setIslogin} = useUsersValue();
    const Navigate = useNavigate();

    const clearInput = () => {
        email.current.value = "";
        password.current.value = "";
    }
    useEffect(()=>{
        const check = window.localStorage.getItem("islogin");
        if(check === "true"){
          setIslogin(true);
          return Navigate("/chatme/");
        }
      },[])
    const handleLogin = (e) => {
        e.preventDefault();
        if(email.current.value === "admin@gmail.com" && password.current.value === "admin123"){
            setIslogin(true);
            window.localStorage.setItem("islogin","true");
            clearInput();
            toast.success("User Login Successfully !")
            return Navigate("/chatme/");
        }
        clearInput();
        return Navigate("/chatme/login");
    }
    return (<>
        <div className="Login-Container">
            <div className="Box">
                <h3>Login</h3>
                <form>
                    <input type="email" className="login" placeholder="Email" ref={email} autoFocus />
                    <input type="password" className="password" placeholder="Password" ref={password} />
                    <button onClick={(e) => handleLogin(e)}> Login </button>
                </form>
                <p>Don't have account? <Link to="/chatme/signup">Create it</Link></p>
            </div>
        </div>
    </>);
}