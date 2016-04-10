// Libraries
import React, { Component } from 'react'
import { connect } from 'react-redux'

export class ReadBlogsContainer extends Component {
  render() {
    return (
    <div className='container'>
      <p>This is a blogs container</p>
      <p>My idea is to have a blogs of famous persons in tech here</p>
      <p>For examples, this page can have blog posts pulled from <a href='https://medium.com/@_ericelliott' target='_blank'>Eric Elliot</a> or <a href='https://medium.com/@mpjme/' target='_blank'>Mattias Petter Johansson</a></p>

    </div>);
  }
}

ReadBlogsContainer.propTypes = {

}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(ReadBlogsContainer)
