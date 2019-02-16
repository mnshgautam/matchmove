import React, { Component } from 'react';
import './App.css';

import AddProduct from './components/addProduct';
import ProductList from './components/productList';

class App extends Component {
  render() {
    return (
        <div className="app">
          <header>
            <div className="ui inverted segment"><div className="ui inverted secondary menu"><a className="active item">Home</a>
            </div></div>
          </header>
          <main className="ui main">
            <div className="sideLeft">
              <AddProduct />
            </div>
            <div className="ui content">
              <h2 className="ui header">Products</h2>
              <ProductList />
            </div>
          </main>
        </div>
    );
  }
}

export default App;
