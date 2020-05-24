import React, { Component } from 'react';
import ProductList from './../components/ProductList';
import ProductItem from './../components/ProductItem';
import { connect } from 'react-redux';
import callApi from './../utils/apiCaller';
import { Link } from 'react-router-dom';
import { actFetchProduct } from './../actions/index';

const axios = require('axios');

class ProductListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }

  //au khi render lần 1 xong thì cdm sẽ đc gọi => sau đó setState => render lại lần 2
  componentDidMount() {
    //thời gian gọi lên server mất 5s, trong khi thời gian render mất 1s
    //mặc dù gắn products nhưng dữ liệu sẽ ko được trả ra
    callApi('products', 'GET', null).then(res => {
      this.props.fetchAllProduct(res.data);
    })
  }

  onDelete = (deleteId) => {
    var { products } = this.state;
    callApi(`products/${deleteId}`, 'DELETE', null).then(res => {
      if (res.status === 200) { //if delete on server ok
        var index = this.findIndex(products, deleteId);
        if(index !==-1){
          products.splice(index,1);
          this.setState({
            products: products
          });
        }
      }
    })
  }

  findIndex = (products, id) => {
    var result = -1;
    products.forEach((product, index) => {
      if (product.id = id) {
        result = index;
      }
    });
    return result;
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
      dispatch(actFetchProduct(products))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);