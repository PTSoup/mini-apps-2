import React from 'react';
import ReactDOM from 'react-dom';
import PinButtons from './components/pinbuttons.jsx';
import Scoreboard from './components/scoreboard.jsx';
import './styles/styles.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    render() {
        return (
            <div>
                <div className="header nav">
                    <h1>The Bowling Scorer</h1>
                </div>
                <h4>Click on the number of pins that have been knocked down below</h4>
                <span>
                    <PinButtons />
                </span>
                <div>
                    <h2>Scoreboard</h2>
                    <Scoreboard />
                </div>
                <div className="information">
                    <p><strong>Current Frame:</strong> 2</p>
                    <p><strong>Current roll:</strong> First</p>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));