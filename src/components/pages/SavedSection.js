import React from 'react'
import NavBar from '../NavBar/NavBar'

function SavedSection(props) {
  return (
    <div>
      <NavBar />
      <div className='saved-cards'>
        {props.savedIdentity}
      </div>
    </div>
  )
}

export default SavedSection