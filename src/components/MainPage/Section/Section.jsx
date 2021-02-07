import React, { useEffect } from 'react'
import './Section.css'
import './KeyFrayms.css'
import './SectionMedia.css'
import './KeyFramesMedia.css'
import stars from './images/background.png'
import way from './images/way.png'
import mosque from './images/mosque.png'
import towers from './images/towers.png'
import litteTowers from './images/little-towers.png'
import logoMavqut from './images/logo-mavqut.png'
import moon from './images/moon.png'
import clouds from './images/clouds.png'
import SectionMore from '../SectionMore/SectionMore'
import SectionAbout from '../SectionAbout/SectionAbout'
import { Lang } from "../../lang/languages"
import { useLang } from '../../lang/langContext'
import { useParams } from 'react-router-dom'

function Section () {

	const [language, setLanguage] = useLang()
	const { lang } = useParams()

	useEffect(()=>{
		setLanguage(lang.toLowerCase() || 'uz')
		// console.log(Languages)
	  },[lang, setLanguage])
	  
  return (
    <>
		<main className="main">
			<div className="view-content">
				<ul className="wrapper" id="wrapper">
					<li className="wrapper-item">
						<img className="stars" src={stars} alt="stars"/>
					</li>
					<li className="wrapper-item">
						<img className="clouds" src={clouds} alt="clouds"/>
					</li>
					<li className="wrapper-item">
						<img className="moon" src={moon} alt="moon"/>
					</li>
					<li className="wrapper-item">
						<img className="way" src={way} alt="way"/>
					</li>
					<li className="wrapper-item">
						<img className="mosque" src={mosque} alt="mosque"/>
					</li>
					<li className="wrapper-item">
						<img className="towers" src={towers} alt="towers"/>
					</li>
					<li className="wrapper-item">
						<img className="littele-towers" src={litteTowers} alt="litteTowers"/>
					</li>
					<li className="wrapper-item " >
						<div className="logo_box" id="logo_box">
						<img id="logo_mavqut"  className="logo_mavqut" src={logoMavqut} alt="litteTowers"/>
						<div id='logo_text' className="logo_text">
							<h2>{Lang[language].main.heading.logoHead}</h2>
							<p>{Lang[language].main.heading.textOnUz}</p>
							<p>{Lang[language].main.heading.textOnAR}</p>
							<p>{Lang[language].main.heading.textOnRU}</p>
							<span>{Lang[language].main.heading.ayahName}</span>
						</div>
						</div>
					</li>
				</ul>
				<SectionMore />
				<SectionAbout />
			</div>
		</main>
	</>
  )
}

export default Section