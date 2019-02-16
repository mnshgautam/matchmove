import React, { Component } from "react";

import ProductListItem from "./productListItem";
import { connect } from 'react-redux';

class ProductList extends Component {

  render() {
    return (
      <div>
        <table className="ui striped sortable table">
          <thead className="">
            <tr className="">
              <th className={this.props.sortClass} onClick={() => this.props.onSort('title')}>
                Title
              </th>
              <th>
                Category
                <div className="ui icon input leftPadding5px">
                  <input className="" type="text" value={this.props.filter} name="category" onChange={this.props.onFilter} placeholder="Search..." />
                  <i aria-hidden="true" className="search icon" />
                </div>
              </th>
              <th className="">
                Brand
              </th>
              <th className="">
                Color
              </th>
            </tr>
          </thead>
          <tbody className="">
            {this.props.list.length === 0 ? null :
              <ProductListItem list={this.props.list} />}
          </tbody>
        </table>
        {this.props.list.length !== 0 ? null :
          <div className="ui warning message"><div className="header">You must add produtcs first!</div></div>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    list: state.productsList,
    sortClass: state.sortClass,
    sortColumn: state.sortColumn,
    filter: state.filter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSort: (column) => {
      return dispatch({ type: 'ON_SORT', column })
    },
    onFilter: (event) => {
      return dispatch({ type: 'ON_FILTER', filter: event.target.value, filterColumn: event.target.name })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
