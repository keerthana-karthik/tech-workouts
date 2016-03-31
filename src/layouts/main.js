// Libraries
import React, { Component } from 'react'
import { connect } from 'react-redux'

// User Components
import Header from './header'

export class Main extends Component {
  render() {
    let menus = ['Workout', 'Read', 'Social'];
    return (
    <div className='container'>
      <Header menus={menus}/>
    </div>);
  }
}

function mapStateToProps(state) {
  return {
    child_2: state.child_2
  }
}

export default connect(mapStateToProps)(Main)
