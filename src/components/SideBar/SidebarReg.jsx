import React from "react"
import "./sideBar.css"
import Background from "./backGraund/backgraund"
import { Link } from "react-router-dom"

export const SidebarReg = () => {
  return (
    <div className="sidebar">
      <div className="bg">
        <Background role="register" />
      </div>
      <div className="sidebar_nav">
        <div className="nav">
        <Link to="/" className="back">
      	 	<i className="fas fa-chevron-left" />
      	</Link>
          <div className="btncalc">
            <Link to="/main">
                Бош саҳифа
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
