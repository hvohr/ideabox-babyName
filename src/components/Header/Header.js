import './Header.css'

function Header() {
return (
<header className='navBar'>
      <img src={require ("../images/suspect.png")}></img>
      <h1>New Identity Generator</h1>
    </header>
)
}

export default Header