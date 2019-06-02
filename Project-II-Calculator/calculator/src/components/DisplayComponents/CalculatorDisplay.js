import React from 'react';
import './Display.css';
import NumberButton from "../ButtonComponents/NumberButton";
import ActionButton from "../ButtonComponents/ActionButton";
import {numPadNumbers} from "../numbers/numbers";
import {numPadAction} from "../numbers/numbers";

let answer = 0;

function CalculatorDisplay() {
    return (
        <div className="calcContainer">
            <div className="calcAnswer">0</div>
            <div className="numpad">
                <div className="clearBtn">clear</div>
                    {
                        numPadNumbers.map( num => {
                            return <NumberButton class="numBtn" text={num.text} />
                        })
                    }
                <div className="answer">0</div>
            </div>
            <div className="actionPad">
                {
                    numPadAction.map(action => {
                        return <ActionButton className="actionBtn" text={action.text} />
                    })
                }
            </div>
        </div>
    )
}

export default CalculatorDisplay;