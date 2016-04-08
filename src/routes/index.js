import 'babel-polyfill'
import React from 'react'
import { Route } from 'react-router'
//Containers (layouts)
import MainLayout from 'layouts/main'
import WorkoutContainer from 'containers/workouts'
import SocialMediaContainer from 'containers/socialMediaContainer'

export default () => {
  return (
    <Route>
      <Route path='/' component={MainLayout} />
      <Route path='/work-outs' component={WorkoutContainer} />
      <Route path='/social-media' component={SocialMediaContainer} />
    </Route>)
}
