import './Header.css'

function Header(props) {
  return (
    <header className='navBar'>
      <div className='title-section'>
        <img src={require("../images/suspect.png")}></img>
        <h1>New Identity Generator</h1>
      </div>
      <div className='nav-section'>
        <button className="home-button" onClick={props.showHome}>Home</button>
        <button className="saved-container-button">Saved Identities</button>
      </div>
    </header>
  )
}

export default Header