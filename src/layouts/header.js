import React from 'react'

// Styles
import 'styles/header.scss'

const Header = ({ menus }) => (
  <header className='header clearfix'>
    <h3 className='pull-left logo'>
      Tech Workouts
    </h3>
    <ul className='pull-right navbar'>
      {menus && menus.map((x, index) => (
       <li key = {index}>
        <a href='#'>{x}</a>
       </li>
      ))}
    </ul>
  </header>
)

Header.propTypes = {
  menus: React.PropTypes.array.isRequired
};

export default Header
