import React from 'react';
import './Privacy.css';
import { useEffect } from 'react'
import Languages from "../lang/languages"
import { useLang } from '../lang/langContext'
import { useParams } from 'react-router-dom'

export default function Privacy() {
	const [language, setLanguage] = useLang()
	const { lang } = useParams()

	useEffect(()=>{
		setLanguage(lang || 'UZ')
	  },[lang, setLanguage])

	return(
		<div className="privacy">
			<h2 className="text-ceter">Privacy policy</h2>
			<div className="text_block">
				<p>
					{Languages[language].main.privacyPolicyText}
				</p>
			</div>
		</div>
	)
}