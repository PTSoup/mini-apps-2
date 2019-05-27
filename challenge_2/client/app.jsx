import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  render () {
    return (
      <div>Hello this is working yes?</div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));