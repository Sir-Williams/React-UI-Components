import React from 'react';
import './Display.css';
import NumberButton from "../ButtonComponents/NumberButton";
import ActionButton from "../ButtonComponents/ActionButton"
import {numPadNumbers} from "../numbers/numbers"
import {numPadAction} from "../numbers/numbers"

function CalculatorDisplay() {
    return (
        <div className="calcContainer">
            <div className="calcAnswer">0</div>
            <div className="numpad">
                <div className="wideBtn">clear</div>
                    {
                        numPadNumbers.map( num => {
                            return <NumberButton class="numBtn" text={num.text} />
                        })
                    }
                <div className="wideBtn">0</div>
            </div>
            <div className="actionPad">
            {
                    numPadAction.map( action => {
                        return <ActionButton class="actionBtn" text={action.text}/>
                    })
                }
            </div>
        </div>
    )
}

export default CalculatorDisplay;