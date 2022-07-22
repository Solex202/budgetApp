import React, { useState } from 'react'
import {useHistory} from "react-router-dom"



const LoginB = ({setAlert}) => {
    let history  = useHistory()

    const [userDetails, setUserDetails] = useState({identity:"", password: ""})

    const handleUserInput = (e) =>{
        setUserDetails({...userDetails, [e.target.name]:e.target.value})
    }

    const handleLogin =() =>{
        let user;
        let repository =JSON.parse(localStorage.getItem("users"))
        console.log(repository);
        let isValid = repository.some((userObject)=> {
            let idCheck = (userObject?.email === userDetails.identity
                || userObject?.username === userDetails?.identity)
            let passwordCheck = (userObject.password === userDetails.password)
            if(idCheck && passwordCheck){
                user = userObject
            }
            return idCheck && passwordCheck
        })
        let {identity} = userDetails;
        isValid ?
        history.push(`/budget/${user.username}/?id=${userDetails.identity}`):
        setAlert({ishow: true, status : "error", message: "user details incorrect"})
        setTimeout(
            () => setAlert({ishow: false, status : "", message: ""})
        , 5000);
        
    }
  return (
    <div>
        <h1>LOGIN</h1>
        <div className='auth-register'>       
          <label> Email or Username </label>
          <input type="text" name='identity' onChange={handleUserInput} />
          <br />
          <label>Password: </label>
          <input type="password" name='password'  onChange={handleUserInput} />
          <br />        
          <button onClick = {handleLogin}>Login</button>
        </div>
    </div>
  )
}

export default LoginB