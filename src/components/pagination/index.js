import React, {Component} from 'react'
import {connect} from 'react-redux'
import R from 'ramda'
import {Link} from 'react-router'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';


class PaginationClass extends Component {
    constructor(props) {
      super(props);
      this.state = {
        activePage: 5,
        itemsOnPage: this.props.itemsOnPage,
        onChange: () => {}
      };
    }
   
    handlePageChange(pageNumber) {
      console.log(`active page is ${pageNumber}`);
      this.setState({activePage: pageNumber});
    }
   
    render() {
      return (
        <Pagination>
          <PaginationItem>
            <PaginationLink previous href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" onClick={() => console.log('1111111111111')}>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink next href="#" />
          </PaginationItem>
        </Pagination>
      );
    }
  }
   