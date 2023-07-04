import './Header.css'

function Header() {
  return (
    <header className='navBar'>
      <button className="home-button">Home</button>
      <div className='title-section'>
        <img src={require("../images/suspect.png")}></img>
        <h1>New Identity Generator</h1>
      </div>
      <button className="saved-container-button">Saved Identities</button>
    </header>
  )
}

export default Header