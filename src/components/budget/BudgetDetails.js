import React, { useState } from 'react'
import { toDatetimeLocal } from '../../util';
import './budgetDetails.css'

const BudgetDetails = (props) => {
    const [input, setInput] = useState("")
    
    let {budget, setBudget, balance, setBalance, total, setTotal, selectOpt} = props;

    const handleDelete =(objectId, amount)=>{
        let newObject = [...budget]
        const newBudget = newObject.filter((entry, index)=> index !==objectId)
        setBudget(newBudget)
        let budgetBal =  balance + Number(amount)
        setBalance(budgetBal)
        setTotal(total - Number(amount))
    }

    const handleInputChange = (e)=>{
        setInput(e.target.value)
    }

    const handleSearch =(input)=>{
        
       setBudget(
       [ ...budget].filter((item) => input === item["budgetDescription"] || input === item["budgetName"] )
       )
    }

    
  return (
    <div className='budget-details-container'>
        <div>
            <h1>Details</h1>
            <div>Search for:</div>
            <input onChange={handleInputChange} type="text" />
            <button onClick={()=>{handleSearch(input)}}>Search</button>
        </div>
        
        <section style={{overflow : "auto", height: "30vh"}}>
        {budget.length > 0?
        
            <table>
            <tr className='table-header'>
                <th>Date</th>
                <th>Budget Name</th>
                <th>Amount</th>
                <th>Description</th>
            </tr>
               {budget.map((data, index)=>
                   <tr key={index} className='data-row'>
                        <td>{toDatetimeLocal(data.date)}</td>
                        <td>{data.budgetName}</td>
                        <td>{selectOpt}{data.budgetAmount}</td>
                        <td>{data.budgetDescription}</td>
                        <td className='table-delete-button'>
                        <button 
                        style={{backgroundColor:"red", color:"white", padding:"2px 10px", border:"unset", cursor:"pointer"}} 
                        onClick={()=>handleDelete(index, data.budgetAmount)}>
                            Delete
                        </button>
                        </td>
                       
                   </tr>
                   
               )}
            </table>
        
        
        :"Empty"}
        </section>
    </div>
  )
}

export default BudgetDetails