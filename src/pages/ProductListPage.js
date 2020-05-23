import React, { Component } from 'react'
import ProductList from '../components/ProductList'
import ProductItem from '../components/ProductItem'

export default class ProductListPage extends Component {
  render() {
    var products = [{
      id:1,
      name:'Iphone X',
      price: 500,
      status: true
    }];
    return (
      <div className="col-md-12 mt-3">
        <button type="button" className="btn btn-primary">Thêm sản phẩm</button>
        <ProductList>
          {this.showProductItem(products)}
        </ProductList>
      </div>
    )
  }
  showProductItem = (products) => {
    var result = null;
    if (products.length > 0) {
      products.map((product, index) => {
        return (
          <ProductItem
            key={index}
            product={product}
            index={index}
          />
        )
      })
    }
    return result;
  }
}