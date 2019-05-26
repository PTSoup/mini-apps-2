import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import HistoryList from './historylist.jsx';
import PaginationNav from './pagination.jsx';
// import ReactPaginate from 'react-paginate';
import './styles/styles.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          page: 1,
          pageCount: 1,
          data: [  
              {
              "date": "",
              "description": "",
              "lang": "",
              "category1": "",
              "category2": "",
              "granularity": ""
              }
          ],
          searchTerm: "rome"
        }
        this.dataLoader = this.dataLoader.bind(this);
    }

    dataLoader (page, searchTerm) {
      axios.get(`http://localhost:3000/events?_page=${page}&q=${searchTerm}`)
      .then((response) =>{
        const count = Number(response.headers['x-total-count']);
        const pageCount = Math.ceil(count / 10);
        console.log(`this is the count:`, count);
          this.setState({
              data: response.data,
              pageCount: pageCount
          });
      })
      .catch((error) => {
          console.log(`Error getting data`, error);
      });
    }

    handlePageClick = (event) => {
      let page = Number(event.selected) + 1;
      console.log(`this is the page targeted:`, event.selected);

      this.setState({
        page: page
      });

      this.dataLoader(page, this.state.searchTerm);
      
      console.log(`this is the new state after clicking:`, this.state);
    }

    componentDidMount () {
      this.dataLoader(this.state.page, this.state.searchTerm);
      console.log(`this is the state after mounting:`, this.state);
    }

    render () {
        return (
            <div>
                <h1>Behold Events in History!</h1>
                <div id="EventList">
                  <HistoryList historyData={this.state.data}/>
                </div>
                <div id="react-paginate">
                  <PaginationNav 
                  handlePageClick={this.handlePageClick.bind(this)}
                  pageCount={this.state.pageCount}
                  />
                </div>
            </div>
        )
    }

}

ReactDOM.render(<App />, document.getElementById('app'));