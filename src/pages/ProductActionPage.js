import React, { Component } from 'react'

export default class ProductActionPage extends Component {
  render() {
    return (
      <div className="col-6">
        <form>
          <div className="form-group">
            <label>Tên sản phẩm</label>
            <input type="text" name="" className="form-control" placeholder="" />
          </div>
          <div className="form-group">
            <label>Giá sản phẩm</label>
            <input type="number" name="" className="form-control" placeholder="" />
          </div>
          <div className="form-group">
            <label>Trạng thái </label>
          </div>
          <div className="checkbox">
            <label>
              <input type="checkbox" />
                Còn hàng
              </label>
          </div>
          <button type="submit" className="btn btn-primary">Lưu lại</button>
        </form>
      </div>
    )
  }
}
