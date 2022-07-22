import axios from 'axios'
import React, {useEffect, useState} from 'react'

const Exchange = (props) => {
   
    const [input,setIsInput] = useState("")
    const[exchangerate, setExchangeRate] = useState({})
    const[selectOption, setSelectOption] = useState("")

    let {budget, setSelectOpt} = props


    const handleInput = (e) => {
        setIsInput(e.target.value)
    }
    const handleSelect = (e)=>{
    
        selectOption===""?
        props.setBalance(props.balance * exchangerate[e.target.valueof]) :
        props.setBalance(props.balance / exchangerate[selectOption] * exchangerate[e.target.value])
        

        for(let i=0; i< budget.length; i++) {
            budget[i]["budgetAmount"]= budget[i]["budgetAmount"]/exchangerate[selectOption]* exchangerate[e.target.value]
        }
        setSelectOption(e.target.value)
        setSelectOpt(e.target.value)
    }
    useEffect(()=>{
        axios.get('https://v6.exchangerate-api.com/v6/8f58fa831aa1c2654d0d26a0/latest/NGN')
        .then((response)=> 
        {setExchangeRate(response.data.conversion_rates)
        setSelectOption(Object.keys(response.data.conversion_rates)[0])
        })
    },[])

  return (
    <div>
            <select className='dropdown' onChange={handleSelect}> 
            {Object.keys(exchangerate).map((value, index)=>           
                <option key={index}>{value}</option>
            )}
            </select>
    </div>
  )
}

export default Exchange