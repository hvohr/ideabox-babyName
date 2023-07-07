import React from 'react'

function SavedIdentityCard(props) {
  console.log(props.info)
  return (
    <section className="card-container">
      <h2>Name: {props.info.firstName} {props.lastName}</h2>
      <p>DOB: {props.info.birthday}</p>
      <p>Phone Number: {props.info.phone}</p>
      <p>Email: {props.info.email}</p>
      <p>Birthplace: {props.info.birthCity}, {props.birthCountry}</p>
    </section>
  )
}

export default SavedIdentityCard