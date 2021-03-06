import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {
  render() {
    let stockComponents = this.props.stocks.map(stock => (
      <Stock
      key={stock.id}
      stockInfo={stock}
      clickHandler={this.props.clickHandler} /> ))
    return (
      <div>
        <h2>My Portfolio</h2>
          {
             stockComponents
          }
      </div>
    );
  }

}

export default PortfolioContainer;
