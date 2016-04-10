// Libraries
import React, { Component } from 'react'
import { connect } from 'react-redux'

// User Components
import Header from './header'
 
export class Main extends Component {
  render() {
    //const { dispatch } = this.props;
    // Fix me: Load menus from config
    let menus = [{
      name: 'Workout',
      href: '/workouts'
    }, {
      name: 'Read',
      href: '/read'
    }, {
      name: 'Social',
      href: '/social-media'
    }];
    return (
    <div className='container'>
      <Header menus={menus}/>
      { this.props.children }

    </div>);
  }
}

Main.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node
  ])
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Main)
