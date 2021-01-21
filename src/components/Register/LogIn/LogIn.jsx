import TopNav from "../Top_nav/TopNav"
import { Link, Redirect } from "react-router-dom"
import  "../register.css"
import "./login.css"
import { useRef } from "react"
import { useServer } from '../../app/ServerContext'
import axios from "axios"
import { useRegistration } from '../Registration_Context'
export default function LogIn() {
	
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
              Телефон ракамингизни киритинг <br></br>
              <input ref={number} type="phone" placeholder="Phone" name="number" />
            </label>
            <label>
              Махфий паролингизни киритинг <br></br>
              <input ref={password} type="password" placeholder="Password" name="password" />
            </label>
            <span>
              Саҳифангиз мавжуд эмасми ? <Link to="/register/sign-up">Бу ерга</Link>{" "}
              босинг
              <br />
              <Link to="/get-in-touch">Паролни унутдингизми ?</Link>
			  {/* register/forgot-password */}
            </span>
          </form>
        </div>
        <input type="submit" value="Якунлаш" form="form" />
        <div className="bg"></div>
      </div>
    )
  }
