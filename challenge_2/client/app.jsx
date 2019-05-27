import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Chart from './components/chart.jsx';
import "./styles/styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        labels: [],
        datasets: [{
            label: 'Price of BTC in USD',
            data: [],
            backgroundColor: [],
            borderColor: [],
            borderWidth: 1
        }]
      },
      disclaimer: ''
    }
  }

  componentDidMount() {
    //Tells the server to run a GET request to the CoinDesk API, after load
    axios.get('/data')
      .then((response) => {
        let newLabels = response.data.labels;
        let newData =response.data.data;
        this.setState({
          data: {
            labels: newLabels,
            datasets: [{
                label: 'Price of BTC in USD',
                data: newData,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)'
                ],
                borderWidth: 1
            }]
          }
        })
      })
      .catch((err) => { 
        console.log(`Error fetching API data`, err)
      });
  }

  render () {
    return (
      <div>
        <div >
          <div className="header nav">
            <h1>Bitcoin Charting</h1>
          </div>

          <p>The data range for this chart is 09/01/2017 to 05/01/2018</p>
          <Chart chartData={this.state.data} />

        </div>

        <div>
          <p className="shoutout">Powered by </p>
          <a className="shoutout" href="https://www.coindesk.com/price/bitcoin">CoinDesk</a>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));