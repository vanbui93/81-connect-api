import React, { Component } from 'react';
import callApi from './../utils/apiCaller';

export default class ProductActionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      txtName: '',
      txtPrice: '',
      chkbStatus: ''
    }
  }

  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  }

  onSubmitForm = (e) => {
    var { txtName, txtPrice, chkbStatus } = this.state;
    e.preventDefault();
    // console.log(this.state);
    callApi('products', 'POST', {
      name: txtName,
      price: txtPrice,
      status: chkbStatus
    }).then(res => {
      console.log(res);
    });

  }
  render() {
    var { txtName, txtPrice, chkbStatus } = this.state;
    return (
      <div className="col-6">
        <form onSubmit={this.onSubmitForm}>
          <div className="form-group">
            <label>Tên sản phẩm</label>
            <input type="text" name="" className="form-control"
              name="txtName"
              defaultValue={txtName}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Giá sản phẩm</label>
            <input type="number"
              className="form-control"
              name="txtPrice"
              defaultValue={txtPrice}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Trạng thái </label>
          </div>
          <div className="checkbox">
            <label>
              <input type="checkbox"
                name="chkbStatus"
                defaultValue={chkbStatus}
                onChange={this.onChange}
              />
                Còn hàng
              </label>
          </div>
          <button type="submit" className="btn btn-primary">Lưu lại</button>
        </form>
      </div>
    )
  }
}
