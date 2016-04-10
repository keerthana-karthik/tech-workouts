// Libraries
import React, { Component } from 'react'
import { connect } from 'react-redux'

import 'styles/welcome.scss'
 
export class WelcomeContainer extends Component {
  render() {
    return (
    <div className = 'container'>
      <div className = 'welcome-content'>
        <h3 className = 'text-center'>Welcome friends!</h3>
        <p>Hello guys, Welcome to the tech-workouts website. My name is Siva Subramaniam and am a front-end developer
        with 5.6 years of experience. I am passionate about learning from others, teaching and sharing my knowledge with others.
        </p>
        <p>I created this web-app to make a habit for the techies like us to learn something new every day</p>
      </div>
      <div className = 'welcome-content'>
        <h3 className = 'text-center'>WTF is this?</h3>
        <p>As a techie, I feel its very tough to catch up the rapidly changing tech-scape. Last year it was Angular and this year it is ReactJS
        And which framework or library will be widely used next year? Who knows?
        </p>
        <p>Apart from the regular work, it is very tough for us to spend time to know about these technologies.
        Thats why I created this app. Just like you hit your gym for your daily workouts, this is the workouts for your brain.
        </p>
      </div>
      <div className = 'welcome-content'>
        <h3 className = 'text-center'>Inspired from</h3>
        <p>Am a very big fan of Duolingo. I am using Duolingo for the past 1 year and am heavily impressed by it. I know little French and German now. Guten Tag! Bonjour !</p>
        <p>When I was thinking about , why not a site like Duolingo for tech, I found out <a href='http://www.enki.com/' target='_blank'>Enki</a>. It's a mobile app and it is very similar to what I had in my mind</p>
        <p>Enki is already very popular within my circle and it's invite only. I have been using Enki for the past 1 month and I must say that it is helping me a lot</p>
        <p>Since Enki had only Android and iOS app, I decided to make a web-app for them. 
        But since they are a startup, the APIs are not open yet. So I created this web-app from scratch 
        to resemble Enki</p>
      </div>
      <div className = 'welcome-content'>
        <h3 className = 'text-center'>Support</h3>
        <p>This web-app is a working prototype. Though the contents are static it is loaded from 
          a JSON file and the lessons are loaded from a MD file. Still a long way to go. But I hope it's a good start.
        </p>
        <p>I am using React+Redux to create this app. If you are also interested in this you can contribute to the app <a href='https://github.com/subramaniashiva/tech-workouts' target='_blank'>here</a></p>
        <p>Let me know about your thoughts by contacting me <a href='https://twitter.com/subramaniashiva' target='_blank'>here</a>. Happy learning! Cheers!</p>
      </div>
    </div>);
  }
}

WelcomeContainer.propTypes = {
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(WelcomeContainer)
