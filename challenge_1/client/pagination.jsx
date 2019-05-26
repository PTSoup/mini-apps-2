import React from 'react';
import ReactPaginate from 'react-paginate';

class PaginationNav extends React.Component {
    render () {
        return (
                <div id="react-paginate">
                    <ReactPaginate 
                        previousLabel={'previous'}
                        nextLabel={'next'}
                        breakLabel={'...'}
                        breakClassName={'break-me'}
                        pageCount={3786}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={this.props.handlePageClick}
                        containerClassName={'pagination'}
                        subContainerClassName={'pages pagination'}
                        activeClassName={'active'} />
                </div>
        );
    }
}

export default PaginationNav;