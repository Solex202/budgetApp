import React, {useState} from "react";
import TotalCalculation from './TotalCalculation'

const BudgetEntry = (props) => {
    
    let {budget, setBudget,balance,setBalance, total,setTotal} = props;
    const [input , setInput] = useState({budgetName:'', budgetAmount:'', budgetDescription:''})

    const handleInput= (e) => {
        setInput({...input, [e.target.name] : e.target.value})
    }

    const createBudget = () => {
        let budgetData = [ ...budget, {...input,date: Date.now()}]
        setBudget(budgetData)
        setInput({budgetName:'', budgetAmount:'', budgetDescription:''})
        setTotal(total += Number(input.budgetAmount))
        setBalance(balance -  Number(input.budgetAmount))

        
    }
    return ( 
        <>
        
            <div className="budget-entry-container">
                <div className="budgetEntry">
                    <p>Budget Name  </p>
                    <input name="budgetName" onChange={handleInput}></input>
                </div>
                <div className="budgetEntry">
                    <p>Budget Amount  </p>
                    <input name="budgetAmount" onChange={handleInput}></input>
                </div>
                <div className="budgetEntry" >
                    <p>Budget Description</p>
                    <input name="budgetDescription" onChange={handleInput}></input>
                </div>
                <button onClick={createBudget}>Enter</button>

               
            </div>
             {/* <TotalCalculation total = {total}/> */}

             </>
        
);
}
export default BudgetEntry;