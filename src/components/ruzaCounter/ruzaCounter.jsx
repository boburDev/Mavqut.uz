import { useEffect } from 'react'
import './ruzaCounter.css'
import  "./ruzaCounterMedia.css";

function Counter() {
    
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
        setProgress(50,circumference,fastingDay)
        setProgress(50,circumference,fastingMonth)
    },[])


    return (
        <>
                <div className="counter-wrapper">
                    <p className="counter-title">Бугунги кундан бошлаб узлуксиз рўза тутсангиз,</p>
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
                                <p>300</p>
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
                                <p>10</p>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Counter