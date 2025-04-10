import React,{useState} from "react";
import './Auth.css';

const AuthForm=()=>{
    const [login,setLogin]=useState(true)

     const switchMode=()=>{
        setLogin(!login)
    }
    return(
        <div className="container">
<div className="form-container">
    <div className="form-toggle ">
        <button className={login?"active":"button"} onClick={()=>setLogin(true)}>Login</button>
        <button className={!login?"active":"button"}onClick={()=>setLogin(false)}>SignUp</button>
    </div>
    {login ? <>
    <div className="form">
    <h1 className="form h2">Login</h1>
    <input type="email" placeholder="email"/>
    <input  type="password" placeholder="password"/>
    <a href="#" className="form a">Forget Password? </a>
    <button className="form p">Login</button>
  <p >Not a member? <a href="#" onClick={()=>setLogin(false)}>SignUp now</a></p>
    
    </div>
    </>:<>
    <div className="form">
    <h1 className="form h2">SignUp</h1>
    <input type="email" placeholder="email"/>
    <input  type="password" placeholder="password"/>  
    <input  type="confirm password" placeholder="confirm password"/> 
    <button className="form p">Sign Up</button>
    </div>
    </>
    }
</div>
        </div>
    )
}
export default AuthForm