import React from 'react'
import MyButton from "./components/MyButton";
import ProfileCard from "./components/ProfileCard";
import "./MyApp.css"


const MyApp = () => {
    return ( 
        <div className='myapp-container'>
        {/* <h1>My App</h1> */}
        {/* <MyButton  buttonName = "Tolu" color = "yellow" background = "pink"/>
        <MyButton  buttonName= "lotachi" color = "green" background = "black"/>
        <MyButton  buttonName = "Adeola" color = "orange" background = "purple"/> */}
        {/* <div className="myapp-container"> */}
        <ProfileCard  username="senior dev"  hobby="coding"/>
        <ProfileCard  username="lota"  hobby="eating"/>
        <ProfileCard/>
        {/* </div> */}
        

        </div>
     );
}
 
export default MyApp;