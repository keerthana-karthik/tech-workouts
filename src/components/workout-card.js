// Library
import React, { Component } from 'react'
<<<<<<< HEAD
import { Link } from 'react-router'
=======
>>>>>>> 9f5f9e90af91e4e74505d8835758356086e06e3d

// Styles for the component
import 'styles/workout-card.scss'

export default class WorkoutCard extends Component {
  render() {
    return (
      <div className = {'pull-left workout-cards ' + this.props.type + ' ' + this.props.cssClass}>
          <div className = 'card-head text-center'>{this.props.title}</div>
          <div className = 'card-body'>
            <p className = 'text-center'>{this.props.description}</p>
          </div>
          <div className = 'card-footer'>
<<<<<<< HEAD
            <Link to = {'/workouts/' + this.props.type} className='text-center card-footer-btn'>Start this Workout</Link>
=======
            <a href='' className='text-center card-footer-btn'>Start this Workout</a>
>>>>>>> 9f5f9e90af91e4e74505d8835758356086e06e3d
          </div>
      </div>
    )
  }
}

// Property types of the component
WorkoutCard.propTypes = {
  title: React.PropTypes.string.isRequired,
  type: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
  buttonText: React.PropTypes.string,
  cssClass: React.PropTypes.string
};

// Set the default properties for the component
WorkoutCard.defaultProps = {
  buttonText: 'Start this Workout',
  cssClass: ''
}
