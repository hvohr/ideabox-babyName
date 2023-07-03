import React from 'react'
import "./IdentityCard.css"

function IdentityCard(props) {
  return (
    <section className="card-container">
      <h2>Name: {props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Birthday: {props.birthday}</p>
      <p>Birthplace: {props.birthplace}</p>
    </section>
  )
}

export default IdentityCard