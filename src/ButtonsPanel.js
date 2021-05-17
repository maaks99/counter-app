import React from 'react';
import './ButtonsPanel.css';

function ButtonsPanel(props) {

    return(
        <div className="buttons-panel">
            <button onClick={()=>{props.buttonMethod('add');}}>Add1</button>
            <button onClick={()=>{props.buttonMethod('reinit');}}>ReInit</button>
            <button onClick={()=>{props.buttonMethod('reset');}}>Reset</button>
            <button onClick={()=>{props.buttonMethod('step');}} className="btn-step">Zwieksz o {props.stepValue}</button>
        </div>
    );
}

export default ButtonsPanel;