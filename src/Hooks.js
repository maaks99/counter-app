import React, {useState, useEffect}  from 'react';
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

    useEffect(() => {
        setDate(props.initValue)

    },[props.initValue])
    
    const changeValue = (action) => {
        setDate((prevState, prevProps) => {
            let currentCounterValue = prevState.counterValue;

            if (action === 'add') {
                currentCounterValue += 1;
            } else if (action === 'reinit') {
                currentCounterValue = prevProps.initValue;
            } else if(action === 'step'){
                currentCounterValue += stepValue;
            }
            else {
                currentCounterValue = 0;
            }

            return ({
                counterValue: currentCounterValue
            });
        })
    }

    useEffect(() => {
        tgClock(props.showClock)

    },[props.showClock])

    const toggleClock = (prevState) => {
        tgClock({
            showClock: !prevState.showClock
        })
    }

    useEffect(() => {
        setValue(props.stepValue)

    },[props.stepValue]);

    const updateStep = (step) => {
        setValue({
            stepValue: step
        });
    }

    
    return (
        <div className="counter">
            Counter:
            <Display displayValue={counterValue} />
            <ButtonsPanel buttonMethod={changeValue} stepValue={stepValue} />
            <Step updateStep={stepValue}/>
            {/* {clockElement} */}
        </div>
    );
}

export default CounterHook;