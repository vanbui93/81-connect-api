import React, { Component } from 'react';

export default class ProductList extends Component {
  render() {
    return (
      <div className="list-group mt-2">
        <a href="#" className="list-group-item active">Danh sách sản phẩm</a>
        <table className="table table-bordered">
          <thead className="thead-primary">
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Mã</th>
              <th scope="col">Tên</th>
              <th scope="col">Giá</th>
              <th scope="col">Trạng thái</th>
              <th scope="col">Hành Động</th>
            </tr>
          </thead>
          <tbody>
            {this.props.children}
          </tbody>
        </table>
      </div>
    )
  }
}
