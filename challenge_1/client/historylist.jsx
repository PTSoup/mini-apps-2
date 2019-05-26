import React from 'react';

class Historylist extends React.Component {

    render () {
        console.log(`this is the props:`, this.props.historyData)
        console.log(typeof(this.props.historyData));

        const events = this.props.historyData;
        
        const ListItems = events.map((event, index) => {
            return <li key={index} className="listitem">
                <div>Date: {event.date}</div>
                <div>Description: {event.description}</div>
                <div>Language: {event.lang}</div>
                <div>Category 1: {event.category1}</div>
                <div>Category 2: {event.category2}</div>
                <div>Granularity: {event.granularity}</div>
            </li>
        });

        return <ul> { ListItems } </ul>
       
    }
}

export default Historylist;