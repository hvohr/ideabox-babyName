import './App.css';
import React, { useState } from 'react'
import NavBar from '../NavBar/NavBar'
import IdentityCard from '../IdentityCard/IdentityCard'
import SavedIdentities from '../SavedIdentites/SavedIdentities'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/Home'
// import SavedSection from '../pages/SavedSection'



function App() {
  const [identity, setIdentity] = useState([])
  const [savedIdentity, setSavedIdentity] = useState([])
  function getIdentity() {
    fetch(`https://randomuser.me/api/`)
      .then(response => response.json())
      .then(data => setIdentity(data.results))
      .then(error => console.log(error))
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
    addSavedIdentity={addSavedIdentity} />
  )
  
  function addSavedIdentity() {
    setSavedIdentity(identity)
  }
  return (
    <BrowserRouter>
     <Routes>
       <Route path='/' element={<Home getIdentity={getIdentity} userData={userData}/>} />
         <Route path='/home' element={<Home />} />
        <Route/>
     </Routes>
    </BrowserRouter>
   )
 }

export default App;
