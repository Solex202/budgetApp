import React, {useState} from 'react'
import {useHistory} from  "react-router-dom"

const LoginB = ({setAlert}) => {

  let history = useHistory();
    const [userDetails, setuserDetails] = useState({identity: "", password: ""})

    const handleUserInput = (e) =>{
        setuserDetails({...userDetails,[e.target.name]: e.target.value})
    }

    const handleLogin = () =>{
        let usersRepository = JSON.parse(localStorage.getItem("users"))

        let isValid = usersRepository.some((userObject) => {
         let idCheck =  (userObject?.email === userDetails.identity || userObject?.username === userDetails?.identity)
         let passwordCheck = (userObject.password === userDetails.password)
         return idCheck && passwordCheck
        })
        isValid?
        history.push(`/dashboard/${userDetails.identity}`):
        setAlert({ishow:true, status:"error",message:"user details incorrect "})

        setTimeout(
            () => setAlert({ishow:false, status:"", message:""}), 5000);
    }
  return (
      <div className='auth-register'>
        <label>Email or Username</label>
        <input name='identity' onChange={handleUserInput}/>
        <br/>
        
        <label>Password</label>
        <input name='password' onChange={handleUserInput}/>
        <br/>
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default LoginB