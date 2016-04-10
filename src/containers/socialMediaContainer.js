// Libraries
import React, { Component } from 'react'
import { connect } from 'react-redux'

// User Components
//import { action_1 } from 'redux/reducers/child_1'
//import { load_data } from 'redux/reducers/api_call'
 
export class SocialMediaContainer extends Component {
  render() {
    return (
    <div className='container'>
      <p>This is a social media container</p>

    </div>);
  }
}

SocialMediaContainer.propTypes = {
  child_1: React.PropTypes.object.isRequired,
  api_call: React.PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    child_1: state.child_1,
    api_call: state.api_call
  }
}

export default connect(mapStateToProps)(SocialMediaContainer)
