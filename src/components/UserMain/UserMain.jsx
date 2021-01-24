import st from "./UserMain.module.scss"
import { useCategory } from './Context'
import cl from "classnames"
import UserNav from "./UserNav/UserNav"
import WelcomeNav from "./WelcomeNav/WelcomeNav"
import NamozQazosi from "./tempComponent/namozQazosi"
import RuzaQazosi from "./tempComponent/ruzaQazosi"
import StatusBar from "./StatusBar/StatusBar"
import LineStatistics from '../LineProcess/LineProcess'
import RuzaCalendar from '../UserMain/Calendar/Calendar'
import { useEffect, useState } from "react"
import { Redirect } from 'react-router-dom'
import { useServer } from '../app/ServerContext'
import axios from "axios"
function UserMain({type, who}) {
	const [category] = useCategory()
	const [server] = useServer()
	const [userData,setUserData] = useState({})
	const token = window.localStorage.getItem("access_token")
	useEffect(()=>{
		;(async()=>{
			if (server) {
				const resp = await axios.get(server + '/api/user/info',{
					headers: {
						'authorization': `Bearer ${token}`
					}
				})
				setUserData({
					user_id: resp.data._id,
					name: resp.data.name,
					surname: resp.data.surname,
					avatar: resp.data.avatar,
					age: resp.data.age,
					start_namaz: resp.data.start_at_namaz
				})

				// const resp1 = await axios.get(server + '/api/remnant/info',{
				// 	headers: {
				// 		'authorization': `Bearer ${token}`
				// 	}
				// })
				// console.log(resp1.data)
			}
		})()
	},[server,token])
	
	useEffect(()=>{
		;(async()=>{
			if (server && userData.user_id) {
				const resp = await axios.get(server + `/api/daily/user/getAll/${userData.user_id}`)
				console.log(resp.data[0])
				
			}
		})()
	},[server, userData])

	if (!token) return <Redirect to="/register/sign-in" />
	return (
		<div className={cl(st.main)}>
		<div className={cl(st.main_userNav)}>
		
		<UserNav avatar={userData.avatar} name={userData.name} surname={userData.surname}/>
		<WelcomeNav type={type} who={who} category={category} name={userData.name}/>
		{
			type !== 'term' && <StatusBar start="15" current={"20"} end={"35"} />
		}
		</div>
		{
			type === 'main' ? <>
			<div style={{display: category === 'Namaz' ? 'block' : 'none'}}>
			<NamozQazosi initial_date={""} />
			</div>
			<div style={{display: category === 'Fasting' ? 'block' : 'none'}}>
			<RuzaQazosi />
			</div>
			</> : type === 'statistics' ? <>
			<div style={{display: category === 'Namaz' ? 'block' : 'none'}}>
			<LineStatistics />
			</div>
			<div style={{display: category === 'Fasting' ? 'block' : 'none'}}>
			<RuzaCalendar />
			</div>
			</> : ''
		}
		</div>
		)
	}
	
	export default UserMain
	