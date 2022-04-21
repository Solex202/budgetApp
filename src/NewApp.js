import { useState } from "react";
import Authentication from "./Authentication";
import Budget from "./Budget"
import BudgetLoginPage from "./components/budget/BudgetLoginPage";
import "./NewApp.css"
import {BrowserRouter as Router} from "react-router-dom"
import { Route } from "react-router-dom";

function NewApp(){

    // const[isSubmited, setIsSubmited] = useState(false)


    // const submitForm = () =>{
    //     setIsSubmited(true)
    // }

    // function submitForm(){
    //     setIsSubmited(true)
    // }

    return(

        <div className="app-container">
            <Router>
                <switch>
                    <Route exact path="/">
                        <Authentication/>
                    </Route>

                    <Route path="/dashboard/:userName">
                        <Budget/>
                    </Route>
                </switch>
            </Router>
            {/* <Budget/> */}

        </div>

        // <div className="app-container">
        //     {isSubmited ? <Budget/>: <Authentication  setIsSubmited = {setIsSubmited}/>}
        //  {/* <Budget/> */}
        // </div>
    );
}

export default NewApp;