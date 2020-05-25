import React, { Component } from 'react';
import ProductList from './../components/ProductList';
import ProductItem from './../components/ProductItem';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actFetchProductRequest, actDeleteProductRequest } from './../actions/index';

class ProductListPage extends Component {

  //Sau khi render lần 1 xong thì cdm sẽ đc gọi => sau đó setState => render lại lần 2
  componentDidMount() {
    this.props.fetchAllProduct();
  }

  onDelete = (deleteId) => {
    this.props.onDeleteProduct(deleteId);
  }

 

  render() {
    var { products } = this.props;
    
    return (
      <div className="col-md-12 mt-3">
        <Link to="/product/add" className="btn btn-primary">Thêm sản phẩm</Link>
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
            onDelete={this.onDelete}
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

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAllProduct: (products) => {
      dispatch(actFetchProductRequest(products))
    },
    onDeleteProduct: (id) => {
      dispatch(actDeleteProductRequest(id));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);