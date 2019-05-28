import React from 'react';
import ReactDOM from 'react-dom';
import PinButtons from './components/pinbuttons.jsx';
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
                <PinButtons />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));