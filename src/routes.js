import React, { Component } from 'react';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import ProductActionPage from './pages/ProductActionPage';
import ProductList from './components/ProductList';

const routes = [
  {
    path:'/',
    exact:true,
    main:() => <HomePage/>
  },
  {
    path:'',
    exact:true,
    main:() => <NotFoundPage/>
  },
  {
    path:'/product/list',
    exact:false,
    main:() => <ProductList/>
  },
  {
    path:'/product/add',
    exact:false,
    main:() => <ProductActionPage/>
  }
]

export default routes;