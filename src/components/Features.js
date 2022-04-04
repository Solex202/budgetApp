import React from 'react'

const Features = (props) => {
  const features = [
    {
      number: "01",
      heading:"Get best deals",
      body:"Find help with your booking and travel  plan and see what to expect along your journey with us today",
      body1: " plan and see what ",
      btnStyle : {
        backgroundColor:"red",
        color:"white",
        width:"80px",
        borderRadius: "9px",
        padding: "15px"
      }
    },
    {
      number: "02",
      heading:"Get best deals",
      body:"Find help with your booking and travel ",
      btnStyle:  {
        backgroundColor:"purple",
        color:"white",
        width:"80px",
        borderRadius: "9px",
        padding: "15px"
      }
    },
    {
      number: "03",
      heading:"Get best deals",
      body:"Find help with your booking and travel ",
      btnStyle : {
        backgroundColor:"green",
        color:"white",
        width:"80px",
        borderRadius: "9px",
        padding: "15px"
      }
      
    },
  ]
  return (
    
    <div>
      {features.map(feature=>(
        
        <div>
          
          <span style= {feature.btnStyle}>{feature.number} </span>
          <h3>{feature.heading}</h3>
          <p>{feature.body}</p>
          <p>{feature.body1}</p>
        </div>
      ))}
        {/* <span>01</span>
        <h3>Get best deals</h3>
        <p>Find help with your booking and travel <br/> 
            plan and see what <br/>
            to expect along your journey with us today
        </p> */}
    </div>
  )
}

export default Features