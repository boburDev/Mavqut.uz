import React from 'react'
import './SectionAbout.css'
import close from '../Section/images/cloIcon.svg'
import { useEffect } from 'react'
import Languages from "../../lang/languages"
import { useLang } from '../../lang/langContext'
import { useParams } from 'react-router-dom'

export default function SectionAbout () {

    const [language, setLanguage] = useLang()
	const { lang } = useParams()
	
    

    useEffect(()=>{
        setLanguage(lang)
      },[lang, setLanguage])


    function repeats(more) {
		more.children[0].children[0].classList.remove('back')
		more.children[2].children[0].classList.remove('back')
		more.children[3].children[0].classList.remove('back')
		more.children[4].children[0].classList.remove('back')
		more.children[5].children[0].classList.remove('back')
		more.children[6].children[0].classList.remove('back')
	}
    function arrow() {
        const more = document.getElementById('wrapper')
        const about = document.getElementById('section-about')
        document.getElementById('logo_mavqut').style.display = 'block'
        about.classList.remove('section-about-ani')
        document.getElementById('navbar-more').style.display = 'block'
        document.getElementById('navbar-footer').classList.remove('navbar-fade')
      document.getElementById('navbar-foot').classList.remove('navbar-fade')
	document.getElementById('navbar-language').classList.remove('navbar-fade')
        more.children[2].children[0].classList.remove('about-c')
        more.children[4].children[0].classList.remove('about-c')
        more.children[5].children[0].classList.remove('about-c')
        more.children[6].children[0].classList.remove('about-c')
        repeats(more)
          
    }
    return (
        <>
        <div className="section-about" id="section-about">
         <div onClick={arrow}><img className="close" src={close} alt="close"/></div>
            <div className="section-body">{Languages[language].main.aboutUsBtn}</div>
        </div>
        </>
    )
}