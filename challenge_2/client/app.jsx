import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Chart from './components/chart.jsx';

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
    axios.get('/data')
      .then((response) => {
        console.log(response.data);
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

      console.log(`this is the current state:`, this.state);
  }

  render () {
    return (
      <div>
        <h1>Bitcoin Charting</h1>
        <p>The data range for this chart is 09/01/2017 to 05-01-2018</p>
        <Chart chartData={this.state.data}/>
        <div>
          <p>Powered by</p>
          <a href="https://www.coindesk.com/price/bitcoin">CoinDesk</a>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));