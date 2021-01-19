import "./backgraund.css"
import { useSideBar } from "../Navigation/Context";
import cc from  'classnames'

function Background({role}) {
  const [sideBArValue] = useSideBar()
  return (
    <div className={cc({
      'sidebarBg--ligth': role !== 'register' && sideBArValue.index === 'main',
      'top': role !== 'register' && sideBArValue.key === 'main',
      'sidebarBg--nigth': role !== 'register' && sideBArValue.index === 'statistics',
      'down': role !== 'register' && sideBArValue.index === 'statistics',
       'sideBarAnimation': true,
       'sidebarBg--register': (role === 'register' || sideBArValue.register === 'calculate')
      })} id="bg-sidebar">
    <div className="cloud"></div>
      <div className="cloud1"></div>
      <div className="cloud2"></div>
      <div className={cc({
        'stars': true,
        'animate': sideBArValue.animateMoon === 'animate',
        'default': sideBArValue.animateMoon === 'default'
      })}></div>
	  
      <div className={cc({
		'moon':true,
		'animate': sideBArValue.animateMoon === 'animate',
		'default': sideBArValue.animateMoon === 'default'
	  })}></div>
      <div className={cc({
        "way-wrapper": true,
        "calculate": sideBArValue.roadInSideBarFooter
      })}>
        <div className="way"></div>
      </div>
      <div className="tower"></div>
      <div className="little-tower-left"></div>
      <div className="little-tower-right"></div>
    </div>
  )
}
export default Background