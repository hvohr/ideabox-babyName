import './App.css';
import React, { useState } from 'react'
import Form from '../Form/Form';
import Header from '../Header/Header'
import data from '../temporaryData/data'
import IdentityCard from '../IdentityCard/IdentityCard'


function App() {
  return (
    <div>
      <Header />
      <Form />
      <IdentityCard />
    </div>
  );
}

export default App;
