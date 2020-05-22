import React, { Component } from 'react'

export default class Menu extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand navbar-light bg-light">
        <a className="navbar-brand">Call API</a>
        <ul className="nav navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">Trang chủ <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Quản lý sản phẩm</a>
          </li>
        </ul>
      </nav>
    )
  }
}
