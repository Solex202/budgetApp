import React, { useState } from 'react'

const Register = ({setAlert}) => {
    const [userDetails, setUserDetails] = useState({username:"", email:"", password:""})

    const handleUserInput = (e)=>{
        setUserDetails({ ...userDetails, [e.target.name] : e.target.value })
    }

    const handleRegistration = ()=>{
        let {username, email} = userDetails
        //check if all fields have values
        let isFieldsIncomplete = Object.keys(userDetails).some((detail) => detail === " ")
        if(isFieldsIncomplete){
            setAlert({ishow:true, status:"error", message:"field incomplete"})
            console.log("field incomplete");
            return;
        }
        //validate email
        let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        let isEmailCorrect = email.match(validRegex)
        if(!isEmailCorrect){
            setAlert({ishow: true, status:"error", message:"Email incorrect"})
            // console.log("Email incorrect");
            return;
        }
        
        //validate username is a string

       
        try {
            let userRepository 
            userRepository = JSON.parse(localStorage.getItem("users"))
            let isUserExist = userRepository.some((user)=> user.username === username)
            if(isUserExist){
                setAlert({ishow: true, status:"error", message:"Username Already Exists"})
                // console.log("Username Already Exists");
                return
            }

            let newUsersRepository = [userDetails, ...userRepository]
            localStorage.setItem("users", JSON.stringify(newUsersRepository))
            // console.log(localStorage.getItem("users"));
            setAlert({ishow: true, status:"success", message:"Registration successful"})
            

        } catch (error) {
            localStorage.setItem("users", JSON.stringify([userDetails]))
            setAlert({ishow: true, status:"success", message:"Registration success"})
            console.log([userDetails]);
        }
        
        
    }
  return (
      
    <div className='auth-register'>
        
        <label>Username: </label>
        <input type="text" name='username' onChange={handleUserInput} />
        <br />
        <label>Email: </label>
        <input type="text" name='email'  onChange={handleUserInput} />
        <br />
        <label>Password: </label>
        <input type="password" name='password'  onChange={handleUserInput} />
        <br />
        <button onClick = {handleRegistration}>Register</button>
    </div>
  )
}

export default Register