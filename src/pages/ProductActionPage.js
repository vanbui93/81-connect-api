import React, { Component } from 'react';
import callApi from './../utils/apiCaller';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actAddProductRequest, actGetItemProductRequest } from './../actions/index';

class ProductActionPage extends Component {
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
    var { id, txtName, txtPrice, chkbStatus } = this.state;
    var { history } = this.props;
    e.preventDefault();
    // console.log(this.state);
    var product = {
      id: id,
      name: txtName,
      price: txtPrice,
      status: chkbStatus
    }
    if (id) { //update
      callApi(`products/${id}`, 'PUT', {
        name: txtName,
        price: txtPrice,
        status: chkbStatus
      }).then(res => {
        console.log(res);
        history.goBack();
      });
    } else {
      this.props.onAddProductItem(product);
      history.goBack();
    }
  }

  componentDidMount() {
    var { match } = this.props;
    if (match) {
      var id = match.params.id;
      this.props.onEditProductItem(id);
    }

  }

  //componentWillReceiveProps sẽ được gọi sau khi nhận được 1 props trên store: render => componentDidMount => componentWillReceiveProps
  //sau khi gọi mapStateToProps => thì componentWillReceiveProps mới được chạy
  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.itemEditing) {
      var { itemEditing } = nextProps;
      this.setState({
        id: itemEditing.id,
        txtName: itemEditing.name,
        txtPrice: itemEditing.price,
        chkbStatus: itemEditing.status
      })
    }
  }

  render() {
    console.log('render');

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
                checked={chkbStatus}
              />
                Còn hàng
              </label>
          </div>
          <Link to="/product-list" className="btn btn-warning mr-2">
            Trở lại
          </Link>
          <button type="submit" className="btn btn-primary">Lưu lại</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    itemEditing: state.itemEditing
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddProductItem: (product) => {
      dispatch(actAddProductRequest(product));
    },
    onEditProductItem: (id) => {
      dispatch(actGetItemProductRequest(id));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage)