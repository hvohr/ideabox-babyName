import './Form.css'
import IdentityCard from '../IdentityCard/IdentityCard'
import data from '../temporaryData/data'
import { useState } from 'react'


function Form() {
  const [page, pageLoad] = useState('')
  function getRandomUser(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return [item];
  }
  const result = getRandomUser(data);
  let find = result.map(user1 => <IdentityCard name={user1.name} age={user1.age} birthday={user1.birthday} birthplace={user1.birthplace}/>)
  return (
  <form className='identity-form'>
    <button onClick={() => pageLoad(find)}>Click for Random Identity</button>
  </form>
  )
}

export default Form