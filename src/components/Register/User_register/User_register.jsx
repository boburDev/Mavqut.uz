import "./User_register.css"
import register_user from "../assets/register_user.png"
import edit_icon from "../assets/edit.png"
import tick_icon from "../assets/tick_icon.png"
import { Link, Redirect } from "react-router-dom"
import { useRef, useState } from "react"
import { useServer } from '../../app/ServerContext'
import axios from "axios"
import { useRegistration } from '../Registration_Context'
import { useEffect } from 'react'
import { Lang } from "../../lang/languages"
import { useLang } from '../../lang/langContext'
import { useParams } from 'react-router-dom'

export default function UserRegister(){

  const [language, setLanguage] = useLang()
	const { lang } = useParams()

	useEffect(()=>{
		setLanguage(lang || 'UZ')
	  },[lang, setLanguage])


	const [server] = useServer()
	const name = useRef()
	const surname = useRef()
	const age = useRef()
	const [sex,setSex] = useState()
	const startNomoz = useRef()
	const startFasting = useRef()
	const [icon,setIcon] = useState()
	const email = useRef()
	const phone = useRef()
  const password = useRef()
  
  const [token,setToken] = useRegistration()


	function registtationForm(e) {
    e.preventDefault()
		;(async()=>{

			
			try {
				const userDate = {
					name: name.current.value,
					surname: surname.current.value,
					age: age.current.value,
					gender: sex,
					start_at_namaz: startNomoz.current.value,
					start_at_fasting: startFasting.current.value,
					icon: icon,
					email: email.current.value,
					phone: phone.current.value,
					password: password.current.value
				}
				if (server){
					const resp = await axios.post(server + '/api/user', userDate)
					setToken(resp.data.token)
				}
			} catch (err) {
				console.error(err)
			}
		})()
	}
	if (token) return <Redirect to="/main/dashboard" />
    return (
      <form onSubmit={registtationForm} id="myform" className="form">
        <div className="left">
          <div className="user">
            <div className="full_user_caption">
              <img src={register_user} alt="downloading..." />
              <h2>{Lang[language].main.authintification.personalInfo}</h2>
            </div>

            <div className="inputs">
              <label htmlFor="" className="form_user_labels">
			  		{Lang[language].main.authintification.name}
                <input ref={name} type="text" name="name"/>
              </label>
              <label htmlFor="" className="form_user_labels">
			  		{Lang[language].main.authintification.surname}
                <input ref={surname} type="text" name="surname" />
              </label>
              <label htmlFor="" className="form_user_labels">
                {Lang[language].main.authintification.age}
                <input ref={age} type="number" min="0" name="age" />
              </label>
            </div>
          </div>

          <div className="form_gender">
            <p>{Lang[language].main.authintification.gender.title}</p>
            <div className="radio">
              <input onChange={(e)=> setSex(e.target.value)} type="radio" id="male" name="gender" value="male" />
              <label htmlFor="male">{Lang[language].main.authintification.gender.male}</label>
              <input onChange={(e)=> setSex(e.target.value)} type="radio" id="female" name="gender" value="female" />
              <label htmlFor="female">{Lang[language].main.authintification.gender.female}</label>
            </div>
          </div>

          <div className="form_ages">
            <label>
              {Lang[language].main.authintification.namazStart}<br></br>
              <input ref={startNomoz} type="number" min="0" max="99" name="start_at_namaz" />
            </label>
            <label>
			{Lang[language].main.authintification.fastingStart}<br></br>
              <input ref={startFasting} type="number" min="0" max="99" name="start_at_fasting" />
            </label>
          </div>
        </div>

        <div className="right">
          <div className="img_box">
            <img src={edit_icon} alt="downloading..." />
            <h2>{Lang[language].main.changeImg}</h2>
            <div className="form_right_imgProfile">
              <div className="one">
                <input onChange={e=>setIcon(e.target.value)} type="radio" name="avatar" id="ava_1" value="user_ava_1.png" />
                <label htmlFor="ava_1" className="avatar_1">
                  <span>
                    <img src={tick_icon} alt="img" />
                  </span>
                </label>
                <input onChange={e=>setIcon(e.target.value)} type="radio" name="avatar" id="ava_2" value="user_ava_2.png" />
                <label htmlFor="ava_2" className="avatar_2">
                  <span>
                    <img src={tick_icon} alt="img" />
                  </span>
                </label>
                <input onChange={e=>setIcon(e.target.value)} type="radio" name="avatar" id="ava_3" value="user_ava_3.png" />
                <label htmlFor="ava_3" className="avatar_3">
                  <span>
                    <img src={tick_icon} alt="img" />
                  </span>
                </label>
              </div>
              <div className="two">
                <input onChange={e=>setIcon(e.target.value)} type="radio" name="avatar" id="ava_4" value="user_ava_4.png" />
                <label htmlFor="ava_4" className="avatar_4">
                  <span>
                    <img src={tick_icon} alt="img" />
                  </span>
                </label>
                <input onChange={e=>setIcon(e.target.value)} type="radio" name="avatar" id="ava_5" value="user_ava_5.png" />
                <label htmlFor="ava_5" className="avatar_5">
                  <span>
                    <img src={tick_icon} alt="img" />
                  </span>
                </label>
                <input onChange={e=>setIcon(e.target.value)} type="radio" name="avatar" id="ava_6" value="user_ava_6.png" />
                <label htmlFor="ava_6" className="avatar_6">
                  <span>
                    <img src={tick_icon} alt="img" />
                  </span>
                </label>
              </div>
            </div>
          </div>

          <div className="email">
            <label>
              {Lang[language].main.authintification.mail} <br></br>
              <input ref={email} type="email" placeholder="Электрон почта" name="email" />
            </label>
            <label>
              {Lang[language].main.authintification.phone} <br></br>
              <input ref={phone} type="phone" placeholder="Телефон раками" name="phone" />
            </label>
            <label>
              {Lang[language].main.authintification.password} <br></br>
              <input ref={password} type="password" placeholder="Махфий парол" name="password" />
              <span>
                {Lang[language].main.authintification.haveAnAcc} <br />{" "}
                <Link to="/register/sign-in">{Lang[language].main.authintification.here}</Link> {Lang[language].main.authintification.press}	
              </span>
            </label>
          </div>
        </div>
      </form>
    )
}