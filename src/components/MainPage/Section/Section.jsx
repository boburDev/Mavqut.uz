import React from 'react'
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

function Section () {
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
					<li className="wrapper-item" id="logo_mavqut">
						<img className="logo_mavqut" src={logoMavqut} alt="litteTowers"/>
						<div className="logo_text">
							<h2>Mavqut</h2>
							<p>Qazo nomoz va ro'zalarni ado etish uchun yordanchi!</p>
							<p>ان الصلاة كانت على المؤمنين كتابا موقوتا</p>
							<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At!</p>
							<span>Niso - 103</span>
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