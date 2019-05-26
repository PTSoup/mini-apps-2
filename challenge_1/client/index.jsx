import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import HistoryList from './historylist.jsx';
// import App from './app.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [  
                {
                "date": "",
                "description": "",
                "lang": "",
                "category1": "",
                "category2": "",
                "granularity": ""
              }
            ]
        }
        // this.dataLoader = this.dataLoader.bind(this);
    }

    // dataLoader () {
    //     // axios.get('http://localhost:3000/events?_page=1&_limit=10&_start=1&_end=5')
    //     //     .then((response) =>{
    //     //         this.setState({
    //     //             data: response
    //     //         });
    //     //     })
    //     //     .catch((error) => {
    //     //         console.log(error);
    //     //     });
    // }

    componentDidMount () {
        axios.get('http://localhost:3000/events?_page=1&limit=2')
        .then((response) =>{
            this.setState({
                data: response.data
            });
        })
        .catch((error) => {
            console.log(`Error getting data`, error);
        });
    }

    render () {
        return (
            <div>This should display thank you
                <div id="EventList">
                    <HistoryList historyData={this.state.data}/>
                </div>
            </div>
        )
    }

}

ReactDOM.render(<App />, document.getElementById('app'));