import React, { useState } from 'react'
import Register from './components/authentication/Register'
import Login from './components/authentication/Login'
import "./authentication.css"
import LoginB from './components/authentication/LoginB'

const Authentication = ({setIsSubmited}) => {
    const [auth, setAuth] = useState("register")
    const [alert, setAlert] = useState({ishow: false, status:"", message:""})

    const switchHandler = ()=>{
        if(auth === "login"){
            setAuth("register")
        }else{
            setAuth("login")
        }
    }
  return (
    <div className='auth-container'>
        <div className="auth-body">
            <div style={{display: "flex", justifyContent:"space-between"}}>
                
                {alert.ishow && 
                <div className='alert' style={
                    alert.status ==="error"? 
                    {backgroundColor: "red"} : 
                    {backgroundColor: "teal"}}> 
                        {alert.message}
                </div>}
                
                <button onClick = {switchHandler} >{auth === "login"? "Login" : "Register"}</button>
               
            </div>
            {auth === "login" ? <LoginB setIsSubmited = {setIsSubmited} setAlert = {setAlert} /> : <Register setAlert = {setAlert} />}
            
        </div>
       
    </div>
  )
}

export default Authentication