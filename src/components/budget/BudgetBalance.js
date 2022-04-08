import React, { useState, useEffect } from "react";
import "./BudgetBalance.css"
import Converter from "./Converter";


const BudgetBalance = (props) => {

    const [input, setInput] = useState("");
    const handleInput = (e) => {
        // console.log(e);
        setInput(e.target.value)
}




 // https://v6.exchangerate-api.com/v6/9177ccc3a4d4e7d11c3c3feb/latest/USD

// useEffect(() => {
//     console.log("i just mounted @ budget balance");
// return () => {
//     console.log("i just unmounted");
// }
// }, [props.balance])

    return ( 

        <div className="budgetBalance">
            <div className="balance">
                {props.balance}
            </div>
            <div className="balance-button">
                <input  onChange={handleInput} />
                <Converter balance = {props.balance} setBalance = {props.setBalance}/>
                <button  onClick={() => props.setBalance(input)}>Update balance</button>
            </div>
            <div>
                {/* <h1>Welcome to your personal budget</h1> */}
            </div>
        </div>
    );
}
 
export default BudgetBalance;