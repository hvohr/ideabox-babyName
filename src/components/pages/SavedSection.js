import React from 'react'
import NavBar from '../NavBar/NavBar'

function SavedSection(props) {
  return (
    <div>
      <NavBar />
      <div className='saved-cards'>
      {!props.savedIdentities.length && <h2 className= 'no-saved-message'>No saved identites yet -- add some !</h2>}
      {props.savedIdentity}
      </div>
    </div>
  )
}

export default SavedSection