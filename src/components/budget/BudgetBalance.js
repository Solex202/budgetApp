import React, { useState } from "react";
import "./BudgetBalance.css"


const BudgetBalance = (props) => {

    const [input, setInput] = useState("");
    const handleInput = (e) => {
        // console.log(e);
        setInput(e.target.value)
}
    return ( 

        <div className="budgetBalance">
            <div className="balance">
                {props.balance}
            </div>
            <div className="balance-button">
                <input  onChange={handleInput} />
                <button  onClick={() => props.setBalance(input)}>Update balance</button>
            </div>
            <div>
                {/* <h1>Welcome to your personal budget</h1> */}
            </div>
        </div>
    );
}
 
export default BudgetBalance;