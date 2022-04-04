import React from 'react'
import "../components/ToggleButton.css"
const ToggleButton = (props) => {

  
  return ( 
    
<button className='lota' style={{backgroundColor:'black'}}>
    <img src={props.image} alt=""/>
    <p style={{color: 'white'}}>{props.btnText}</p>
</button>
    
   );
}
 
export default ToggleButton;

// 