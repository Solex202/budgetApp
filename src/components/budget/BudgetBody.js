import React, {useState} from "react";
import BudgetEntry from "./BudgetEntry";
import BudgetDetails from "./BudgetDetails";
import "./BudgetBody.css"
import TotalCalcultion from "./TotalCalculation";
import { useParams } from "react-router-dom";

const BudgetBody = (props) => {
    const {balance,setBalance} = props
    const [budget, setBudget] = useState([])
    let [total, setTotal ] = useState(0)
    const {userName} = useParams();

    return ( 

        <div className="budget-body">
            <div className="text-intro">
            <h1>Welcome {userName} To Your personal Budget</h1>
            <p>Enter the price,description and give a special name to your expenditure </p>
            </div>
            <div className="budget-body-sectioned">
                <BudgetEntry budget={budget}  setBudget={setBudget} balance={balance} setBalance={setBalance} total ={total}  setTotal ={setTotal}/>
                <BudgetDetails budget={budget} setBudget={setBudget} balance={balance} setBalance ={setBalance} total={total} setTotal ={setTotal}/>
                <TotalCalcultion total={total} />
            </div>
        </div>
     );
}
 
export default BudgetBody;