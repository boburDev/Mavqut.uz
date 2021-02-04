import React from "react"
import "./sideBar.css"
import Background from "./backGraund/backgraund"
import { Link } from "react-router-dom"

import { useEffect } from 'react'
import Languages from "../lang/languages"
import { useLang } from '../lang/langContext'
import { useParams } from 'react-router-dom'

export const SidebarReg = () => {

  const [language, setLanguage] = useLang()
	const { lang } = useParams()

	useEffect(()=>{
		setLanguage(lang || 'UZ')
	  },[lang, setLanguage])
	  
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
            {Languages[language].dashboard.mainPage}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
