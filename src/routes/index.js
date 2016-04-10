import 'babel-polyfill'
import React from 'react'
import { Route, IndexRoute } from 'react-router'
//Containers (layouts)
import MainLayout from 'layouts/main'
import WelcomeContainer from 'containers/welcomeContainer'
import WorkoutContainer from 'containers/workouts'
import WorkoutTech from 'containers/WorkoutTech'
import SocialMediaContainer from 'containers/socialMediaContainer'
import ReadBlogsContainer from 'containers/readBlogsContainer'

export default () => {
  return (
    <Route>
      <Route path = '/' component = {MainLayout}>
        <IndexRoute component = {WelcomeContainer} />
        <Route path = '/workouts' component = {WorkoutContainer} />
        <Route path = '/workouts/:technology' component = {WorkoutTech} />
        <Route path = '/read' component = {ReadBlogsContainer} />
        <Route path = '/social-media' component = {SocialMediaContainer} />
      </Route>
    </Route>)
}
