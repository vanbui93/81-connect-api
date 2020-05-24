import React, { Component } from 'react'

export default class ProductItem extends Component {

  onDeleteItem = (deleteId) => {
    if(confirm('Bạn chắc chắn muốn xóa hay không ?')){ //eslint-disable-line
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
        <td><span className={`label label-${product.status ? 'default' : 'warning'}`}>{product.status === true ? 'Còn hàng' : 'Hết hàng'}</span></td>
        <td>
          <button type="button" className="btn btn-primary mr-3">Sửa</button>
          <button type="button" 
            className="btn btn-danger"
            onClick={()=> this.onDeleteItem(product.id)}
          >
            Xóa
          </button>
        </td>
      </tr>
    )
  }
}
