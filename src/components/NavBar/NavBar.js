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
        <button className="saved-container-button">Saved Identities</button>
      </div>
    </nav>
  )
}

export default NavBar