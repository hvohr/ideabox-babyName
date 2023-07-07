import React from 'react'
import NavBar from '../NavBar/NavBar'

function Home(props) {
  console.log(props)
  return (
    <div className='home-container'>
      <NavBar />
      <main className='home-button'>
        <h1>New Identity Generator</h1>
        <section className="main-container">
          <button className="generate-button" onClick={props.getIdentity}>Get New Identity</button>
          {!props.userData.length && <h2 className="empty-line">In some trouble? Need some new personal information? Click the button above to generate!</h2>}
          {props.userData}
        </section>
      </main>
    </div>
  )
}

export default Home