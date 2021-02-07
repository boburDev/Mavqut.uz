import { useEffect } from 'react';

import "./statusbar.css";
import { Lang } from "../../lang/languages"
import { useLang } from '../../lang/langContext'
import { useParams } from 'react-router-dom'

export default function StatusBar(props) {

    const [language, setLanguage] = useLang()
	const { lang } = useParams()

	useEffect(()=>{
		setLanguage(lang.toLowerCase() || 'uz')
	},[lang, setLanguage])

    const progressStyle={
        width:((props.current-props.start)/(props.end-props.start))*100+'%'
    }
    const hiddenStyle = {
        display:props.current === props.end ? 'none' : ''
    }
    return (
        <div className="coninerStatus">
            <div className="track">
                <span className="start">{props.start} {Lang[language].main.userBar.age}</span>
                <span className="end">{props.end} {Lang[language].main.userBar.age}</span>
                <div style={progressStyle} className="inner">
                    <span style={hiddenStyle} className="current">{props.current} {Lang[language].main.userBar.age}</span>
                </div>
            </div>
        </div>
    )
}
