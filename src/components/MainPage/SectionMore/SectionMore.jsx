import { useEffect } from 'react'
import Languages from "../../lang/languages"
import { useLang } from '../../lang/langContext'
import { useParams } from 'react-router-dom'

import './SectionMore.css'
import close from '../Section/images/cloIcon.svg'


export default function SectionMore () {

    const [language, setLanguage] = useLang()
	const { lang } = useParams()
	
    

    useEffect(()=>{
        setLanguage(lang || 'UZ')
      },[lang, setLanguage])

      
    function arrow() {
        const more = document.getElementById('wrapper')
        document.getElementById('logo_mavqut').style.display = 'block'
      document.getElementById('navabr').classList.remove('navbar-fade')
      document.getElementById('navbar-more').classList.remove('navbar-fade')
      document.getElementById('more').classList.remove('more-fade')
      document.getElementById('navbar-footer').classList.remove('navbar-fade')
      document.getElementById('navbar-foot').classList.remove('navbar-fade')
	document.getElementById('navbar-language').classList.remove('navbar-fade')
      
      more.children[0].children[0].classList.remove('star')
      more.children[0].children[0].classList.add('back')

      more.children[2].children[0].classList.remove('moons')
      more.children[2].children[0].classList.add('back')

      more.children[3].children[0].classList.remove('ways')
      more.children[3].children[0].classList.add('back')

      more.children[4].children[0].classList.remove('mosques')
      more.children[4].children[0].classList.add('back')

      more.children[5].children[0].classList.remove('tower1')
      more.children[5].children[0].classList.add('back')

      more.children[6].children[0].classList.remove('littele-tower1')
      more.children[6].children[0].classList.add('back')

      let logo_text = document.getElementById('logo_text');
        let logo_mavqut = document.getElementById('logo_mavqut')
        let logo_box = document.getElementById('logo_box')
		logo_text.classList.remove('fadeOutLogoText');
		logo_box.classList.remove('boxFade')
		logo_mavqut.classList.remove('scalingLogo');
    }
    return(
        <>
        <div className="more" id="more">
                    <div onClick={arrow}><img className="close" src={close} alt="close"/></div>
                    <div className="more-body">
                        <h2>Clicked</h2>
                        <p className="more-text">{Languages[language].main.moreBtn}</p>
                    </div>
                </div>
        </>
    )
}