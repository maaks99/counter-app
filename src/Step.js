import React, { Component } from 'react';
import './Step.css';

class Step extends Component{

    updateState = () => {

        this.props.updateStep(parseFloat(this._inputStep.value))
        
    }

    render() {

        return (
            <div className="step">
                <span>Krok: </span><input ref={(data) => {this._inputStep = data }} type="number" min="1" onChange={this.updateState} />
            </div>
        )
    }
}


// function Step(props) {
//     return(
//         <div className="step">
//           <span>Krok: </span><input type="number" min="1" />
//         </div>
//     );
// }

export default Step;