import "./TopNav.css"
import TimeSwitcher from "../../UserMain/UserNav/TimeSwitcher/TimeSwitcher"
import { useEffect } from 'react'
import { Lang } from "../../lang/languages"
import { useLang } from '../../lang/langContext'
import { useParams } from 'react-router-dom'

function TopNav() {
  const [language, setLanguage] = useLang()
	const { lang } = useParams()

  useEffect(()=>{
		setLanguage(lang || 'UZ')
	  },[lang, setLanguage])

  return (
    <div className="containerTopNav">
      <h1 className="title">{Lang[language].main.authintification.title}</h1>
        <TimeSwitcher />
     </div>
  )
}

export default TopNav
