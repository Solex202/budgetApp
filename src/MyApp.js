import { useState } from "react";
import Authentication from "./Authentication";
import Budget from "./Budget";
import Login from "./components/budget/Login";
import MyButton from "./components/MyButton";
import ProfileCard from "./components/ProfileCard";
import { 
   BrowserRouter as Router,
   Route,
   Switch
   } from "react-router-dom";
import "./MyApp.css"
const MyApp = () => {
    const [isSubmited, setIsSubmited] = useState(false)

    // const submitForm  = ()=>{
    //     setIsSubmited(true)
    // }
    return ( 
        <div className="myapp-container">
        {/* <Login /> */}
        {/* {!isSubmited? <Login submitForm = {submitForm}/>: <Budget/>} */}
          {/* <Budget/> */}
          <Router>
            <Switch>
               <Route exact path="/">
                  <Authentication/>
               </Route>
             

               <Route path="/budget/:identity">
                  <Budget/>
               </Route>
            </Switch>

          </Router>

         {/* { isSubmited? <Budget/>:  <Authentication setIsSubmited = {setIsSubmited}/>} */}
            {/* <MyButton buttonName="Click me" background ="purple" color="yellow"/>
            <MyButton buttonName = "Lotachi" background ="black" color="yellow"/>
            <MyButton  buttonName ="UJ" background ="brown" color="yellow"/> */}
        </div>
     );
}
 
export default MyApp;