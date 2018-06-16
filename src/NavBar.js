import React from 'react'
import './NavBar.css'



function NavLink (props) {
    const liClassName = (props.route === props.activeRoute) ? 'is-active' : ''
    const href = '#' + props.route
  
    return (
      <li className={liClassName}>
        <a href={href}>{props.label}</a>
      </li>
    )
  }


function NavBar (props) {
    return (
        <nav className='tabs'>
            <ul>
                <NavLink label='Welcome' route='/home' activeRoute={props.activeRoute} />
                <NavLink label='Add Contact' route='/add' activeRoute={props.activeRoute} />
                <NavLink label='My Contacts' route='/show' activeRoute={props.activeRoute} />
            </ul>
        </nav>
    )
}

export default NavBar