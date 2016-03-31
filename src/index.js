import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, hashHistory } from 'react-router'

//Store
import store from 'redux/store'

//Routes
import routes from 'routes/index'

//Styles
import 'bootstrap-loader'
//import 'styles/common.scss'

let fullRoutes = routes();

let reactElement = document.getElementById('app')
render(
  <Provider store={store}>
    <Router history={hashHistory}>{fullRoutes}</Router>
  </Provider>,
  reactElement
)
