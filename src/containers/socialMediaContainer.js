// Libraries
import React, { Component } from 'react'
import { connect } from 'react-redux'

export class SocialMediaContainer extends Component {
  render() {
    return (
    <div className='container'>
      <p>This is a social media container</p>
      <p>My idea is to have a twitter feed of famous persons/newletters in tech</p>
      <p>For examples, this page can have live tweets from <a href='https://twitter.com/dan_abramov' target='_blank'>Dan Abramov</a> or <a href='https://twitter.com/JavaScriptDaily' target='_blank'>JavaScript Daily</a></p>

    </div>);
  }
}

SocialMediaContainer.propTypes = {

}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(SocialMediaContainer)
