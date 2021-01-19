import React from 'react'
import user_avatar from "../../assets/user_ava_1.png";
import  './Account.css'

function Account(props) {
    return (
            <div className="accounts" key={props.index}>
                <img src={props.avatar || user_avatar} alt="avatar_icon" />
                <h6>{props.surname + " " + props.name}</h6>
            </div>
    )
}

export default Account
