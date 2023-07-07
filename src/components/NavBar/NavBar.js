import './NavBar.css'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <nav className='navBar'>
      <div className='title-section'>
        <li className='home-button'>
          <NavLink to='/' className='home-class'>Home</NavLink>
        </li>
      </div>
      <div className='nav-section'>
        <li className='saved-section-button'>
          <NavLink to='/savedSection' className='saved-class'>Saved Identities</NavLink>
        </li>
      </div>
    </nav>
  )
}

export default NavBar