import React from 'react';
import './Sana.css';
import './SanaMedia.css'

import { useEffect } from 'react'
import { Lang } from "../lang/languages"
import { useLang } from '../lang/langContext'
import { useParams } from 'react-router-dom'

export default function Sana() {

	const [language, setLanguage] = useLang()
	const { lang } = useParams()

	useEffect(()=>{
		setLanguage(lang.toLowerCase() || 'uz')
	  },[lang, setLanguage])
	  
	return(
		<div className="all">
				<div className="row m-0 p-0 sana_flex">
					<div className="big_column col-xl-5 col-md-6">
						<div className="big_column__in big_column__in_once">
							<b>
							{Lang[language].main.calculate.startedDate}
							</b>
							<div className="big_column__left">
								<div className="cub cub_number">
									<div className="cub_in">
										<h6>20</h6>
									</div>
									<b>
										{Lang[language].main.calculate.year}
									</b>
								</div>
								<div className="cub cub_number">
									<div className="cub_in">
										<h6>2</h6>
									</div>
									<b>
										{Lang[language].main.calculate.month}
									</b>
								</div>
								<div className="cub cub_number">
									<div className="cub_in">
										<h6>12</h6>
									</div>
									<b>
										{Lang[language].main.calculate.day}
									</b>
								</div>
							</div>
						</div>
					</div>
					<div className="big_column col-xl-5 col-md-6">
						<div className="big_column__in big_column__in_once">
							<b>
							{Lang[language].main.calculate.finishDate}
							</b>
							<div className="big_column__left">
								<div className="cub cub_number">
									<div className="cub_in">
										<h6>21</h6>
									</div>
									<b>
										{Lang[language].main.calculate.year}
									</b>
								</div>
								<div className="cub cub_number">
									<div className="cub_in">
										<h6>10</h6>
									</div>
									<b>
										{Lang[language].main.calculate.month}
									</b>
								</div>
								<div className="cub cub_number">
									<div className="cub_in">
										<h6>16</h6>
									</div>
									<b>
										{Lang[language].main.calculate.day}
									</b>
								</div>
							</div>
						</div>
					</div>
				</div>
		</div>
	)
}