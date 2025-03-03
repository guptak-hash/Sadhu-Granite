import {Link, NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <Link to='/'>LOGO</Link>
        <div className='nav-links'>
           <NavLink to='/about'>ABOUT</NavLink>
           <NavLink to='/services'>SERVICES</NavLink>
           <NavLink to='/projects'>PROJECTS</NavLink>
           <NavLink to='/contact'>CONTACT US</NavLink>
        </div>
    </div>
  )
}

export default Navbar