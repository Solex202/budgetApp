import React, {useState} from 'react'

const Register = ({setAlert}) => {

    const [userDetails, setuserDetails] = useState({username:"", email:"", password:""})

    const handleUserInput = (e) => {
        setuserDetails({...userDetails, [e.target.name] : e.target.value})
    }

    const handleRegistration = (e) =>{
        let{username,email} = userDetails
        //check if all fields have values
        let isFieldIncomplete =  Object.keys(userDetails).some((detail) => detail === " ")
        if(isFieldIncomplete){
            setAlert({ishow:true, status:"error", message: "field incomplete"})
            // console.log("field incomplete");
            return
        }
        //validate email is email
        let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        let isEmailCorrect = email.match(validRegex)
        if(!isEmailCorrect){
            setAlert({ishow:true, status:"error", message: "email incorrect"})
            // console.log("email incorrect");
            return
        }
        //validate username doesn't exist
        let usersRepository
        try{
            usersRepository = JSON.parse(localStorage.getItem("users"))
            let isUserExist = usersRepository.some((user) => user.username === username)
            if(isUserExist){
                setAlert({ishow:true, status:"error", message: "username already exists"})
                // console.log("username already exists");
                return
            }
            let newUsersRepository = [userDetails, ...usersRepository]
            localStorage.setItem("users", JSON.stringify(newUsersRepository))
            setAlert({ishow:true, status:"success", message: "Registration succesful"})
            // console.log(newUsersRepository);

        }catch(error){
            localStorage.setItem("users", JSON.stringify([userDetails]))
    //    console.log([userDetails]);
    setAlert({ishow:true, status:"success", message: "Registration succesful"})
            // return
        }
       
    }
  return (
    <div className='auth-register'>
        <label>Username</label>
        <input name='username' onChange={handleUserInput}/>
        <br/>
        <label>Email</label>
        <input name='email' onChange={handleUserInput}/>
        <br/>
        <label>Password</label>
        <input name='password' onChange={handleUserInput}/>
        <br/>
        <button onClick={handleRegistration}>Register</button>
    </div>
  )
}

export default Register