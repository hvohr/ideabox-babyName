import './App.css';
import React, { useState, useEffect } from 'react'
import Header from '../Header/Header'
import IdentityCard from '../IdentityCard/IdentityCard'


function App() {
const [identity, setIdentity] = useState([])
function getIdentity() {
  fetch(`https://randomuser.me/api/`)
  .then(response => response.json())
  .then(data => setIdentity(data.results))
}
useEffect(() => {
  getIdentity()
}, [])
let userData = identity.map(user => <IdentityCard firstName={user.name.first} lastName={user.name.last} gender={user.gender} phone={user.phone} email={user.email} birthday={user.dob.date}/> )
 return (
    <div>
      <Header />
      <button onClick={getIdentity}>Get New Identity</button>
      {userData}
    </div>
  );
}

export default App;
