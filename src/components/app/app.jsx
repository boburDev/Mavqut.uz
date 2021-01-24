import Sidebar from "../SideBar/sideBar"
import { Switch, Route } from "react-router-dom"
import UserMain from '../UserMain/UserMain'
import Register from "../Register/Register"
import LogIn from "../Register/LogIn/LogIn"
import { SidebarReg } from "../SideBar/SidebarReg"
import Term from '../Terms/Terms'
import Privacy from '../Privacy/Privacy'
import Theme from '../Mavzu/Mavzu'
import Edits from '../Edit/Edit'
import DonatProcess from '../ProcessdDonat/ProcessDonat'
import RuzaUpdate from '../RuzaUpdate/RuzaUpdate'
import Section from '../MainPage/Section/Section'
import Navbar from '../MainPage/Navbar/Navbar'
import Page1 from '../HadisPages/Page1/Page1.jsx'
import Page2 from '../HadisPages/Page2/Page2.jsx'
import Page3 from '../HadisPages/Page3/Page3.jsx'
import Page4 from '../HadisPages/Page4/Page4.jsx'
import Page5 from '../HadisPages/Page5/Page5.jsx'
import Page6 from '../HadisPages/Page6/Page6.jsx'
import AboutUs from '../AboutSection/MainAbout'
import GetInTouch from "../Validation/Validation";
import './index'
import { useEffect, useLayoutEffect, useState } from "react"

function App() {

	window.onresize = () => {
		let width = window.innerWidth
		const windowNone = document.querySelector('.display')
		const windowNoneSecond = document.querySelector('.main')
		if (width < 1200) {
			if (windowNone) {
				windowNone.style.display = 'none'
			}else {
				windowNoneSecond.style.display = 'none'
			}
		} else {
			if (windowNone) {
				windowNone.style.display = 'block'
			} else {
				windowNoneSecond.style.display = 'block'
			}
			
		}
	}
	useLayoutEffect(() => {
		let width = window.innerWidth
		const windowNone = document.querySelector('.display')
		const windowNoneSecond = document.querySelector('.main')
		if (width < 1200) {
			if (windowNone) {
				windowNone.style.display = 'none'
			}else {
				windowNoneSecond.style.display = 'none'
			}
		} else {
			if (windowNone) {
				windowNone.style.display = 'block'
			} else {
				windowNoneSecond.style.display = 'block'
			}
			
		}
	},[])

	const [index,setIndex] = useState()

	function getRandomInt(min, max) {
		min = Math.ceil(min)
		max = Math.floor(max)
		return Math.floor(Math.random() * (max - min)) + min
	}

		useEffect(()=>{
		const index = getRandomInt(0,5)
		setIndex(index)
		},[])


	return (
		
			<Switch>
				<Route path='/' exact>
					<div className="main">
					{
						index === 1 ? <Page1 /> :
						index === 2 ? <Page2 /> :
						index === 3 ? <Page3 /> :
						index === 4 ? <Page4 /> :
						index === 5 ? <Page5 /> : <Page6 /> 
					}
					</div>
				</Route>
				<Route path='/main' exact>
					<div className="main">
						<Section />
						<Navbar />
					</div>
				</Route>
				<Route path='/about-us' exact>
					<div className="main">
						<AboutUs />
					</div>
				</Route>
				<Route path='/get-in-touch' exact>
					<div className="main">
						<GetInTouch />
					</div>
				</Route>
				<Route path='/main/dashboard' exact>
				<div className="display">
					<Sidebar />
					<div className="block_blocks" style={{width:'80%', display:'flex', flexDirection:'column', marginLeft:"auto"}}>
					<UserMain type="main" />
					</div>
				</div>
				</Route>
				<Route path='/main/calculate' exact>
				<div className="display">
					<Sidebar />
					<div className="block_blocks" style={{width:'80%', display:'flex', flexDirection:'column', marginLeft:"auto"}}>
						<UserMain />
						<DonatProcess />
						<RuzaUpdate />
					</div>
					</div>
				</Route>
				<Route path='/main/statistics' exact>
				<div className="display">
					<Sidebar />
					<div className="block_blocks" style={{width:'80%', display:'flex', flexDirection:'column', marginLeft:"auto"}}>
					<UserMain type="statistics" />
					</div>
					</div>
				</Route>
				<Route path='/register/sign-up' exact>
				<div className="display">
					<SidebarReg />
					<Register />
				</div>
				</Route>
				<Route path="/register/sign-in" exact>
				<div className="display">
					<SidebarReg />
					<LogIn />
					</div>
				</Route>
				{/* <Route path="/logout" exact>
				<div className="display">
					<SidebarReg />
					<Logout />
					</div>
				</Route> */}
				<Route path="/setting/" exact>
				<div className="display">
					<Sidebar />
					<div className="block_blocks" style={{width:'80%', display:'flex', flexDirection:'column'}}>
						<UserMain type='term' who="user" />
						<Edits />
					</div>
					</div>
				</Route>
				<Route path="/setting/theme" exact>
				<div className="display">
					<Sidebar />
					<div className="block_blocks" style={{width:'80%', display:'flex', flexDirection:'column'}}>
						<UserMain type='term' who="user" />
						<Theme />
					</div>
					</div>
				</Route>
				<Route path="/setting/term" exact>
				<div className="display">
					<Sidebar />
					<div className="block_blocks" style={{width:'80%', display:'flex', flexDirection:'column'}}>
						<UserMain type='term' />
						<Term />
					</div>
					</div>
				</Route>
				<Route path="/setting/privacy" exact>
				<div className="display">
					<Sidebar />
					<div className="block_blocks" style={{width:'80%', display:'flex', flexDirection:'column'}}>
						<UserMain type='term' />
						<Privacy />
					</div>
					</div>
				</Route>
			</Switch>

		)
	}
	
	export default App
	