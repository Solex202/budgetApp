import React, { useState } from 'react'
import Budget from '../../Budget'

const Login = ({submitForm}) => {
  // const [name, setName] = useState("")
  const [loginDetails, setLoginDetails] = useState({userName: "", password: ""})

  const handleChange = (e)=>{
    // e.preventDefault()
    // console.log(e.target.value);
   setLoginDetails({...loginDetails, [e.target.name] : e.target.value})
  }
  // const handlePasswordChange = (e)=>{
  //   console.log(e.target.value);
  //   setLoginDetails({[e.target.name] : e.target.value})
  // }
  
  const handleSubmit =(e)=>{
    console.log(loginDetails);
    e.preventDefault()
    if(loginDetails.userName === "adeola" && loginDetails.password === "dee") {
      submitForm()
    }else{
      console.log("Not submitting");
    }
  //  name  === 'Adeola'? <Budget/>: console.log("null");
  }


  return (
    <div>
        <h2>LOGIN</h2>
        <form action='submit'>
            <label htmlFor="userName">Name: </label>
            <input name="userName" placeholder='Enter your name' onChange= {handleChange} />
            <br />
            <label htmlFor="password">Password: </label>
            <input name = "password" placeholder= 'Enter password' onChange = {handleChange} />
            <br />
            <button onClick={handleSubmit}>Login</button>
            {/* {name.toLocaleLowerCase() === "adeola" && <Budget name = {name}/>} */}
        </form>
    </div>
  )
}

export default Login