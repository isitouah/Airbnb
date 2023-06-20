import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'





const RegisterPage = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  async function registerUser(ev) {
    ev.preventDefault();  
    try{
      await axios.post('/register', {
        name,
        email,
        password,
      });
      alert('Registration sucessful. Now you can log in');
    } catch (e) {
      alert('Registration failed. plaise try again later')
    }
  }


  return (
    <div className='mt-4 grow flex items-center justify-around'>
      <div className='mb-64'>
        <h1 className='text-4xl text-center mb-4'>Register</h1>
        <form className='max-w-md mx-auto border'></form>
        <form className='max-w-md mx-auto'>
          <input type="text" placeholder='Amir misraoui' value={name} onChange={ev => setName(ev.target.value)} />
          <input type="email" placeholder='Your@email.com' value={email} onChange={ev => setEmail(ev.target.value)} />
          <input type="password" placeholder='Password' value={password} onChange={ev => setPassword(ev.target.value)} />
          <button className='primary' onClick={registerUser}>Register</button>
          <div className='text-center py-2 text-gray-500'>
            Allready a member? <Link className='underline text-en' to={'/login'}>Login</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegisterPage