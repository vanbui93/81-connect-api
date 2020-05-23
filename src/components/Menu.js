import React, { Component } from 'react'
import { Route, Link } from "react-router-dom";

const menus = [
  {
    name: 'Trang chủ',
    to: '/',
    exact: true

  },
  {
    name: 'Quản lý sản phẩm',
    to: '/product/list',
    exact: false
  }
];

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        var active = match ? 'active' : '';
        return (
          <li className={`nav-item ${active}`}>
            <Link to={to} className="nav-link">
              {label}
            </Link>
          </li>
        )
      }}
    />
  )
}

export default class Menu extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand navbar-light bg-light">
        <a className="navbar-brand">Call API</a>
        <ul className="nav navbar-nav">
          {this.showMenus(menus)}
        </ul>
      </nav>
    )
  }

  showMenus = (menus) => {
    var result = null;
    if (menus.length > 0) {
      result = menus.map((menu, index) => {
        return (
          <MenuLink
            key={index}
            label={menu.name}
            to={menu.to}
            activeOnlyWhenExact={menu.exact}
          />
        )
      })
    }
    return result;
  }
}
