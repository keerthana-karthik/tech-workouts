// Libraries
import React, { Component } from 'react'
import { connect } from 'react-redux'

// User Components
import Header from './header'
import { action_1 } from 'redux/reducers/child_1'
import { load_data } from 'redux/reducers/api_call'
 
export class Main extends Component {
  render() {
    const { dispatch } = this.props;
    let menus = ['Workout', 'Read', 'Social'];
    return (
    <div className='container'>
      <Header menus={menus}/>
      <p>{this.props.child_1.text}</p>
      <button onClick = {() => dispatch(action_1({text: 'The header state is changed'}))}>Click me to change state</button>
      <p>Data from API - {this.props.api_call.text}</p>
      <button onClick = {() => dispatch(load_data())}>Click to get data from sample API</button>

    </div>);
  }
}

Main.propTypes = {
  child_1: React.PropTypes.object.isRequired,
  api_call: React.PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    child_1: state.child_1,
    api_call: state.api_call
  }
}

export default connect(mapStateToProps)(Main)
