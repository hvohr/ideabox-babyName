import React from 'react'
import "./IdentityCard.css"

function IdentityCard(props) {
  return (
    <section className="card-container">
      <h2>{props.firstName} {props.lastName}</h2>
      <p>{props.birthday}</p>
      <p>{props.phone}</p>
      <p>{props.gender}</p>
      <p>{props.email}</p>
    </section>
  )
}

export default IdentityCard