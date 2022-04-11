import { useState } from "react";
import Budget from "./Budget"
import BudgetLoginPage from "./components/budget/BudgetLoginPage";
import "./NewApp.css"

function NewApp(){

    const[isSubmited, setIsSubmited] = useState(false)


    // const submitForm = () =>{
    //     setIsSubmited(true)
    // }

    function submitForm(){
        setIsSubmited(true)
    }

    return(

        <div className="app-container">
            {!isSubmited ? <BudgetLoginPage check={false} submitForm={submitForm}/>: <Budget/>}
        </div>
    );
}

export default NewApp;