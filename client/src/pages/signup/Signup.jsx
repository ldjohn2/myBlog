import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import './signup.css'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [userName, setuserName] = useState('')
  const [passWord, setpassWord] = useState('')
  const [error, setError] = useState(false)

  const handleSubmit = async (e) =>{
     e.preventDefault()
     setError(false)
     try {
     const res = await axios.post('/auth/register',{
      email, 
      userName,
      passWord
     })
      res.data && window.location.replace('/login')
    console.log(res.data)

    }catch(err){
    setError(true)
    console.log(err)
    }
  }
  return (
    <div className='containerSignup'>
      <form className='signupForm' onSubmit={handleSubmit}>
        <span><h3>Please fill in this form to create account</h3></span>
        <label for='fname' className='label'> first name </label>
        <input type='fname' className='inputBar' placeholder='enter firstname'></input>
        <label for='lname' className='label'> last name </label>
        <input type='lname' className='inputBar' placeholder='enter lastname'></input>
        <label for='email' className='label'> Email</label>
        <input type= 'email' className='inputBar' placeholder='enter your email' onChange={e => setEmail(e.target.value)}>
        </input>
        <label for='username' className='label'> username </label>
        <input type='username' className='inputBar' placeholder='enter username' onChange={e => setuserName(e.target.value)}>
        </input>
        <label for='password' className='label'> password </label>
        <input type='password' className='inputBar' placeholder='enter password' onChange={e => setpassWord(e.target.value)}>
        </input>
        <button className='signupButton' type='submit'> Register</button>
      </form>
       { error && <span> username have been taken, enter different username</span>}
    </div>
  )
}
