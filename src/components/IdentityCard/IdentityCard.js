import React from 'react'
import "./IdentityCard.css"

function IdentityCard(props) {
  console.log(props)
  if (props.length === 0) {
    return <h2>No new identity yet -- click the button above to generate!</h2>
  }
  return (
    <section className="card-container">
      <h2>{props.firstName} {props.lastName}</h2>
      <p>{props.birthday}</p>
      <p>{props.phone}</p>
      <p>{props.gender}</p>
      <p>{props.email}</p>
      <button className='save-button'>Save Identity</button>
    </section>
  )
}

export default IdentityCard