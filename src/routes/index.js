import 'babel-polyfill'
import React from 'react'
import { Route } from 'react-router';
//Containers (layouts)
import MainLayout from 'layouts/main'

//<Route path='/' component={MainLayout}/>

export default () => {
  return (
    <Route path='/' component={MainLayout}>
    </Route>)
}
