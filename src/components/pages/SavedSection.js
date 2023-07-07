import React from 'react'
import NavBar from '../NavBar/NavBar'

function SavedSection(props) {
  console.log(props)
  return (
    <div>
    <NavBar />
    {props.savedIdentity}
    </div>
  )
}

export default SavedSection