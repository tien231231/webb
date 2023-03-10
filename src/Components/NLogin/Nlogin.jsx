import"./nlogin.css"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../../redux/apiRequest";
import { useDispatch } from "react-redux";
export const Nlogin =()=> {
    const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const newUser = {
      username: username,
      password: password,
    };
    loginUser(newUser, dispatch, navigate);
  };
    return(<div className="nlogin">
        <div className="login">
      
      <h2>Login</h2>
      <h3>Welcome back</h3>

      <form className="login-form" onSubmit={handleLogin}>
        <div className="textbox">
          <input type="text" placeholder="Username" onChange={(e)=>setUsername(e.target.value)} />
          
        </div>
        <div className="textbox">
          <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
          
        </div>
        <button type="submit">LOGIN</button>
        
        <Link className="login-register-link" to="/register">
        Sign Up
      </Link>
      </form>
    </div>
    
    </div>)
}