import './Header.css'

function Header(props) {
  return (
    <header className='navBar'>
      <div className='title-section'>
        <img src={require("../images/suspect.png")}></img>
        <h1>New Identity Generator</h1>
        <button onClick={props.showHome}>Home</button>
      </div>
    </header>
  )
}

export default Header