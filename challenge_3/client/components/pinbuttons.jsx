import React from 'react';

class PinButtons extends React.Component {
    render() {
        return(
            <div className="buttonRow">
                <button id='btn1' type="button" className="btn" value="1">1</button>
                <button id='btn2' type="button" className="btn" value="2">2</button>
                <button id='btn3' type="button" className="btn" value="3">3</button>
                <button id='btn4' type="button" className="btn" value="4">4</button>
                <button id='btn5' type="button" className="btn" value="5">5</button>
                <button id='btn6' type="button" className="btn" value="6">6</button>
                <button id='btn7' type="button" className="btn" value="7">7</button>
                <button id='btn8' type="button" className="btn" value="8">8</button>
                <button id='btn9' type="button" className="btn" value="9">9</button>
                <button id='btn10' type="button" className="btn" value="10">10</button>
            </div>
        )
    }
}

export default PinButtons;