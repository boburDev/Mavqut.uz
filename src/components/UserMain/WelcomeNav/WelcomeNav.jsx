import { useCategory } from '../Context'
import { useState } from 'react'
import  './Welcome_nav.css'
import './Welcome.css'

import './WelcomeNavMedia.css'
// import bell from '../assets/notification.png'
import notification from "../assets/notification.png";
import notification_fill from "../assets/notification-fill.png";
const WelcomeNav = ({type, who, category, name}) => {

    const [setCategory] = useCategory(true)
    const [bell, setBell] = useState(false)
    return (
        <div className="containerBox">
            <div className="title_nav">
                {
                    (type !== 'term' || who === 'user') && <h3>Хуш келибсиз, {name}</h3>
                }
                {
                    (type === 'main' || type === 'statistics') && <div className="links">
                    <div onClick={() => {
                        setCategory('Namaz')
                    }}
                    className={'link '+( (category === 'Namaz')? 'isActive':'') }>Намоз қазоси</div>
                    <div onClick={() => {
                        setCategory('Fasting')
                    }}
                    className={'link '+( (category === 'Fasting')? 'isActive':'')}>Рўза қазоси</div>
                </div>}
                <span onClick={()=>{setBell(!bell)}} className={'bell '+ ( (type === 'term' && who !== '')? 'onsetting' :'')}>
                    <img src={bell ? notification :notification_fill} alt=""/>
                </span>
            </div>
        </div>
    )
}

export default WelcomeNav;
