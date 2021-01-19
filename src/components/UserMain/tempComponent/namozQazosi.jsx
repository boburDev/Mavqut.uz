import React from 'react'
import ProcessBar from '../../ProcessBar/ProcessBar'
import Calendar from '../../Calendar/Calendar'
import './OptionalStyle.css'
export default function namozQazosi({initial_date}) {
    // console.log(initial_date)
    return (
        <div>
            <div className="namoqqazosi-wrapping">
                <ProcessBar />
                <Calendar />
            </div>
        </div>
    )
}
