import { useEffect } from 'react'
import './ProcessBar.css';
import './ProcessBarMedia.css'
function ProcessBar() {

    function setGaugeValue(gauge, value, leftCount) {
        if (value < 0 || value > 1) {
            return;
    }

    gauge.querySelector(".gauge-fill").style.transform = `rotate(${
        value / 2
    }turn)`
    gauge.querySelector(".gauge-cover").textContent = leftCount
    }

    function setProgress(percent,circumference,circle) {
        circle.style.strokeDasharray = `${circumference} ${circumference}`
        circle.style.strokeDashoffset = `${circumference}`
        const offSet = circumference - percent / 100 * circumference
        circle.style.strokeDashoffset = offSet
    }

    useEffect(()=>{
       
        const gaugeElement = document.getElementById("gauge");
        setGaugeValue(gaugeElement, .5, '567,810');
        
        const circleBomdod = document.querySelector('.progress-bomdod-time')
        const circlePeshin = document.querySelector('.progress-peshin-time')
        const circleAsr = document.querySelector('.progress-asr-time')
        const circleShom = document.querySelector('.progress-ring-shom')
        const circleXufton = document.querySelector('.progress-ring-xufton')
        const circleVitr = document.querySelector('.progress-ring-vitr')
       
        const radius = circleBomdod.r.baseVal.value
        const circumference = 2 * Math.PI * radius

        setProgress(100,circumference,circleBomdod)
        setProgress(50,circumference,circlePeshin)
        setProgress(50,circumference,circleAsr)
        setProgress(50,circumference,circleShom)
        setProgress(50,circumference,circleXufton)
        setProgress(50,circumference,circleVitr)

    }, [])


	return (
		<>
			<div className="">
				<div className="process-wrapper">
                   
                    <div className="process-gauges">

                        <div className="gauge" id="gauge">
                            <p className="gauge-title">
                                <span className="gauge-title-heading">Жами</span>
                                <span className="gauge-title-amount">1,000,000</span>
                            </p>
                            <div className="gauge-body">
                                <div className="gauge-fill"></div>
                                <div className="gauge-cover" data-text="Қолди"></div>
                            </div>
                        </div>
                        
                        <div className="process-chart-wrap">
                            <div className="process-heading">
                                <h3>Ҳисоб ойнаси</h3>
                            </div>
                            <div className="process-pie-charts">
                                <span onClick={() => {
                                    document.querySelector('.gauge-pie').style.display = "flex"
                                    document.querySelector('.next').style.display = "block"
                                    document.querySelector('.prev').style.display = "none"
                                    document.querySelector('.gauge-pie--hidden').style.display = "none"
                                    document.querySelector('.next-round').style.background = "#EEF2FD"
                                    document.querySelector('.prev-round').style.background = "#aaa"
                                }}
                                className="fas fa-angle-left prev" style={{display: 'none'}}></span>
                                <span onClick={() => {
                                    document.querySelector('.gauge-pie').style.display = "none"
                                    document.querySelector('.next').style.display = "none"
                                    document.querySelector('.prev').style.display = "block"
                                    document.querySelector('.gauge-pie--hidden').style.display = "flex"
                                    document.querySelector('.prev-round').style.background = "#EEF2FD"
                                    document.querySelector('.next-round').style.background = "#aaa"
                                }}
                                className="fas fa-angle-right next"></span>
                                <div className="gauge-pie">
                                    <div className="circle circle-bomdod">
                                        <div className="outer">
                                            <svg className="progress-ring-bomdod" width="150" height="150">
                                                <defs>
                                                    <linearGradient id="gradient" x1="0%" y1="0%" x2="95%" y2="100%">
                                                    <stop offset="50%" stopColor="#ED21FF" />
                                                    <stop offset="100%" stopColor="#020055" />
                                                    </linearGradient>
                                                </defs>
                                                <circle className="progress-bomdod-time" strokeWidth="15" cx="74" cy="76" r="65" fill="transparent" />
                                            </svg>
                                            <div className="inner"></div>
                                            <p><b>22,000</b></p>
                                            <span data-type="Бомдод">Қолди</span>
                                        </div>
                                    </div>
                                    <div className="circle circle-peshin">
                                        <div className="outer">
                                            <svg className="progress-ring-peshin" width="150" height="150">
                                                <defs>
                                                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="95%" y2="100%">
                                                    <stop offset="50%" stopColor="#D90965" />
                                                    <stop offset="100%" stopColor="#200453" />
                                                    </linearGradient>
                                                </defs>
                                                <circle className="progress-peshin-time" strokeWidth="15" cx="74" cy="76" r="65" fill="transparent" />
                                            </svg>
                                            <div className="inner"></div>
                                            <p><b>22,000</b></p>
                                            <span data-type="Пешин">Қолди</span>
                                        </div>
                                    </div>
                                    <div className="circle circle-asr">
                                        <div className="outer">
                                            <svg className="progress-ring-asr" width="150" height="150">
                                                <defs>
                                                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="95%" y2="100%">
                                                    <stop offset="50%" stopColor="#0CF8BF" />
                                                    <stop offset="100%" stopColor="#160364" />
                                                    </linearGradient>
                                                </defs>
                                                <circle className="progress-asr-time" strokeWidth="15" cx="74" cy="76" r="65" fill="transparent" />
                                            </svg>
                                            <div className="inner"></div>
                                            <p><b>22,000</b></p>
                                            <span data-type="Aср">Қолди</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="gauge-pie--hidden">
                                    <div className="circle circle-shom">
                                        <div className="outer">
                                            <svg className="progress-ring-shom" width="150" height="150">
                                                <defs>
                                                    <linearGradient id="gradient3" x1="0%" y1="0%" x2="95%" y2="100%">
                                                    <stop offset="50%" stopColor="#FFC700" />
                                                    <stop offset="100%" stopColor="#020055" />
                                                    </linearGradient>
                                                </defs>
                                                <circle className="progress-shom-time" strokeWidth="15" cx="74" cy="76" r="65" fill="transparent" />
                                            </svg>
                                            <div className="inner"></div>
                                            <p><b>22,000</b></p>
                                            <span data-type="Шом">Қолди</span>
                                        </div>
                                    </div>
                                    <div className="circle circle-xufton">
                                        <div className="outer">
                                            <svg className="progress-ring-xufton" width="250" height="223">
                                                <defs>
                                                    <linearGradient id="gradient4" x1="0%" y1="0%" x2="95%" y2="100%">
                                                    <stop offset="50%" stopColor="#7000FF" />
                                                    <stop offset="100%" stopColor="#200453" />
                                                    </linearGradient>
                                                </defs>
                                                <circle className="progress-xufton-time" strokeWidth="15" cx="150" cy="150" r="65" fill="transparent" />
                                            </svg>
                                            <div className="inner"></div>
                                            <p><b>22,000</b></p>
                                            <span data-type="Хуфтон">Қолди</span>
                                        </div>
                                    </div>
                                    <div className="circle circle-vitr">
                                        <div className="outer">
                                            <svg className="progress-ring-vitr" width="250" height="200">
                                                <defs>
                                                    <linearGradient id="gradient5" x1="0%" y1="0%" x2="95%" y2="100%">
                                                    <stop offset="50%" stopColor="#0CEAF8" />
                                                    <stop offset="100%" stopColor="#160364" />
                                                    </linearGradient>
                                                </defs>
                                                <circle className="progress-vitr-time" strokeWidth="15" cx="150" cy="150" r="65" fill="transparent" />
                                            </svg>
                                            <div className="inner"></div>
                                            <p><b>22,000</b></p>
                                            <span data-type="Витр">Қолди</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="click-point">
                                    <span className="prev-round"></span>
                                    <span className="next-round"></span>
                                </div>
                            </div>
                    
                        </div>
                    </div>
                </div>
			</div>
		</> 
	)
}
export default ProcessBar