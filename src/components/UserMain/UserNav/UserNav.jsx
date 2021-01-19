import {useState} from "react"
import TimeSwitcher from "./TimeSwitcher/TimeSwitcher"
import user_avatar from "../assets/user_ava_1.png"
import   "./UserNav.css"
import Account from "./accountItem/Account"
import { useServer } from '../../app/ServerContext'
function UserNav({avatar, name, surname}) {
	const [server] = useServer()
	const userArray = [
		{avatar:user_avatar, name:" Macvsdfsdfs", surname:"Jumsdfdsfs"},
		{avatar:user_avatar, name:" Maqsud", surname:"To'rayev"},
	]



  const [listIsOpen, setListIsOpen] = useState(false)
  const userListStyle={
    transform:listIsOpen ? 'translate(0 ,-3px)' :'translate(0 ,23px)',
    opacity:listIsOpen ? 0.99 : 0,
    visibility:listIsOpen ? 'visible' : 'hidden'
  }
  const togglerIconStyle={
    transform:listIsOpen ? 'rotate(180deg)' :'rotate(0)'
  }
  const toggleList=()=>{
    setListIsOpen(!listIsOpen)
  }
    window.onclick = function(event) {
      if (!event.target.matches('.dropdown')) {
        setListIsOpen(false)
		}
	}
  
  return (
    <div className="container_box">
      <img className="avatar" src={server + avatar || user_avatar} alt="User Avatar" />
      <div className="userList">
        <div className="parent">
          <h3>{surname + " " + name}<i style={togglerIconStyle}  onClick={toggleList} className="fas dropdown fa-angle-down "></i></h3>
          <div style={userListStyle} className="users">
              <h5>accounts</h5>
              
              {userArray.map((userItem, index) => {
                return <Account key={index}  avatar={userItem.avatar} name={userItem.name} surname={userItem.surname} />
              })}
              <div className="add-section">
                <div>+</div>
                {/* <span  style={plusStyle} className="add-account">+</span> */}
                <h6>Account qo'shish</h6>
              </div>
          </div>
        </div>
        
        
      </div>
      <TimeSwitcher/>
    </div>
  )
}

export default UserNav