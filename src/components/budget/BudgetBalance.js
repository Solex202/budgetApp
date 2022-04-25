import { useState } from "react";
import "./budgetBalance.css"
import Exchange from './Exchange'
import { useHistory } from "react-router-dom";

const BudgetBalance = (props) => {
    const [input, setInput] = useState("");
    const history = useHistory();
    let {budget, setSelectOpt} = props;
    const handleChange= (e)=>{
        e.preventDefault();
        let value = e.target.value
        setInput(value)
    }

    const updateBalance = (input) => {
        input = Number(input)
        typeof(input) === "number" ? 
        props.setBalance(input) : 
        props.setBalance("Invalid input");
        // props.setBalance(input)
        setInput("")
    }
    const logOut = ()=>{
        history.push("/")
    }

    return ( 
        <div className="budgetBalance">
            <div className="balance">
                {props.balance}
            </div>
            <div className="balance-button">
                <input value={input}  type="text" onChange={handleChange}  />
                <Exchange setSelectOpt = {setSelectOpt} budget= {budget} balance = {props.balance} setBalance = {props.setBalance} val = {props.val}/>
                <button  onClick={()=>updateBalance(input)}>Update balance</button>
                <button  onClick={logOut}>Logout</button>
            </div>
            
        </div>
     );
}
 
export default BudgetBalance;