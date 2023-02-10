import axios from 'axios'
import React, { useRef } from 'react'
import { useContext } from 'react'
import { myContext } from '../../context/Context'
import './login.css'

export default function Login() {

  const userRef = useRef()
  const passwordRef = useRef()
  const {/* user */dispatch, isFetching} = useContext(myContext)

const handleSubmit = async (e) =>{
  e.preventDefault()
  dispatch({type:'LOGIN_START'})

  try{
    const res =  await axios.post('/auth/login',{
      userName: userRef.current.value,
      passWord:passwordRef.current.value
    })
    dispatch({type:'LOGIN_SUCCESS',payload:res.data})

  } catch(err){
    dispatch({type:'LOGIN_FAILURE'})

  }
}
console.log(isFetching)

  return (
    <div className='containerLogin'>
      <form className='signupForm' onSubmit={handleSubmit}>
        <span><h3>Please fill in this form to login</h3></span>
        <label for='username' className='label'> username </label>
        <input type='username' className='inputBar' placeholder='enter username' ref={userRef}></input>
        <label for='password' className='label'> password </label>
        <input type='password' className='inputBar' placeholder='enter password' ref={passwordRef} ></input>
        <button className='signupButton' type='submit' disabled={isFetching}> Log in</button>
      </form> 
    </div>
  )
}
