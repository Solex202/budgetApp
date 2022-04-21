import React, {useState} from 'react'
import LoginB from './components/authentication/LoginB'
import Register from './components/authentication/Register'
import './authentication.css'
// import Budget from './Budget'

const Authentication = ({setIsSubmited}) => {

    const [auth, setAuth] = useState("register")
    const [alert, setAlert] = useState({ishow:false, status:"", message:""})

    const switchHandler = () => {
        if(auth === "login"){
            setAuth("register")
        }else{
            setAuth("login")
        }
    }

  return (
    <div className='auth-container'>
        <div className='auth-body'> 
            <div style={{display:"flex", justifyContent:"space-between"}}>
               {alert.ishow && <div className='alert'
                style={alert.status === "error" ?
                {backgroundColor: "red"} :
                {backgroundColor: "teal"}}>
                    {alert.message}
                </div>}
                <button onClick={switchHandler} > {auth  === "login"? "Login": "Register"}</button>
            </div>
            {/* <button onClick={switchHandler} > {auth  === "login"? "Login": "Register"}</button> */}
            {auth === "login"? <LoginB setAlert={setAlert} setIsSubmited={setIsSubmited} />:<Register setAlert={setAlert}/>}
        </div>
    </div>
  )
}

export default Authentication