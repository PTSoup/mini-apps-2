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
    }
  }

  componentDidMount() {
    // axios.get('/data')
    //   .then((response) => {
    //     console.log(response.data);
    //     this.setState({
    //       data: response.data
    //     })
    //   })
    //   .catch((err) => { 
    //     console.log(`Error fetching API data`, err)
    //   });

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
      <div>Hello this is working yes?
        <Chart chartData={this.state.data}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));