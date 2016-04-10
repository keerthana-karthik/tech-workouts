// Libraries
import React, { Component } from 'react'
import { connect } from 'react-redux'

// User Components
import MarkDownElement from 'components/markdown-viewer'

// Actions for the component
import { load_workout_cards } from 'redux/reducers/workout-cards-reducer'
import { load_workout_content } from 'redux/reducers/workout-content-reducer'

import 'styles/workout-lessons.scss'
 
export class WorkoutTech extends Component {
  constructor() {
    super()
    this.getCurrentTechnology = this.getCurrentTechnology.bind(this);
    this.getCurrentContent= this.getCurrentContent.bind(this);
    this.loadContent = this.loadContent.bind(this);
    this.initTechAndContent = this.initTechAndContent.bind(this);
    // Local state to maintain the index of lessons learnt
    // It makes no sense to store this in state tree. Hence storing it as 
    // local state in this component
    this.state = {
      currentLessonIndex: 0,
      totalLessons: 0,
      lessonsStarted: false,
      lessonsCompleted: false,
      // Current Tech is JavaScript or HTML or CSS
      currentTech: {},
      // Current Content is the category within the technology
      // For example, if JavaScript is the technology chosen then
      // current content can be 'Basics of JavaScript' or 'Object Oriented JS'
      currentContent: ''
    }
  }
  componentWillMount() {
    this.initTechAndContent() 
  }
  // When the component is mounted, check if the workouts are loaded
  // If not dispatch the action to load the data
  componentDidMount() {
    if(this.props.workouts.length === 0) {
      // Load the work outs from the JSON
      this.props.dispatch(load_workout_cards());
    }
  }

  // When the component receive props
  // Update the local State
  componentWillReceiveProps(nextProps) {
    this.initTechAndContent(nextProps);
  }

  // Get the current tech to work out based on the URL params
  getCurrentTechnology(nextProps = this.props) {
    let currentTechArray = nextProps.workouts && nextProps.workouts.filter((item) => (item.type === nextProps.params.technology));
    // Return the first element
    return currentTechArray && currentTechArray[0];
  }

  // Get the content which is not yet completed by the user
  getCurrentContent(currentTech) {
    let currentContentArray = currentTech && currentTech.content && currentTech.content.filter((item) => (!item.completed));
    // Fix me: Can return a randomized item from an array
    return currentContentArray && currentContentArray[0];
  }

  // Load the content when the users presses start, prev or next buttons
  loadContent(content, index = 0) {
    if(index <= this.state.totalLessons-1) {
      this.props.dispatch(load_workout_content(content.lessons[index]));
      this.setState({
        currentLessonIndex: index,
        lessonsCompleted: false,
        lessonsStarted: true
        });
    } else {
      this.setState({
        lessonsStarted: false,
        lessonsCompleted: true
      });
    }
    
  }

  // Initialize the current technology and content for the workout
  initTechAndContent(nextProps) {
    let currentTech = this.getCurrentTechnology(nextProps);
    let currentContent = this.getCurrentContent(currentTech);
    let totalLessons = 0;
    if(currentContent) {
      totalLessons = currentContent.lessons.length;
    }
    this.setState({
      currentTech,
      currentContent,
      totalLessons
    })
  }
  render() {
    let currentTech = this.state.currentTech;
    let currentContent = this.state.currentContent;
    return (
      <div className = 'container'>

        <h4 className = 'text-center'>Hello Friend, Welcome to the {currentTech && currentTech.name} workout</h4>
        <p className = 'text-center'>Today{'\''}s topic: <span>{currentContent && currentContent.groupName}</span></p>
        <p className = 'text-center'>{currentContent && currentContent.groupDescription}</p>
        <button className = 'text-center center-block btn btn-primary' onClick = {() => (this.loadContent(currentContent))}>Start learning</button>

        <MarkDownElement text = {this.props.currentLesson && this.props.currentLesson.content} cssClass = {(!this.state.lessonsCompleted && this.state.lessonsStarted)? 'markdown-viewer': 'markdown-viewer hide'} />

        <div className = {(this.state.lessonsStarted) ? '' : 'hide'}>
          <button className = {(this.state.currentLessonIndex === 0)? 'text-center pull-left btn btn-primary disabled': 'text-center pull-left btn btn-primary '} onClick = {() => (this.loadContent(currentContent, this.state.currentLessonIndex-1))}>Previous</button>
          <button className = {(this.state.lessonsCompleted)? 'text-center pull-right btn btn-primary  disabled': 'text-center pull-right btn btn-primary'} onClick = {() => (this.loadContent(currentContent, this.state.currentLessonIndex+1))}>Next</button>
        </div>

        <div className = {(this.state.lessonsCompleted)? '': 'hide'}>
          <p>Congrats! You have completed your workout!</p>
        </div>
      </div>);
  }
}

WorkoutTech.propTypes = {
  workouts: React.PropTypes.array.isRequired,
  params: React.PropTypes.object,
  currentLesson: React.PropTypes.object
}

function mapStateToProps(state) {
  return {
    workouts: state.workouts,
    currentLesson: state.currentLesson
  }
}

export default connect(mapStateToProps)(WorkoutTech)
