import edit from './assets/edit.png'
import registerUser from '././assets/register_user.png'
import tick_icon from '././assets/tick_icon.png'
import './Edit.css'
import { useRef, useState } from 'react'
import axios from 'axios'
import { useServer } from "../app/ServerContext"

import { useEffect } from 'react'
import Languages from "../lang/languages"
import { useLang } from '../lang/langContext'
import { useParams } from 'react-router-dom'

export default function Edit() {

	const [server] = useServer()
	const [language, setLanguage] = useLang()
	const { lang } = useParams()

	useEffect(()=>{
		setLanguage(lang || 'UZ')
	  },[lang, setLanguage])
	  

	const [image,setImage] = useState('')
	const name = useRef()
	const surname = useRef()
	const [gender,setGender] = useState()
	const age = useRef()
	const email = useRef()
	const phone = useRef()
	const [,setLang] = useState()
	const password = useRef()

	const [fetchingData,setFetchingData] = useState()
	const token = window.localStorage.getItem("access_token")
	useEffect(()=>{
		;(async()=>{
			if (server) {
				const resp = await axios.get(server + '/api/user/info',{
					headers: {
						'authorization': `Bearer ${token}`
					}
				})
				const setUserData = {
					user_id: resp.data._id,
					name: resp.data.name,
					surname: resp.data.surname,
					avatar: resp.data.avatar,
					age: resp.data.age,
					email: resp.data.email,
					gender: resp.data.gender,
					phone: resp.data.phone,
				}
				setFetchingData(setUserData)
			}
		})()
	},[server,token])

	function editingForm(e) {
		e.preventDefault()
			;(async()=>{
	
				
				try {
					const userDate = {
						name: name.current.value || fetchingData.name,
						surname: surname.current.value || fetchingData.surname,
						age: age.current.value || fetchingData.age,
						gender: gender || fetchingData.gender,
						icon: image || fetchingData.avatar,
						email: email.current.value || fetchingData.email,
						phone: phone.current.value || fetchingData.phone,
					}
					const userDate1 = {
						name: name.current.value || fetchingData.name,
						surname: surname.current.value || fetchingData.surname,
						age: age.current.value || fetchingData.age,
						gender: gender || fetchingData.gender,
						icon: image || fetchingData.avatar,
						email: email.current.value || fetchingData.email,
						phone: phone.current.value || fetchingData.phone,
						password: password.current.value
					}
					if (server && password.current.value.length){
						const resp = await axios.put(server + '/api/user/', userDate1,{
							headers: {
								'authorization': `Bearer ${token}`
							}
						})
						console.log(resp)
					} else if (server){
						const resp = await axios.put(server + '/api/user/', userDate,{
							headers: {
								'authorization': `Bearer ${token}`
							}
						})
						console.log(resp)
					}
				} catch (err) {
					console.error(err)
				}
			})()
		}


	return(
		<div>
			<form onSubmit={editingForm} className="editAll">
				<div className="row">
					<div className="left col-xl-6">
						{/*editPhoto*/}
						<div className="editPhoto">
							<div className="title">
								<div className="img">
									<img alt="icon" src={edit} className="w-100" />
								</div>
								<p>
									{Languages[language].main.changeImg}
								</p>
							</div>
							<div className="profilePhotos">
								<div className="form_right_imgProfile">
									<div className="one">
										<input onChange={(e)=>setImage(e.target.value)} type="radio" name="avatar" id="ava_1" value="user_ava_1.png" />
										<label htmlFor="ava_1" className="avatar_1">
										<span>
											<img src={tick_icon} alt="img" />
										</span>
										</label>
										<input onChange={(e)=>setImage(e.target.value)} type="radio" name="avatar" id="ava_2" value="user_ava_2.png" />
										<label htmlFor="ava_2" className="avatar_2">
										<span>
											<img src={tick_icon} alt="img" />
										</span>
										</label>
										<input onChange={(e)=>setImage(e.target.value)} type="radio" name="avatar" id="ava_3" value="user_ava_3.png" />
										<label htmlFor="ava_3" className="avatar_3">
										<span>
											<img src={tick_icon} alt="img" />
										</span>
										</label>
									</div>
									<div className="two">
										<input onChange={(e)=>setImage(e.target.value)} type="radio" name="avatar" id="ava_4" value="user_ava_4.png" />
										<label htmlFor="ava_4" className="avatar_4">
										<span>
											<img src={tick_icon} alt="img" />
										</span>
										</label>
										<input onChange={(e)=>setImage(e.target.value)} type="radio" name="avatar" id="ava_5" value="user_ava_5.png" />
										<label htmlFor="ava_5" className="avatar_5">
										<span>
											<img src={tick_icon} alt="img" />
										</span>
										</label>
										<input onChange={(e)=>setImage(e.target.value)} type="radio" name="avatar" id="ava_6" value="user_ava_6.png" />
										<label htmlFor="ava_6" className="avatar_6">
										<span>
											<img src={tick_icon} alt="img" />
										</span>
										</label>
									</div>
								</div>
							</div>
						
						</div>
						{/*personalEdit*/}
						<div className="personalEdit">
							<div className="title">
								<div className="img">
									<img alt="icon" src={registerUser} className="w-100" />
								</div>
								<p>{Languages[language].main.authintification.personalInfo}</p>
							</div>
							<div className="nameEdit">
								<div className="row">
									<div className="name_block col-xl-6 col-6">

										<label htmlFor="name" className="form-label">{Languages[language].main.authintification.name}</label>
										<div className="input-group mb-3">
											<div className="img">
												<img alt="icon" src={edit} className="w-100" />
											</div>
											<input ref={name} type="text" className="form-control" placeholder={fetchingData && fetchingData.name} id="name" aria-label="Username" aria-describedby="basic-addon1" />
										</div>

									</div>
									<div className="name_block col-xl-6 col-6">
									
										<label htmlFor="name" className="form-label">{Languages[language].main.authintification.surname}</label>
										<div className="input-group mb-3">
											<input ref={surname} type="text" className="form-control" placeholder={fetchingData && fetchingData.surname} id="surname" aria-label="Username" aria-describedby="basic-addon1" />
										</div>

									</div>
								</div>
							</div>
						</div>
						{/*Gender and Age*/}
						<div className="genderAge">
							<div className="nameEdit">
								<div className="row">
									<div className="name_block col-xl-6 col-6">
										<label htmlFor="group1" className="form-label">{Languages[language].main.authintification.gender.title}</label>
										<div className="input-group-gender">
										<div>
											<input onChange={(e)=>setGender(e.target.value)}  className="" type="radio" value="male" name="group1" aria-label="Radio button for following text input" id="radio1" />
											<label htmlFor="radio1" className="gender-radio">{Languages[language].main.authintification.gender.male}</label>
										</div>
										<div>
											<input onChange={(e)=>setGender(e.target.value)} className="" type="radio" id="radio2" value="female" name="group1" aria-label="Radio button for following text input" />
											<label htmlFor="radio2" className="gender-radio">{Languages[language].main.authintification.gender.female}</label>
										</div>
											
										</div>

									</div>
									<div className=" name_block col-xl-6 col-6">
										<label htmlFor="age" className="form-label">{Languages[language].main.authintification.age}</label>
										<div className="input-group mb-3">
											<input ref={age} type="number" max='99' className="form-control age_input" placeholder={fetchingData && fetchingData.age} id="age" aria-label="age" />
										</div>
									</div>
								</div>
							</div>
						</div>
						{/*Email and Number*/}
						<div className="email">
							<div className="nameEdit">
								<div className="row">
									<div className="name_block col-xl-6 col-6">

										<label htmlFor="name" className="form-label">{Languages[language].main.mail}</label>
										<div className="nameEditemail input-group mb-3">
											<input ref={email} type="text" className="form-control" placeholder={fetchingData && fetchingData.email} id="email" aria-label="Username" aria-describedby="basic-addon1" />
										</div>

									</div>
									<div className="name_block col-xl-6 col-6">
									
										<label htmlFor="name" className="form-label">{Languages[language].main.phone}</label>
										<div className="input-group mb-3">
											<input ref={phone} type="text" className="form-control" placeholder={fetchingData && fetchingData.phone} id="number" aria-label="Username" aria-describedby="basic-addon1" />
										</div>

									</div>
								</div>
							</div>
						</div>

					</div>
					<div className="right col-xl-6">
						{/*language*/}
						<div className="language_profile">
							<div className="title">
								<div className="img">
									<img alt="icon" src={edit} className="w-100" />
								</div>
								<p>{Languages[language].main.lang.title}</p>
							</div>
							<div className="language_select">
								<div>
									<input onChange={(e)=>setLang(e.target.value)} type="radio" name="language" id="uzbek" value="uzbek" />
									<label htmlFor="uzbek">{Languages[language].main.lang.uz}</label>
								</div>
								<div>
									<input onChange={(e)=>setLang(e.target.value)} type="radio" name="language" id="russian" value="russian"  />
									<label htmlFor="russian">{Languages[language].main.lang.ru}</label>
								</div>
								<div>
									<input onChange={(e)=>setLang(e.target.value)} type="radio" name="language" id="english" value="english" />
									<label htmlFor="english">{Languages[language].main.lang.en}</label>
								</div>
							</div>
						</div>
						{/*Password*/}
						<div className="password">
							<h4>{Languages[language].main.resetPassword}</h4>
							<input ref={password} type="password" />
						</div>
					</div>
				</div>
				<button>ok</button>
				<div className="bg_image">
				</div>
			</form>
		</div>
	)
}