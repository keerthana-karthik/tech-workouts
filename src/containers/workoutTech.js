// Libraries
import React, { Component } from 'react'
import { connect } from 'react-redux'

// User Components
//import { action_1 } from 'redux/reducers/child_1'
//import { load_data } from 'redux/reducers/api_call'
 
export class WorkoutTech extends Component {
  render() {
    //const { dispatch } = this.props;
    return (
    <div className='container'>
      <p>This is a workout container</p>

    </div>);
  }
}

WorkoutTech.propTypes = {
  workouts: React.PropTypes.array.isRequired
}

function mapStateToProps(state) {
  return {
    workouts: state.workouts
  }
}

export default connect(mapStateToProps)(WorkoutTech)
