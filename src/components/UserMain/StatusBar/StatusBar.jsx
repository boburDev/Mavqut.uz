import React from 'react';

import "./statusbar.css";

export default function StatusBar(props) {
    const progressStyle={
        width:((props.current-props.start)/(props.end-props.start))*100+'%'
    }
    const hiddenStyle = {
        display:props.current === props.end ? 'none' : ''
    }
    return (
        <div className="coninerStatus">
            <div className="track">
                <span className="start">{props.start} ёш</span>
                <span className="end">{props.end} ёш</span>
                <div style={progressStyle} className="inner">
                    <span style={hiddenStyle} className="current">{props.current} ёш</span>
                </div>
            </div>
        </div>
    )
}
