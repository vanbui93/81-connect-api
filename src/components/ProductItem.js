import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class ProductItem extends Component {

  onDeleteItem = (deleteId) => {
    if (confirm('Bạn chắc chắn muốn xóa hay không ?')) { //eslint-disable-line
      this.props.onDelete(deleteId);
    }
  }

  render() {
    var { product, index } = this.props;

    return (
      <tr>
        <td>{index + 1}</td>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td><span className={`badge badge-${product.status===true ? 'warning' : 'secondary'}`}>{product.status === true ? 'Còn hàng' : 'Hết hàng'}</span></td>
        <td>
          <Link type="button"
            className="btn btn-primary mr-3"
            to={`/product/${product.id}/edit`}
            // onClick={this.onUpdateItem(product.id)}
          >
            Sửa
          </Link>
          <button type="button"
            className="btn btn-danger"
            onClick={() => this.onDeleteItem(product.id)}
          >
            Xóa
          </button>
        </td>
      </tr>
    )
  }
}
