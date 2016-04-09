import 'babel-polyfill'
import React from 'react'
import { Route } from 'react-router'
//Containers (layouts)
import MainLayout from 'layouts/main'
import WorkoutContainer from 'containers/workouts'
import WorkoutTech from 'containers/WorkoutTech'
import SocialMediaContainer from 'containers/socialMediaContainer'

//<Route path='/' component={MainLayout}/>

export default () => {
  return (
    <Route>]
      <Route path = '/' component = {MainLayout}>
        <Route path = '/workouts' component = {WorkoutContainer} />
        <Route path = '/workouts/:technology' component = {WorkoutTech} />
        <Route path = '/social-media' component = {SocialMediaContainer} />
      </Route>
    </Route>)
}
