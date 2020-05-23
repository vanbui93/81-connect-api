import React, { Component } from 'react'

export default class ProductItem extends Component {
  render() {
    var { product, index } = this.props;
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td><span className={`label label-${product.status ? 'default' : 'warning'}`}>{product.status === true ? 'Còn hàng' : 'Hết hàng'}</span></td>
        <td>
          <button type="button" className="btn btn-primary">Sửa</button>
          <button type="button" className="btn btn-danger">Xóa</button>
        </td>
      </tr>
    )
  }
}
