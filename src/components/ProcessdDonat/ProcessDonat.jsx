import './ProcessDonat.css'
import Donat from './DonatChart/Donat'
import  "./ProcessDonatMedia.css";
function DonatProcess() {
    return (
        <>
            <div className="">
                <div className="nomoz_progres_bar">
                <div className="process_types">
                    <div className="type bomdod_type">
                        <div className="dish_wraper">
                            <div className="dish">
                                <div className="liqual"></div>
                            </div>
                            <div className="percent">80%</div>
                        </div>
                        <div className="type_name">
                            Бомдод
                        </div>
                    </div>
                    <div className="type peshin_type">
                        <div className="dish_wraper">
                            <div className="dish">
                                <div className="liqual"></div>
                            </div>
                            <div className="percent">80%</div>
                        </div>
                        <div className="type_name">
                            Пешин
                        </div>
                    </div>
                    <div className="type asr_type">
                        <div className="dish_wraper">
                            <div className="dish">
                                <div className="liqual"></div>
                            </div>
                            <div className="percent">80%</div>
                        </div>
                        <div className="type_name">
                            Aср
                        </div>
                    </div>
                    <div className="type shom_type">
                        <div className="dish_wraper">
                            <div className="dish">
                                <div className="liqual"></div>
                            </div>
                            <div className="percent">80%</div>
                        </div>
                        <div className="type_name">
                            Шом
                        </div>
                    </div>
                    <div className="type xufton_type">
                        <div className="dish_wraper">
                            <div className="dish">
                                <div className="liqual"></div>
                            </div>
                            <div className="percent">80%</div>
                        </div>
                        <div className="type_name">
                            Хуфтон
                        </div>
                    </div>
                    <div className="type vitr_type">
                        <div className="dish_wraper">
                            <div className="dish">
                                <div className="liqual"></div>
                            </div>
                            <div className="percent">80%</div>
                        </div>
                        <div className="type_name">
                            Витр
                        </div>
                    </div>
                </div>
                    <div className="donat-chart" data-done="70%" data-not-done="30%">
                        <div className="donat-ruza" data-donat-text="Рўза">
                            <Donat />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DonatProcess