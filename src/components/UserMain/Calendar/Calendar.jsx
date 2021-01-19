import './calendar.css'
import { Select, Option } from '../../Select/Seelct'
import './select.css'

import './CalendarMedia.css'

export default function Calendar() {
    const taked = {
        background:"linear-gradient(#B707E3,#4156B0 )"
    }
    const noTaked = {
        backgroundColor:"#CBD2ED"
    }
    for(let i=0; i<7; i++){    
        <div style={{backgroundColor:'rgb(44, 187, 230)'}} className="box"></div>
    }
    return (
    <>
        <div className="containerCalendar">
            <div className="calendar">

                    <div className="title">
                        <div className="customSelect">


                        <div className="custom-select-month">
                            <Select>
                            <Option placeholder="none">none</Option>
                                <Option value="Oktabr" placeholder="Oktabr">Oktabr</Option>
                                <Option value="Noyabr" placeholder="Noyabr">Noyabr</Option>
                                <Option value="Dekabr" placeholder="Dekabr">Dekabr</Option>
                                <Option value="Yanvar" placeholder="Yanvar">Yanvar</Option>
                                <Option value="Fevral" placeholder="Fevral">Fevral</Option>
                                <Option value="Mart" placeholder="Mart">Mart</Option>
                            </Select>
                            <div className="counter">
                                    <div className="top-caret"></div>
                                    <div className="bottom-caret"></div>
                            </div>
                        </div>
                        <div className="custom-select-year">
                            <Select>
                                <Option placeholder="none">none</Option>
                                <Option value="2020" placeholder="2020">2020</Option>
                                <Option value="2019" placeholder="2019">2019</Option>
                                <Option value="2018" placeholder="2018">2018</Option>
                                <Option value="2017" placeholder="2017">2017</Option>
                                <Option value="2016" placeholder="2016">2016</Option>
                                <Option value="2015" placeholder="2015">2015</Option>
                            </Select>
                            <div className="counter">
                                    <div className="top-caret"></div>
                                    <div className="bottom-caret"></div>
                            </div>
                        </div>
            
                           
                        </div>
                        <h4>Ro'zalar kundaligi</h4>
                    </div>
                    <div className="days">
                        <div>
                            <div className="dayOfWeeks">
                                <div><h5>Du</h5></div>
                                <div><h5>Se</h5></div>
                                <div><h5>Cho</h5></div>
                                <div><h5>Pa</h5></div>
                                <div><h5>Ju</h5></div>
                                <div><h5>Sha</h5></div>
                                <div><h5>Yak</h5></div>
                            </div>
                        </div>
                        <div>
                            <div  style={taked} className="box"> <span><h5>1</h5></span>   </div>
                            <div  style={taked} className="box">  <span><h5>2</h5></span>  </div>
                            <div  style={taked} className="box"> <span><h5>3</h5></span>   </div>
                            <div  style={noTaked} className="box">  <span><h5>4</h5></span>  </div>
                            <div  style={taked} className="box"> <span><h5>5</h5></span>   </div>
                            <div  style={noTaked} className="box">  <span><h5>6</h5></span>  </div>
                            <div  style={taked} className="box"> <span><h5>7</h5></span>   </div>
                            
                        </div>
                        <div>
                            <div  style={taked} className="box"> <span><h5>8</h5></span>   </div>
                            <div  style={taked} className="box">  <span><h5>9</h5></span>  </div>
                            <div  style={noTaked} className="box"> <span><h5>10</h5></span>   </div>
                            <div  style={taked} className="box">  <span><h5>11</h5></span>  </div>
                            <div  style={taked} className="box"> <span><h5>12</h5></span>   </div>
                            <div  style={noTaked} className="box">  <span><h5>13</h5></span>  </div>
                            <div  style={noTaked} className="box"> <span><h5>14</h5></span>   </div>
                            
                        </div>
                        <div>
                            <div  style={taked} className="box"> <span><h5>15</h5></span>   </div>
                            <div  style={taked} className="box">  <span><h5>16</h5></span>  </div>
                            <div  style={taked} className="box"> <span><h5>17</h5></span>   </div>
                            <div  style={taked} className="box">  <span><h5>18</h5></span>  </div>
                            <div  style={taked} className="box"> <span><h5>19</h5></span>   </div>
                            <div  style={taked} className="box">  <span><h5>20</h5></span>  </div>
                            <div  style={taked} className="box"> <span><h5>21</h5></span>   </div>
                            
                        </div>
                        <div>
                            <div  style={taked} className="box"> <span><h5>22</h5></span>   </div>
                            <div  style={taked} className="box">  <span><h5>23</h5></span>  </div>
                            <div  style={taked} className="box"> <span><h5>24</h5></span>   </div>
                            <div  style={taked} className="box">  <span><h5>25</h5></span>  </div>
                            <div  style={taked} className="box"> <span><h5>26</h5></span>   </div>
                            <div  style={taked} className="box">  <span><h5>27</h5></span>  </div>
                            <div  style={taked} className="box"> <span><h5>28</h5></span>   </div>
                            
                        </div>
                        <div>
                            <div  style={noTaked} className="box"> <span><h5>29</h5></span>   </div>
                            <div  style={taked} className="box">  <span><h5>30</h5></span>  </div>
                            <div  style={taked} className="box"> <span><h5>31</h5></span>   </div>
                            
                        </div>
                </div>
            </div>
            
        </div>
        <div className="wrap">
            <div className="attention">
                <div className="taked">
                    <div  style={noTaked} className="box">    </div>
                    <h6>- tutilmagan kunlar</h6>
                    
                </div>
                <div className="taked">
                    <div style={taked} className="box" >    </div>
                    <h6>- tutilgan kunlar</h6>
                </div>
            </div>
        </div>
        
    </>
    )
}
