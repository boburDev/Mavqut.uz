import './RuzaUpdate.css'
import './RuzaUpdateMedia.css'
import { Select, Option } from '../Select/Seelct'
import axios from 'axios'
import './Select.css'
import { useEffect, useRef, useState } from 'react'
import { useServer } from '../app/ServerContext'

function RuzaUpdate() {
	const [server] = useServer()

    const [today,setToday] = useState()

    const months = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul","Avgust","Sentabr","Oktabr","Noyabr","Dekabr"]

    const years = [1992,1993,1994,1995,1996,1997,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022]
    
    useEffect(()=>{
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        setToday(dd)
    },[])

    const bomdod = useRef()
	const peshin = useRef()
	const asr = useRef()
	const shom = useRef()
	const xufton = useRef()
	const vitr = useRef()
	const ruza = useRef()

    async function updatingRemnant(e) {
		e.preventDefault()
		const userRemnantData = {
            bomdod: bomdod.current.value,
            peshin: peshin.current.value,
            asr: asr.current.value,
            shom: shom.current.value,
            xufton: xufton.current.value,
            vitr: vitr.current.value,
            ruza: ruza.current.value,
		}
		if(server){
			const resp = await axios.post(server + '/', {
				userRemnantData
			})
			console.log(resp)
			
		}
	}


    return (
        <>
        <div className="pray-counter">
        <form className="ruza-update-form"
        onSubmit={e => {
            e.preventDefault()
            document.querySelector('.submitted').classList.add('submitted--block')

            // updatingRemnant()
            e.target.reset()
        }}>
        <div className="status-editing">
        <label htmlFor="bomdod">
        Бомдод<input ref={bomdod} maxLength="2" type="text" id="bomdod"/>
        </label>
        <label htmlFor="peshin">
        Пешин<input ref={peshin} maxLength="2" type="text" id="peshin"/>
        </label>
        <label htmlFor="asr">
        Aср<input ref={asr} maxLength="2" type="text" id="asr"/>
        </label>
        <label htmlFor="shom">
        Шом<input ref={shom} maxLength="2" type="text" id="shom"/>
        </label>
        <label htmlFor="xufton">
        Хуфтон<input ref={xufton} maxLength="2" type="text" id="xufton"/>
        </label>
        <label htmlFor="vitr">
        Витр<input ref={vitr} maxLength="2" type="text" id="vitr"/>
        </label>
        <label htmlFor="ruza">
        Рўза<input ref={ruza} maxLength="1" type="text" id="ruza"/>
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