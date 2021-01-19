import  {useState } from "react";
import { toHijri, toGregorian } from 'hijri-converter'
import  "./TimeSwitcher.css"

import loading from "../../assets/loading.png"

const monthsG = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avgust", "Sentabr", "Oktabr","Noyabr", "Dekabr"]

const monthsH = ["Muharram", "Safar", "Robi' ul-avval", "Robi' ul-oxir", "Jumad ul-avval", "Jumad ul-oxir", "Rajab","Sha'bon", "Ramazon", "Shavvol","Zul-qa'da", "Zul-hijja"]

export default function TimeSwitcher() {
    
      const [isHijri, setIsHijri]= useState(false)  
      const dateSwitcherStyle={
        transform:isHijri ? 'rotate(360deg)' : 'rotate(0)'
      }
      let date  = new Date()
      let d = date.getDate()
      let month = date.getMonth()+1
      let year = date.getFullYear()
    const [dateNow, setDateNow]  = useState({dd:d, mm: month, yy:year})
    const  changeDate=()=>{
      setIsHijri(!isHijri)
      if(!isHijri){
        const h=toHijri(dateNow.yy, dateNow.mm, dateNow.dd)
        setDateNow({dd:h.hd, mm:h.hm, yy:h.hy})
      }else{
        const g=toGregorian(dateNow.yy, dateNow.mm, dateNow.dd)
        setDateNow({dd:g.gd, mm:g.gm, yy:g.gy})
      }
    }
    
    return (
        
        <div className="date">
            <button onClick={changeDate} type="button">
              <img style={dateSwitcherStyle} src={loading} alt=""/>
            {/* <i style={dateSwitcherStyle}  className="fas fa-sync-alt  fa-2x" /> */}
            </button>
            <span>{`${dateNow.dd} ${isHijri ? monthsH[dateNow.mm-1] : monthsG[dateNow.mm-1]}  ${dateNow.yy}`}</span>
      </div>
    )
}
