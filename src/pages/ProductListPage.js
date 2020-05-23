import React, { Component } from 'react';
import ProductList from './../components/ProductList';
import ProductItem from './../components/ProductItem';
import { connect } from 'react-redux';

class ProductListPage extends Component {
  render() {
    var { products } = this.props;

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
      result = products.map((product, index) => {
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

const mapStateToProps = (state, props) => {
  return {
    products: state.products
  }
}


export default connect(mapStateToProps, null)(ProductListPage);