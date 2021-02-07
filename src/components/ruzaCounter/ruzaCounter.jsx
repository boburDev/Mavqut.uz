import { useEffect, useState } from 'react'
import './ruzaCounter.css'
import  "./ruzaCounterMedia.css"
import { useServer } from "../app/ServerContext"
import axios from 'axios'
import { Lang } from "../lang/languages"
import { useLang } from '../lang/langContext'
import { useParams } from 'react-router-dom'

function Counter() {
    
    const [server] = useServer()
    const [language, setLanguage] = useLang()
	const { lang } = useParams()

	useEffect(()=>{
		setLanguage(lang || 'UZ')
	  },[lang, setLanguage])

    const [fastingConst,setFastingConst] = useState(0)
    const [fasting,setFasting] = useState(0)
    const [fastingMonths,setFastingMonth] = useState(0)
    useEffect(()=>{
        const token = window.localStorage.getItem("access_token")

        ;(async()=>{
            if(server) {
                const resp1 = await axios.get(server + '/api/remnant/info',{
                    headers: {
                        'authorization': `Bearer ${token}`
                    }
                })
                const data = resp1.data
                setFasting(((data.total_fasting * 100) / data.const_total_fasting))
                setFastingMonth(((data.total_fasting * 100) / data.const_total_fasting))
                setFastingConst(data.const_total_fasting)
            }
        })()

    },[server])


    function setProgress(percent,circumference,circle) {
        circle.style.strokeDasharray = `${circumference} ${circumference}`
        circle.style.strokeDashoffset = `${circumference}`
        const offSet = circumference - percent / 100 * circumference
        circle.style.strokeDashoffset = offSet
    }
    
    useEffect(()=>{
        const fastingDay = document.querySelector('.progress-day-fasting-time')
        const fastingMonth = document.querySelector('.progress-month-fasting-time')
        const radius = fastingDay.r.baseVal.value
        const circumference = 2 * Math.PI * radius
        setProgress(fasting,circumference,fastingDay)
        setProgress(fastingMonths,circumference,fastingMonth)
    },[fasting,fastingMonths])


    return (
        <>
                <div className="counter-wrapper">
                    <p className="counter-title">{Lang[language].main.calculate.leftQazoFromToday}</p>
                    <div className="wrapper-statist">
                        <div className="circle-day-fasting">
                            <div className="outer">
                                <svg className="progress-ring-day-fasting">
                                    <defs>
                                        <linearGradient id="gradient-fasting-day-statics" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#8311c3" />
                                        <stop offset="50%" stopColor="#862fd4" />
                                        <stop offset="95%" stopColor="#000" />
                                        <stop offset="100%" stopColor="#000" />
                                        </linearGradient>
                                    </defs>
                                    <circle className="progress-day-fasting-time" strokeWidth="90" cx="125" cy="125" r="125" fill="transparent" />
                                </svg>
                                <div className="inner"></div>
                                <p data-title={Lang[language].main.calculate.dayLeft}>{fastingConst}</p>
                                
                            </div>
                        </div>

                        <div className="circle-month-fasting">
                            <div className="outer">
                                <svg className="progress-ring-month-fasting">
                                    <defs>
                                        <linearGradient id="gradient-fasting-month-statics" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#8311c3" />
                                        <stop offset="50%" stopColor="#862fd4" />
                                        <stop offset="95%" stopColor="#000" />
                                        <stop offset="100%" stopColor="#000" />
                                        </linearGradient>
                                    </defs>
                                    <circle className="progress-month-fasting-time" strokeWidth="90" cx="125" cy="125" r="125" fill="transparent" />
                                </svg>
                                <div className="inner"></div>
                                <p data-title={Lang[language].main.calculate.monthLeft}
                                >{fastingConst / 30}</p>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Counter