import './RuzaUpdate.css'
import './RuzaUpdateMedia.css'
import { Select, Option } from '../Select/Seelct'
import './Select.css'
import { useEffect, useState } from 'react'
function RuzaUpdate() {
    
    const [today,setToday] = useState()
    const months = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul","Avgust","Sentabr","Oktabr","Noyabr","Dekabr"]
    const years = [1992,1993,1994,1995,1996,1997,1999,2000]
    useEffect(()=>{
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        setToday(dd)
    },[])
    return (
        <>
        <div className="pray-counter">
        <form className="ruza-update-form"
        onSubmit={e => {
            e.preventDefault()
            document.querySelector('.submitted').classList.add('submitted--block')
            console.log(document.querySelector('.submitted'))
            e.target.reset()
        }}>
        <div className="status-editing">
        <label htmlFor="bomdod">
        Бомдод<input maxLength="2" type="text" id="bomdod"/>
        </label>
        <label htmlFor="peshin">
        Пешин<input maxLength="2" type="text" id="peshin"/>
        </label>
        <label htmlFor="asr">
        Aср<input maxLength="2" type="text" id="asr"/>
        </label>
        <label htmlFor="shom">
        Шом<input maxLength="2" type="text" id="shom"/>
        </label>
        <label htmlFor="xufton">
        Хуфтон<input maxLength="2" type="text" id="xufton"/>
        </label>
        <label htmlFor="vitr">
        Витр<input maxLength="2" type="text" id="vitr"/>
        </label>
        <label htmlFor="ruza">
        Рўза<input maxLength="1" type="text" id="ruza"/>
        </label>
        </div>
        <div className="ruza-update-date">
        <div className="update-date">
        <input maxLength="2" type="text" placeholder={today}/>
        
        <div className="update-selects">
        <div className="custom-update-select-month">
        <Select>
        {
            months.map((month,index) => 
            <Option
            key={index}
            value={index}
            placeholder={month}
            >{month}</Option>)
        }
        </Select>
        <div className="counter">
        <div className="top-caret"></div>
        <div className="bottom-caret"></div>
        </div>
        </div>
        <div className="custom-update-select-year">
        <Select>
        {
            years.map((year,index) => <Option
            key={index}
            value={index}
            placeholder={year}
            >{year}</Option>)
        }
        </Select>
        <div className="counter counter_update">
        <div className="top-caret"></div>
        <div className="bottom-caret"></div>
        </div>
        </div>
        </div>
        </div>
        <button className="ruza-update-button">Қайд этиш</button>
        </div>
        </form>
        <div className="submitted">
        <button className="submittion-exit" onClick={ () => document.querySelector('.submitted').classList.remove('submitted--block')}
        >
        <i className="fas fa-times"></i>
        </button>
        <p className="submittion-text">Mashalloh, Alloh xayrli va bardavom qilsin</p>
        </div>
        </div>
        </>
        )
    }
    
    export default RuzaUpdate