import React, {useState} from 'react'
import './budgetLoginPage.css'
import Budget from '../../Budget'

function BudgetLoginPage({submitForm}) {
  
  const [loginDetails, setLoginDetails ] = useState({username: "", password:""})

  // const [password, setpassword] = useState("")

  const handleChange = (e) =>{
    // setName(e.target.value.toLowerCase())
    setLoginDetails({...loginDetails,[e.target.name] : e.target.value })
    
  }

  // const handleChange2 = (e) =>{
  //   setpassword(e.target.value)
  // }

  const handleSubmit = (e) =>{
    console.log(loginDetails);
    e.preventDefault()
    if(loginDetails.name === 'seniordev' && loginDetails.password === 'lotachi123'){
      submitForm()
      // console.log(props)
    }
    else{
      console.log("not submitted");
    }
  }
  return (

    <div className='login_container'>
        
        <div className='center_page'>
            <div className='container'>
                <h3>LOGIN</h3>
              
                  {/* <label htmlFor='name: '>Name:</label> */}
                  <input type='text' name='' id='' placeholder=" Please enter username" onChange={handleChange}/>
                  <input type='text' name='' id='' placeholder=' Please enter password' onChange={handleChange}/>
                  <button onClick={handleSubmit}>Login</button>
  
            </div>
        </div>
        
    </div>
  );
}

export default BudgetLoginPage