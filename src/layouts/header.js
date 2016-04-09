import React from 'react'
import { Link } from 'react-router'

// Styles
import 'styles/header.scss'

const Header = ({ menus }) => (
  <header className = 'header clearfix'>
    <nav className = 'navbar'>
      <div className = 'container-fluid'>
        <div className = 'navbar-header'>
          <button type='button' className = 'navbar-toggle collapsed' data-toggle='collapse' data-target='#top-bar-menu' aria-expanded='false'>
            <span className = 'sr-only'>Toggle navigation</span>
            <span className = 'icon-bar'></span>
            <span className = 'icon-bar'></span>
            <span className = 'icon-bar'></span>
          </button>
          <a className = 'navbar-brand' href = 'javascript:void(0)'>Tech Workouts</a>
        </div>

        <div className = 'pull-right nav-bar' id = 'top-bar-menu'>
          <ul className = 'nav navbar-nav'>
<<<<<<< HEAD
            {menus && menus.map((item, index) => (
             <li key = {index}>
              <Link to = {item.href} activeClassName='active'>{item.name}</Link>
=======
            {menus && menus.map((x, index) => (
             <li key = {index}>
              <a href='#'>{x}</a>
>>>>>>> 9f5f9e90af91e4e74505d8835758356086e06e3d
             </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  menus: React.PropTypes.array.isRequired
};

export default Header
