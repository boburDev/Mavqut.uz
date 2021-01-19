import "./TopNav.css"
import TimeSwitcher from "../../UserMain/UserNav/TimeSwitcher/TimeSwitcher"
function TopNav() {
  return (
    <div className="containerTopNav">
      <h1 className="title">Рўйхатдан ўтиш</h1>
        <TimeSwitcher />
     </div>
  )
}

export default TopNav
