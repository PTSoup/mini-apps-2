import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import HistoryList from './historylist.jsx';
import ReactPaginate from 'react-paginate';
import './styles/styles.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          page: 1,
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
        this.dataLoader = this.dataLoader.bind(this);
    }

    dataLoader (page) {
      axios.get(`http://localhost:3000/events?_page=${page}&_limit=10`)
      .then((response) =>{
          this.setState({
              data: response.data
          });
      })
      .catch((error) => {
          console.log(`Error getting data`, error);
      });
    }

    handlePageClick = (event) => {
      let page = Number(event.selected);
      console.log(`this is the page targeted:`, page);

      this.dataLoader(page)
      
    }

    componentDidMount () {
      this.dataLoader(this.state.page);
    }

    render () {
        return (
            <div>
                <h1>Behold Events in History!</h1>
                <div id="EventList">
                    <HistoryList historyData={this.state.data}/>
                    <ReactPaginate 
                        previousLabel={'previous'}
                        nextLabel={'next'}
                        breakLabel={'...'}
                        breakClassName={'break-me'}
                        pageCount={3786}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={this.handlePageClick}
                        containerClassName={'pagination'}
                        subContainerClassName={'pages pagination'}
                        activeClassName={'active'} />
                </div>
            </div>
        )
    }

}

ReactDOM.render(<App />, document.getElementById('app'));