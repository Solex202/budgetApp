import React, { useState } from 'react'
import image from "../assets/logo.svg"
import "./ProfileCard.css"

const ProfileCard = (props) => {
    let {username, hobby} = props
    const handleClick = ()=>{
        // console.log("click");
        let newObject = {username: `Mr ${username}`, hobby: `My ${hobby}`}
        setState({...state, ...newObject})
        console.log({...state,...newObject});
    }

    const [state, setState] = useState({username: username, hobby: hobby})
  return (
    <div className='profile-card'>
        <img src={image} alt="profile card" className='profile-card-avatar'/>
        <div className="details-container">
            <div className="firstName-details">
                <p>Name</p>
                <h3>{state.username}</h3>
            </div>
            <div className="hobby-details">
                <p>Hobby</p>
                <h3>{state.hobby}</h3>
            </div>
        </div>
        <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default ProfileCard