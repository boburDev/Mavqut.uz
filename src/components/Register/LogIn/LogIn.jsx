import TopNav from "../Top_nav/TopNav"
import { Link, Redirect } from "react-router-dom"
import  "../register.css"
import "./login.css"
import { useRef } from "react"
import { useServer } from '../../app/ServerContext'
import axios from "axios"
import { useRegistration } from '../Registration_Context'
import { useEffect } from 'react'
import Languages from "../../lang/languages"
import { useLang } from '../../lang/langContext'
import { useParams } from 'react-router-dom'

export default function LogIn() {
	
  const [language, setLanguage] = useLang()
	const { lang } = useParams()

	useEffect(()=>{
		setLanguage(lang || 'UZ')
	  },[lang, setLanguage])


	const [server] = useServer()
	const number = useRef()
	const password = useRef()
	const [token,setToken] = useRegistration()
	async function loginForm(e) {
		e.preventDefault()
		const userData = {
			phone: number.current.value,
			password: password.current.value
		}
		if(server){
			const resp = await axios.post(server + '/api/user/login', userData)
			setToken(resp.data.token)
		}
	}
	if (token) return <Redirect to="/main/dashboard" />

    return (
      <div className="register">
        <div className="top_nav">
          <TopNav />
        </div>
        <div className="details">
		  <form onSubmit={loginForm} id="form" className="login">
            <label>
			{Languages[language].main.authintification.phone} <br></br>
              <input ref={number} type="phone" placeholder={Languages[language].main.phone} name="number" />
            </label>
            <label>
            
            {Languages[language].main.authintification.password} <br></br>
              <input ref={password} type="password" placeholder={Languages[language].main.password} name="password" />
            </label>
            <span>
              {Languages[language].main.authintification.dontHave} <Link to="/register/sign-up">{Languages[language].main.authintification.here}</Link>{" "}
              {Languages[language].main.authintification.press}
              <br />
              <Link to="/get-in-touch">{Languages[language].main.authintification.forgetPassword}</Link>
            </span>
          </form>
        </div>
        <input type="submit" value={Languages[language].main.authintification.send} form="form" />
        <div className="bg"></div>
      </div>
    )
  }
