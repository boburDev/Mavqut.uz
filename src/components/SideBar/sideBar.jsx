import Background from './backGraund/backgraund'
import './sideBar.css'
import Navigation from './Navigation/Navigation'
function SideBar() {

    return(
        <>
        <div className="sidebar">
           <div className="sidebar-relative-wrapper">
            <div className="bg">
                    <Background />
                </div>
                <div className="sidebar_nav">
                    <Navigation />
                </div>
           </div>
        </div>
        </>
    )
}

export default SideBar