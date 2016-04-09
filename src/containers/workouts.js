// Libraries
import React, { Component } from 'react'
import { connect } from 'react-redux'

// User Components
import WorkoutCard from  'components/workout-card'

// Actions for the component
import { load_workout_cards } from 'redux/reducers/workout-cards-reducer'

// Styles for the component
import 'styles/workouts.scss'
 
export class Workouts extends Component {
  componentDidMount() {
    // Load the work outs from the JSON
    this.props.dispatch(load_workout_cards());
  }
  render() {
    return (
    <div className = 'container'>
      <div>
        <h2 className = 'workout-title text-center'>Choose your workout for the day</h2>
      </div>
      <div className='col-md-10 col-md-offset-1'>
      {
        this.props.workouts && this.props.workouts.map((item, index) => (
          <WorkoutCard key = {index} type = {item.type} title = {item.name} description = {item.description} />
        ))
      }
      </div>
    </div>);
  }
}
// Properties for the component
Workouts.propTypes = {
  workouts: React.PropTypes.array.isRequired
}

function mapStateToProps(state) {
  return {
    workouts: state.workouts
  }
}

export default connect(mapStateToProps)(Workouts)
