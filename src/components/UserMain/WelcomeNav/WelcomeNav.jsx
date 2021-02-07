import { useCategory } from '../Context'
import { useEffect, useState } from 'react'
import  './Welcome_nav.css'
import './Welcome.css'
import './WelcomeNavMedia.css'
import notification from "../assets/notification.png";
import notification_fill from "../assets/notification-fill.png";

import { Lang } from "../../lang/languages"
import { useLang } from '../../lang/langContext'
import { useParams } from 'react-router-dom'

const WelcomeNav = ({type, who, category, name}) => {

    const [language, setLanguage] = useLang()
	const { lang } = useParams()

	useEffect(()=>{
		setLanguage(lang.toLowerCase() || 'uz')
	},[lang, setLanguage])


    const [setCategory] = useCategory(true)
    const [bell, setBell] = useState(false)
    
    return (
        <div className="containerBox">
            <div className="title_nav">
                {
                    (type !== 'term' || who === 'user') && <h3>{Lang[language].main.userBar.welcome} {name}</h3>
                }
                {
                    (type === 'main' || type === 'statistics') && <div className="links">
                    <div onClick={() => {
                        setCategory('Namaz')
                    }}
                    className={'link '+( (category === 'Namaz')? 'isActive':'') }>
                        {Lang[language].main.userBar.namazQazo}
                    </div>
                    <div onClick={() => {
                        setCategory('Fasting')
                    }}
                    className={'link '+( (category === 'Fasting')? 'isActive':'')}>
                        {Lang[language].main.userBar.fastingQazo}
                    </div>
                </div>}
                <span onClick={()=>{setBell(!bell)}} className={'bell '+ ( (type === 'term' && who !== '')? 'onsetting' :'')}>
                    <img src={bell ? notification :notification_fill} alt=""/>
                </span>
            </div>
        </div>
    )
}

export default WelcomeNav;
