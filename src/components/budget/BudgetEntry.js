import React, { useState , useEffect} from 'react'


const BudgetEntry = (props) => {
    let {budget, setBudget, balance, setBalance, total, setTotal} = props;

    
    const [input, setInput] = useState({budgetName:"", budgetAmount:"", budgetDescription:""});
    const handleInput = (e) => {
        setInput({...input, [e.target.name]: e.target.value})
        
    }


    const createBudget =()=>{
        let budgetData = [ ...budget, {...input, date:Date.now()}]
        balance > 0? setBudget(budgetData) : setBudget({})
        let budgetTotal = Number(input.budgetAmount)

        balance > 0? setTotal(total += budgetTotal) : setTotal(0)
        setInput({budgetName:"", budgetAmount:"", budgetDescription:""})
        
        balance > budgetTotal ? setBalance(balance - budgetTotal) : 
        setBalance((initial)=>{
            setTimeout(() => {
                setBalance(initial)
            }, 2000);
            return "Invalid input"
        })
           
    }

  return (
    <div className='budget-body-container'> 
        <div className='budgetEntry'>
            <p>Budget Name </p>
            <input value={input.budgetName} onChange={handleInput} name='budgetName'/>
        </div>
        <div className='budgetEntry'>
            <p>Budget Amount </p>
            <input value={input.budgetAmount} onChange={handleInput} name='budgetAmount'/>
        </div>
        <div className='budgetEntry'>
            <p>Budget Description </p>
            <input value={input.budgetDescription} onChange={handleInput} name='budgetDescription'/>
        </div>

        <button onClick={createBudget}>Enter</button>
        
    </div>
  )
}

export default BudgetEntry