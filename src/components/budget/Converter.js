import axios from 'axios'
import React ,{useState, useEffect}from 'react'
import './converter.css'

function Converter(props) {

const [exchangeRate, setExchangeRate] = useState([])
    const {balance , setBalance} = props
    const [option , setOption] = useState("")
    const [rate, setRate] = useState({})

    const handleOptionChange = (e) =>{
        setOption(e.target.value)
    }

    useEffect(() => {
        axios.get('https://v6.exchangerate-api.com/v6/9177ccc3a4d4e7d11c3c3feb/latest/NGN')
        .then((response) => {
            // let keys = Object.keys(response.data.conversion_rates)
                 setExchangeRate(Object.keys(response.data.conversion_rates))
                 setRate(response.data.conversion_rates)
                 setBalance(balance)
        })
    }, [])

    // useEffect(() => {
    //     fetch('https://v6.exchangerate-api.com/v6/9177ccc3a4d4e7d11c3c3feb/latest/NGN')
    //         .then((data) => data.json())
    //         .then((data) => {
    //            let keys = Object.keys(data.conversion_rates)
    //             setExchangeRate(Object.keys(data.conversion_rates))
    //             setRate(data.conversion_rates)
    //             setBalance(balance)
    //         }
    //     )}, [])

        useEffect (() => {
            setBalance(balance * rate[option])
        },[option])
        
return (
    <div>
        <select className='dropdown' onChange={handleOptionChange}>
           { exchangeRate.map((val, index)=> 
               <option key={index}>{val}</option>
           )}
        </select>
    </div>
  )
}

export default Converter