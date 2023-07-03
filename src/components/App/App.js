import React from 'react'
import './App.css';
import '../Form/Form';

function App() {
  return (
    <div>
    <header className='navBar'>
      <img src={require ("../images/suspect.png")}></img>
      <h1>New Identity Generator</h1>
      <h2>Free of charge - no questions asked!</h2>
    </header>
    <Form />
    </div>
  );
}

export default App;
