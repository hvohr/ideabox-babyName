import './App.css';
import React, { useState, useEffect } from 'react'
import NavBar from '../NavBar/NavBar'
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
    key={user.login.md5}
    savedIdentity={addSavedIdentity} />
  )

  function addSavedIdentity() {
    setSavedIdentity([...savedIdentity, identity[0]])
  }
  
let savedPerson = savedIdentity.map(prop => {
      return ( <SavedIdentities
        firstName={prop.name.first}
        lastName={prop.name.last}
        birthCity={prop.location.city}
        birthCountry={prop.location.country}
        phone={prop.phone}
        email={prop.email}
        birthday={prop.dob.date}
        key={prop.login.md5}
      />
      )
    })
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home getIdentity={getIdentity} userData={userData} />} />
        <Route path='/home' element={<Home />} />
        <Route path='/savedsection' element={<SavedSection savedIdentity={savedPerson} />} />
        <Route />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
