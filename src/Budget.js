import { useState } from "react";
import "./Budget.css"
import BudgetBalance from "./components/budget/BudgetBalance";
import BudgetBody from "./components/budget/BudgetBody";

const Budget = ({userName}) => {
    let val = 10000;
    const [balance, setBalance] = useState(val)
    const [budget, setBudget] = useState([])
    const [selectOpt, setSelectOpt] = useState("NGN")


    return ( 
       
        <div className="budget-container">
            <BudgetBalance setBudget = {setBudget} setSelectOpt = {setSelectOpt} budget = {budget} balance = {balance} setBalance ={setBalance} val = {val}/>
            <BudgetBody setBudget = {setBudget} selectOpt = {selectOpt} budget = {budget} balance={balance} setBalance={setBalance} userName = {userName}/>
        </div>
     );
}
 
export default Budget;