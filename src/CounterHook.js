import React, { useState } from 'react';
import './Counter.css';
import Display from './Display';
import ButtonsPanel from './ButtonsPanel';
/* import Clock from './Clock'; */
import ClockFunctional from './ClockFunctional';
import Step from './Step';


const CounterHook = (props) => {


    const [counterValue, setDate] = useState(props.initValue);
    const [showClock, tgClock] = useState(true);
    const [stepValue, setValue] = useState(0);

    const changeValue = (action) => {
        setDate(counterValue => {

            if (action === 'add') {
                return counterValue += 1;
            } else if (action === 'reinit') {
                return props.initValue;
            } else if (action === 'step') {
                return counterValue += stepValue;
            } else {
                return 0;
            }
        })
    }

    const toggleClock = () => {
        tgClock(!showClock)
    }

    const updateStep = (step) => {
        setValue(step)
    }


    return (
        <div className="counter">
            Counter:
            <Display displayValue={counterValue} />
            <ButtonsPanel buttonMethod={changeValue} stepValue={stepValue} />
            <Step updateStep={updateStep}/>
            {showClock ? <ClockFunctional toggleClockMethod={toggleClock}/>:<span onClick= {toggleClock} className="show-clock">show clock</span>}
        </div>
    );

}

export default CounterHook;