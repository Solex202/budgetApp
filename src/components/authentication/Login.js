import React, {useState} from 'react'



const Login = ({setIsSubmited, setAlert}) => {

  const [loginDetails, setLogindetails] = useState({username:"", password: ""})

  const handleLogin = (e) =>{
    setLogindetails({...loginDetails, [e.target.name]: e.target.value})

  }

  const handleRegistration = (e) =>{
      e.preventDefault()
      let users = JSON.parse(localStorage.getItem("users"))
      users.map((user) => {
        if(user.username === loginDetails.username && user.password === loginDetails.password){
          setIsSubmited(true)
        }else{
          setAlert({ishow:true, status:"error", message: "field incorrect"})
        }
        // if(user.password === loginDetails.password){
        //   setIsSubmited(true)
        // }
      })
  }
  return (
    <div>
      <h1>Login</h1>
      <div className='auth-register'>
        <label>Username</label>
        <input name='username' onChange={handleUserInput}/>
        <br/>
        
        <label>Password</label>
        <input name='password' onChange={handleUserInput}/>
        <br/>
        <button onClick={handleLogin}>Login</button>
    </div>
    </div>
  )
}

export default Login