import React from 'react'
import "./IdentityCard.css"

function IdentityCard(props) {
  if (props.length === 0) {
    return <h2>No new identity yet -- click the button above to generate!</h2>
  }
  return (
    <section className="card-container">
      <h2>Name: {props.firstName} {props.lastName}</h2>
      <p>DOB: {props.birthday}</p>
      <p>Phone Number: {props.phone}</p>
      <p>Email: {props.email}</p>
      <p>Birthplace: {props.birthCity}, {props.birthCountry}</p>
      <button className="save-button">Save Identity</button>
    </section>
  )
}

export default IdentityCard