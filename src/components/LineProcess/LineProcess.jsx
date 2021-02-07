import { useEffect } from 'react'
import './LineProcess.css'
import LineChart from './LineProcessChart/LineChart'
import './LineProcessMedia.css'
import { Lang } from "../lang/languages"
import { useLang } from '../lang/langContext'
import { useParams } from 'react-router-dom'

function LineProcess() {

    const [language, setLanguage] = useLang()
	const { lang } = useParams()

	useEffect(()=>{
		setLanguage(lang || 'UZ')
	  },[lang, setLanguage])
	  

    function setProgress(percent,circumference,circle) {
        circle.style.strokeDasharray = `${circumference} ${circumference}`
        circle.style.strokeDashoffset = `${circumference}`
        const offSet = circumference - percent / 100 * circumference
        circle.style.strokeDashoffset = offSet
    }
    
    useEffect(()=>{
        const circleNamazProcess = document.querySelector('.progress-namaz-time')

        const radius = circleNamazProcess.r.baseVal.value
        const circumference = 2 * Math.PI * radius

        setProgress(48,circumference,circleNamazProcess)

    },[])
    return (
        <>
            <div className="">
                <div className="line-wrapping">
                    <div className="line">
                        <LineChart />
                    </div>
                    <div className="right-tab">
                        <div className="statics-counter">
                            <div data-title={Lang[language].dashboard.readNamaz}
                            className="done-namaz">
                                256
                                <div className="process">
                                    <div className="statics-liqual"></div>
                                </div>
                            </div>
                            <div className="statics-circle circle-namaz">
                                <div className="outer">
                                    <svg className="progress-ring-namaz"  width="150" height="150">
                                        <defs>
                                            <linearGradient id="gradient-statics" x1="0%" y1="0%" x2="95%" y2="100%">
                                            <stop offset="0%" stopColor="#8311c3" />
                                            <stop offset="50%" stopColor="#862fd4" />
                                            <stop offset="95%" stopColor="#000" />
                                            <stop offset="100%" stopColor="#000" />
                                            </linearGradient>
                                        </defs>
                                        <circle className="progress-namaz-time" strokeWidth="15" cx="75" cy="75" r="65" fill="transparent" />
                                    </svg>
                                    <div className="inner"></div>
                                    <p><b>48%</b></p>
                                </div>
                            </div>
                            <div data-title={Lang[language].dashboard.notReadNamaz}
                            className="not-done-namaz">
                            1085
                            <div className="process">
                                <div className="statics-liqual"></div>
                            </div>
                        </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default LineProcess