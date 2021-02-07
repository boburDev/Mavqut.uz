import React from "react"
import "./register.css"
import TopNav from "./Top_nav/TopNav"
import UserRegister from './User_register/User_register'
import { useEffect } from 'react'
import { Lang } from "../lang/languages"
import { useLang } from '../lang/langContext'
import { useParams } from 'react-router-dom'

function Register() {

  const [language, setLanguage] = useLang()
	const { lang } = useParams()

	useEffect(()=>{
		setLanguage(lang || 'UZ')
	  },[lang, setLanguage])

  return (
    <div className="register">
      <div className="top_nav">
        <TopNav />
      </div>
      <div className="details">
        <UserRegister />
      </div>
      <input type="submit" value={Lang[language].main.authintification.send} form="myform" />
      <div className="bg"></div>
    </div>
  )
}

export default Register