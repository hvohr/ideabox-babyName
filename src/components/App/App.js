import './App.css';
import React, { useState } from 'react'
import IdentityCard from '../IdentityCard/IdentityCard'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/Home'
import SavedSection from '../pages/SavedSection'
import SavedIdentities from '../SavedIdentities/SavedIdentities'

function App() {
  const [identity, setIdentity] = useState([])
  const [savedIdentity, setSavedIdentity] = useState([])
  function getIdentity() {
    fetch(`https://randomuser.me/api/`)
      .then(response => response.json())
      .then(data => setIdentity(data.results))
      .catch(error => console.log(error))
  }
  let userData = identity.map(user => <IdentityCard
    firstName={user.name.first}
    lastName={user.name.last}
    birthCity={user.location.city}
    birthCountry={user.location.country}
    phone={user.phone}
    email={user.email}
    birthday={user.dob.date}
    key={user.login.uuid}
    id={user.login.uuid}
    savedIdentity={addSavedIdentity} />
  )

  function addSavedIdentity() {
    if (!savedIdentity.includes(identity[0])) {
      setSavedIdentity([...savedIdentity, identity[0]])
    }
  }
  function deleteSavedIdentity(id) {
    const filteredSaved = savedIdentity.filter(person => {
      if (person.login.uuid != id) {
        return person
      }
    })
    setSavedIdentity(filteredSaved)
  }

  let savedPerson = savedIdentity.map(prop => {
    return (<SavedIdentities
      firstName={prop.name.first}
      lastName={prop.name.last}
      birthCity={prop.location.city}
      birthCountry={prop.location.country}
      phone={prop.phone}
      email={prop.email}
      birthday={prop.dob.date}
      key={prop.login.uuid}
      id={prop.login.uuid}
      deleteIdentity={deleteSavedIdentity}
    />
    )
  })
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home getIdentity={getIdentity} userData={userData} />} />
        <Route path='/home' element={<Home />} />
        <Route path='/savedsection' element={<SavedSection savedIdentities = {savedIdentity} savedIdentity={savedPerson} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
