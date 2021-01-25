import { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import { useServer } from "../../app/ServerContext";
import axios from "axios"
import moment from "moment"
function Donat() {

    const [server] = useServer()
	const token = window.localStorage.getItem("access_token")
    const [value,setValue] = useState([])
    const [date,setDate] = useState([])
    useEffect(()=>{
		;(async()=>{
			if (server) {
				const resp = await axios.get(server + `/api/daily/user/getAll/`,{
					headers:{
						'authorization': `Bearer ${token}`
					}
                })
                const data = resp.data
                const date = new Date().getDate()
				for(let i of data){
                    setDate([date - moment(i.created_at, "YYYYMMDD").fromNow().split(' ')[0]])
                    setValue([i.asr + i.bomdod + i.peshin + i.shom + i.vitr + i.xufton])
                }
				
			}
		})()
	},[server, token])

    useEffect(()=>{
        console.log(value)
    },[value])

    const data = (canvas) => {
        const ctx = canvas.getContext("2d");
        const gradient = ctx.createLinearGradient(0, 0, 0,900);
        
        
        gradient.addColorStop(0.0, 'rgba(44, 5, 128, 1)')
        gradient.addColorStop(0.9, 'rgba(237, 237, 237, 0)')
        

        return {
            labels: date,
            datasets: [
            {
                label: 'rakatlar soni',
                data: value,
                backgroundColor : gradient,
                borderColor: ['rgba(44, 5, 128, .5)'],
                opacity: 0.8,
                pointRadius: 5,
                pointBackgroundColor: "#FF00E5"
            }
        ]
    }
    }


    



        
    const options = {
        events: ['click'],
        scales: {
            yAxes: [{
                gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                },
                ticks: {
                    min: 0,
                    fontSize: 18
                },
                stacked: true,
            }],
            xAxes: [{
                gridLines: {
                    color: "rgba(0, 0, 0, 0)"
                },
                ticks: {
                    fontSize: 18
                },
            }]    
        },
        legend: {
            display: false
        }
    }

    return (
        <>
        <Line
            height={550}
            width={800}
            data={data}
            options={options}
        />
        </>
    )
}

export default Donat