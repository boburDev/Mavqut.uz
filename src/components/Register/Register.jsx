import React from "react"
import "./register.css"
import TopNav from "./Top_nav/TopNav"
import UserRegister from './User_register/User_register'

function Register() {
  return (
    <div className="register">
      <div className="top_nav">
        <TopNav />
      </div>
      <div className="details">
        <UserRegister />
      </div>
      <input type="submit" value="Якунлаш" form="myform" />
      <div className="bg"></div>
    </div>
  )
}

export default Register