import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    }
  }

  componentDidMount() {
    axios.get('/data')
      .then((data) => {
        console.log(data);
      })
      .catch((err) => { 
        console.log(`Error fetching API data`, err)
      });
  }

  render () {
    return (
      <div>Hello this is working yes?</div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));