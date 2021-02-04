import './ProcessDonat.css'
import Donat from './DonatChart/Donat'
import  "./ProcessDonatMedia.css"
import { useServer } from '../app/ServerContext'
import { useEffect, useState } from 'react'
import axios from 'axios'
function DonatProcess() {
    const [server] = useServer()
    const [bomdod,setBomdod] = useState(0)
    const [peshin,setPeshin] = useState(0)
    const [asr,setAsr] = useState(0)
    const [shom,setShom] = useState(0)
    const [xufton,setXufton] = useState(0)
    const [vitr,setVitr] = useState(0)
    const [donatData,setDonatData] = useState({})
    useEffect(()=>{
        const token = window.localStorage.getItem("access_token")

        ;(async()=>{
            const resp1 = await axios.get(server + '/api/remnant/info',{
                headers: {
                    'authorization': `Bearer ${token}`
                }
            })
            const data = resp1.data

            const bomdod = -(((data.bomdod * 100) / data.const_bomdod) - 100)
            const peshin = -(((data.peshin * 100) / data.const_peshin) - 100)
            const asr = -(((data.asr * 100) / data.const_asr) - 100)
            const shom = -(((data.shom * 100) / data.const_shom) - 100)
            const xufton = -(((data.xufton * 100) / data.const_xufton) - 100)
            const vitr = -(((data.vitr * 100) / data.const_vitr) - 100)
            setDonatData(data)
            setBomdod(bomdod)
            setPeshin(peshin)
            setAsr(asr)
            setShom(shom)
            setXufton(xufton)
            setVitr(vitr)
        })()

    },[server])

    return (
        <>
            <div className="">
                <div className="nomoz_progres_bar">
                <div className="process_types">
                    <div className="type bomdod_type">
                        <div className="dish_wraper">
                            <div className="dish">
                                <div className="liqual" style={{height: bomdod + "%"}}></div>
                            </div>
                            <div className="percent" style={{bottom: bomdod > 20 ? bomdod : 20}}>{bomdod}%</div>
                        </div>
                        <div className="type_name">
                            Бомдод
                        </div>
                    </div>
                    <div className="type peshin_type">
                        <div className="dish_wraper">
                            <div className="dish">
                                <div className="liqual" style={{height: peshin + "%"}}></div>
                            </div>
                            <div className="percent" style={{bottom: peshin > 20 ? peshin : 20}}>{peshin}%</div>
                        </div>
                        <div className="type_name">
                            Пешин
                        </div>
                    </div>
                    <div className="type asr_type">
                        <div className="dish_wraper">
                            <div className="dish">
                                <div className="liqual" style={{height: asr + "%"}}></div>
                            </div>
                            <div className="percent" style={{bottom: asr > 20 ? asr : 20}}>{asr}%</div>
                        </div>
                        <div className="type_name">
                            Aср
                        </div>
                    </div>
                    <div className="type shom_type">
                        <div className="dish_wraper">
                            <div className="dish">
                                <div className="liqual" style={{height: shom + "%"}}></div>
                            </div>
                            <div className="percent" style={{bottom: shom > 20 ? shom : 20}}>{shom}%</div>
                        </div>
                        <div className="type_name">
                            Шом
                        </div>
                    </div>
                    <div className="type xufton_type">
                        <div className="dish_wraper">
                            <div className="dish">
                                <div className="liqual" style={{height: xufton + "%"}}></div>
                            </div>
                            <div className="percent" style={{bottom: xufton > 20 ? xufton : 20}}>{xufton}%</div>
                        </div>
                        <div className="type_name">
                            Хуфтон
                        </div>
                    </div>
                    <div className="type vitr_type">
                        <div className="dish_wraper">
                            <div className="dish">
                                <div className="liqual" style={{height: vitr + "%"}}></div>
                            </div>
                            <div className="percent" style={{bottom: vitr > 20 ? vitr : 20}}>{vitr}%</div>
                        </div>
                        <div className="type_name">
                            Витр
                        </div>
                    </div>
                </div>
                    <div className="donat-chart" data-done="70%" data-not-done="30%">
                        <div className="donat-ruza" data-donat-text="Рўза">
                            <Donat dataDonat={donatData} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DonatProcess