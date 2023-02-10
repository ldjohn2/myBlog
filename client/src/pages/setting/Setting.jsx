

import React from 'react'
import './setting.css'

export default function setting () {
  return (
    <div className='setting'>
      <div className='settingWrapper'>
        <div className='settingTitle'>
          <span class='settingUpdateTitle'>Update your account </span>
          <span class='settingDeleteTitle'>Delete your account  </span>
        </div>
        <form className='settingForm'>
          <label> Profile Picture</label>
          <div className='settingPP'>
            <img
              src='https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/273556029_1839445916246764_4612646148757396819_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=PT6KeQsYY58AX9Nx_Aq&_nc_ht=scontent-ord5-1.xx&oh=00_AT97wj4we3fpG_j9VjL72TrvsoJe3djURV9gBQUGHxqm3w&oe=62DD8138'
              alt=''
            />
            <label htmlFor='fileInput'>
              <i className='settingPPIcon fa-solid fa-circle-user'> </i>
            </label>
            <input type='file' id='fileInput' style={{ display: 'none' }} />
          </div>
          <label>UserName</label>
          <input type='text' placeholder='username' />
          <label>Email</label>
          <input type='email' placeholder='youremail@gmail.com' />
          <label>Password</label>
          <input type='passWord' placeholder='passWord' />
          <button className='settingSubmit'> Update</button>
        </form>
      </div>
    </div>
  )
}
