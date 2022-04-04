import React from "react";
import { toDatetimeLocal } from "../../util";
import './BudgetDetails.css'

const BudgetDetails = (props) => {
    // let {budget, setBudget} = props

       
//   const  deleteRow = (e)=> {
//       let td = e.target.parentNode;
//       let tr = td.parentNode;
//       tr.parentNode.removeChild(tr)
        // let row = btn.parentNode.parentNode;
        // row.parentNode.removeChild(row);
  
           
    
    let {budget, setBudget, balance,setBalance,total,setTotal} = props

    const deleteEntry = (objectId,amount) => {
        let newObject = [...budget]
        const newBudget = (newObject.filter((data,index) => index !== objectId))
        setBudget(newBudget)
        let BudgetBalance = balance + Number(amount)
        setBalance(BudgetBalance)
        setTotal(total - Number(amount))

    }
    return ( 

        <div className="budget-details-container">
            <h1>Details</h1>
            {budget.length > 0 
            ? 
            <table>

                <tr className="table-header">
                    <th>Date</th>
                    <th>Budget Name</th>
                    <th>Amount</th>
                    <th>Description</th>
                    <th>Delete</th>
                </tr>

                {
                    budget.map((data, index) => 
                    <tr key={index} className="data-row">
                        <td>{toDatetimeLocal(data.date)}</td>
                        <td>{data.budgetName}</td>
                        <td>{data.budgetAmount } </td>
                        <td>{data.budgetDescription}</td>
                        <td><button onClick={() =>deleteEntry(index,data.budgetAmount)}  style={{backgroundColor: 'indigo',color:'white', padding:'2px 10px', outline:'unset'}}>
                                Delete 
                                </button>
                        </td>
                    </tr>)
                }
            </table>
            : "E  no gum"}
            {/* <div>Total budget amount :</div> */}
        </div>
     );
}
 
export default BudgetDetails;