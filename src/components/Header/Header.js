import './Header.css'

function Header() {
  return (
    <header className='navBar'>
      <div className='title-section'>
        <img src={require("../images/suspect.png")}></img>
        <h1>New Identity Generator</h1>
      </div>
    </header>
  )
}

export default Header