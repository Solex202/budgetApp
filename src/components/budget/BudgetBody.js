import React, { useState } from 'react'
import "./budgetBody.css"
import BudgetDetails from './BudgetDetails'
import BudgetEntry from './BudgetEntry'
import TotalComp from './TotalComp'
import { useParams } from 'react-router-dom'

let date = new Date().getUTCHours();
let greeting;
const BudgetBody = (props) => {
  const {balance, setBalance, budget, setBudget, selectOpt} = props
  const [total, setTotal] = useState(0)
  const {identity} = useParams();

   if(date >= 0 && date < 12){
      greeting = "Good morning"
   }else if(date > 11 && date < 16){
     greeting ="Good afternoon"
   }else{
     greeting ="Good evening"
   }


  return (
    <div className='budget-body'>
    {/* {setTime()} */}
        <div className='text-intro'>
            <h1>{greeting} {identity.charAt(0).toUpperCase() + identity.slice(1)}, Welcome to your Personal Budget </h1>
            <p>Enter the price, description and give a special name to your expenditure</p>
        </div>
        <div className='budget-body-sectioned'>
            <BudgetEntry budget={budget} setBudget ={setBudget} balance={balance} setBalance ={setBalance} total={total} setTotal={setTotal} />
            <BudgetDetails selectOpt = {selectOpt} budget={budget} setBudget ={setBudget} total={total} setTotal ={setTotal} balance ={balance} setBalance ={setBalance} />
            <TotalComp total={total}/>
        </div>
    </div>
  )
}

export default BudgetBody