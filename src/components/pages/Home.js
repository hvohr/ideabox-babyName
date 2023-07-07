import React from 'react'
import NavBar from '../NavBar/NavBar'

function Home(props) {
  return (
    <div>
      <NavBar />
      <section className='home-container'>
        <button className="generate-button" onClick={props.getIdentity}>Get New Identity</button>
        {!props.userData.length && <h2 className="empty-line">In some trouble? Need some new personal information? Click the button above to generate!</h2>}
        {props.userData}
      </section>
    </div>
  )
}

export default Home