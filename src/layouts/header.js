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
          <a className = 'navbar-brand' href = '/'>Tech Workouts</a>
        </div>

        <div className = 'pull-right nav-bar' id = 'top-bar-menu'>
          <ul className = 'nav navbar-nav'>
            {menus && menus.map((item, index) => (
             <li key = {index}>
              <Link to = {item.href} activeClassName='active'>{item.name}</Link>
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
