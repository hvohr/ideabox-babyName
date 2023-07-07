import './NavBar.css'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <nav className='navBar'>
      <div className='nav-section'>
        <li className='home-button'>
          <NavLink to='/' className='home-class'>Home</NavLink>
        </li>
        <li className='saved-section-button'>
          <NavLink to='/savedSection' className='saved-class'>Saved Identities</NavLink>
        </li>
      </div>
      <div className='title-section'>
        <h1 className='title'>New Identity Generator</h1>
      </div>
    </nav>
  )
}

export default NavBar