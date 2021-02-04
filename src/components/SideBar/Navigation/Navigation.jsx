import  "./Navigation.css"
import  './NavigationMedia.css'
import { useEffect, useState } from 'react'
import { Link, NavLink, useRouteMatch } from "react-router-dom"
import statisticsIcon from './icons/folders-main.png'
import mainIcon from './icons/windows-main.png'
import mainChangeIcon from './icons/window-st.png'
import statisticsChangeIcon from './icons/folder-st.png'
import logOutIcon from './icons/out.png'
import settingIcon from './icons/settings.png'
import { useSideBar } from "./Context"
import Logout from '../../Logout/Exit'
import { useLogOut } from '../../Logout/Context'
function Navigation (){
	
	
	const [toggle,  setToggle] = useState(false)
	const [imgChange, setImageChange] = useState('main')
	const [sideBarValue,sideBarHook] = useSideBar()
	const [logOut, setLogOut] = useLogOut()
	const activeCalculate={
		backgroundColor: 'white',
		color: '#7f3a96',
		borderColor: '#AB03B5'
	}

	function removeActive () {
		const remove = document.getElementsByClassName('side-navbar')[0].children
		for(let i of remove){
			if( i.children[0].classList.contains('sidebarLink--active') ) {
				i.children[0].classList.remove('sidebarLink--active')
				setImageChange('ok')
			}
		}
	}
	const route = useRouteMatch()
	useEffect(()=>{
		const split = route.url.split('/')
		const bgSideBar = document.getElementById('bg-sidebar')
		const chaeckClassHas = bgSideBar.classList.contains('top')

		if (split && split[2] === 'dashboard') {
			setImageChange('main')
			document.getElementById('statistics-sidebar-link').classList.remove('sidebarLink--active')
			document.getElementById('main-sidebar-link').classList.add('sidebarLink--active')
			sideBarHook({
				index: 'main',
				key: chaeckClassHas ? 'main' : '',
				register: null,
				roadInSideBarFooter: true,
				animateMoon: 'default'
			})
		} else if (split && split[2] === 'statistics') {
			setImageChange('statistics')
			document.getElementById('statistics-sidebar-link').classList.add('sidebarLink--active')
			document.getElementById('main-sidebar-link').classList.remove('sidebarLink--active')
			sideBarHook({
				index: 'statistics',
				key: 'main',
				register: null,
				roadInSideBarFooter: true,
				animateMoon: 'animate',
			})
		} else {
			const remove = document.getElementsByClassName('side-navbar')[0].children
			for(let i of remove){
				if( i.children[0].classList.contains('sidebarLink--active') ) {
					i.children[0].classList.remove('sidebarLink--active')
					setImageChange('ok')
				}
			}
			sideBarHook({
				register: 'calculate',
				roadInSideBarFooter: false
			})
		}
		setLogOut(true)
	},[route,sideBarHook,logOut,setLogOut])

	const hiddenStyle = {
		display: !toggle ? 'none' :'',
		visibility: !toggle ? 'hidden':''
	}
	const settingStyle = {
		backgroundColor:toggle ?'#D465A4': ''
	}
	
return (
	<div className="nav" onClick={e => {
		if (toggle) {
			setToggle(false)
		}
	}}>
	<Link to="/" className="back">
		<i className="fas fa-chevron-left" />
	</Link>

	<div className="btncalc">
	<NavLink
	to={"/main/calculate"} activeStyle={activeCalculate} className="btn-outline-light calculate rounded-pill w-100 py-1">Ҳисоб-китоб</NavLink>
	</div>

		<ul className="side-navbar">
				<li className="side-item main-link">
					<Link to={"/main/dashboard"} className="sidebarLink sidebarLink--active" id="main-sidebar-link">
						<img src={imgChange === "main" ? mainIcon : mainChangeIcon} alt="main-link"/>
						Асосий
					</Link>
				</li>
			<li className="side-item statistics-link">
				<Link to={"/main/statistics"} id="statistics-sidebar-link" className="sidebarLink">
					<img src={imgChange === 'statistics' ? statisticsChangeIcon : statisticsIcon} alt="statistics"/>
					Статистика
				</Link>
			</li>
		</ul>
		<ul className="footer-links">
			<li className="footer-link-item">
				<div onClick={()=>{
					removeActive()
					sideBarHook({
						register: 'calculate',
						roadInSideBarFooter: false,
						logout:true
					})
				}}
				className="footer-link">
					<img src={logOutIcon} alt="log-out-link"/>
					Чиқиш
				</div>
			</li>
			<li className="footer-link-item footer-open-class" style={settingStyle}>
				<div onClick={ () => {
					removeActive()
					sideBarHook({
						register: 'calculate',
						roadInSideBarFooter: false
					})
					if (toggle) {
						setToggle(false)
					}else {
						setToggle(true)
					}
				}}
				className="footer-link">
					<img src={settingIcon} alt="log-out-link"/>
					Созламалар
				</div>
				<ul className="sub-footer-links" style={hiddenStyle}>
					<li className="sub-footer-link-item">
					<Link to={"/setting"} className="sub-footer-link">
						Profile
					</Link>
					</li>
					<li className="sub-footer-link-item">
					<Link to={"/setting/privacy"} className="sub-footer-link">
						Privacy policy
					</Link>
					</li>
					<li className="sub-footer-link-item">
					<Link to={"/setting/theme"} className="sub-footer-link">
					Theme
					</Link>
					</li>
					<li className="sub-footer-link-item">
					<Link to={"/setting/term"} className="sub-footer-link">
						Terms & Conditions
					</Link>
					</li>
				</ul>
			</li>
		</ul>
		{sideBarValue.logout === true && <Logout />}
	</div>
	)
	}
export default Navigation