import React, { useState } from 'react'
import './Calendar.css'
import './CalendarMedia.css'
import { useServer } from '../app/ServerContext'
import axios from 'axios'
import { useEffect } from 'react'
import { Lang } from "../lang/languages"
import { useLang } from '../lang/langContext'
import { useParams } from 'react-router-dom'

export default function Calendar() {

	const [language, setLanguage] = useLang()
	const { lang } = useParams()
	const [server] = useServer()


	const [lastYear, setLastYear] = useState()
	const [lastMonth, setLastMonth] = useState(0)
	const [lastDay, setLastDay] = useState(0)

	useEffect(()=>{
		setLanguage(lang || 'UZ')
	  },[lang, setLanguage])

	  
	  
	  
	  const token = window.localStorage.getItem("access_token")
	  useEffect(()=>{
		;(async()=>{
			if (server) {

				const resp = await axios.get(server + '/api/user/info',{
					headers: {
						'authorization': `Bearer ${token}`
					}
				})

				const resp1 = await axios.get(server + '/api/remnant/info',{
					headers: {
						'authorization': `Bearer ${token}`
					}
                })

                const data = resp1.data
				const countOfPrayForDay = 20
				// const daysInYear = 365
				
				const takeADay = data.const_total_namaz - data.total_namaz + (600 - 20)

				const year = resp.data.start_at_namaz - 15
				if (year >= 0 && takeADay === 0) {
					setLastYear(year)
				}else {
					setLastYear(year - 1)
					setLastMonth(12)
				}
				
				if (takeADay % 20 === 0 && lastDay <= 0) {
					setLastDay(takeADay / countOfPrayForDay)
				}
			}
		})()
	},[server,token])

	useEffect(()=>{

		if (lastDay === 30) {
			// setLastDay(0)
			setLastMonth(lastMonth - 1)
		}

	},[lastDay, lastMonth])
	  
	return(
		<div className="all">
				<div className="row m-0 p-0">
					<div className="big_column col-xl-5 col-md-7">
						<div className="big_column__in big_column__in_once">
							<b>
							{Lang[language].dashboard.lastDaysOfNamaz}
							</b>
							<div className="big_column__left">
								<div className="cub cub_number">
									<div className="cub_in">
										<h6>{lastYear}</h6>
									</div>
									<b>{Lang[language].main.calculate.year}</b>
								</div>
								<div className="cub cub_dots">
									<h1>:</h1>	
								</div>
								<div className="cub cub_number">
									<div className="cub_in">
										<h6>{lastMonth}</h6>
									</div>
									<b>{Lang[language].main.calculate.month}</b>
								</div>
								<div className="cub cub_dots">
									<h1>:</h1>
								</div>
								<div className="cub cub_number">
									<div className="cub_in">
										<h6>{lastDay}</h6>
									</div>
									<b>{Lang[language].main.calculate.day}</b>
								</div>
							</div>
						</div>
					</div>
					<div className="big_column col-xl-7 col-12">
						<div className="big_column__in">
							<b>
							{Lang[language].dashboard.lastDaysOfNamazSpeed}
							</b>
							<div className="big_column_right_all">
								<div className="row m-0 p-0 w-100">
									<div className="big_column__right col-xl-4 col-md-12">
										<h6>
											1 {Lang[language].dashboard.timeSpeed}
										</h6>
										<h6 className="active">
											2 {Lang[language].dashboard.timeSpeed}
										</h6>
										<h6>
											3 {Lang[language].dashboard.timeSpeed}
										</h6>
									</div>
									<div className="big_column__right col-xl-8 col-md-12">
										<div className="day">
											<div className="day__top">
												<h6>Тахминий тугатилиш муддати</h6>
											</div>
											<div className="day__bottom">
												<div className="row m-0 p-0">
													<div className="day__bottom_cub linear_left col-xl-4 col-4">
														<h1>9</h1>
														<h6>{Lang[language].main.calculate.year}</h6>
													</div>
													<div className="day__bottom_cub col-xl-4 col-4">
														<h1>5</h1>
														<h6>{Lang[language].main.calculate.month}</h6>
													</div>
													<div className="day__bottom_cub linear_right col-xl-4 col-4">
														<h1>25</h1>
														<h6>{Lang[language].main.calculate.day}</h6>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
		</div>
	)
}