import React from 'react'
import { useState } from 'react'
import './write.css'
import axios from 'axios'
import { useContext } from 'react'
import { myContext } from '../../context/Context'
import { FaPlus } from 'react-icons/fa'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faplus } from '@fortawesome/free-solid-svg-icons'

export default function () {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [file, setFile] = useState(null)
  const {user} = useContext(myContext)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newPost ={
      title,
      desc,
      userName:user.userName
    }
    if(file){
      const data = new FormData()
      const filename = Date.now() + file.name
      data.append('name',filename)
      data.append('file',file)
      newPost.photo = filename

     try{
      await axios.post('/upload',data)

     }catch(err){
     }
    }
    try{
      const res = await axios.post('/post',newPost)
      window.location.replace('/post/'+ res.data._id)

    } catch(err) {

    }
  }

  return ( 
    <div className='write'>
      {file && ( <img 
      className='writeImg'
      src={URL.createObjectURL(file)}
       alt=''
        /> )}
      <form className='writeForm' onSubmit={handleSubmit}>
        <div className='writeFormGroup'>
          <label htmlFor='fileInput'>
           <div className='writeIcon'>  <FaPlus /> </div>
          </label>
          <input type = 'file' id= 'fileInput' style={{display:'none'}} onChange={e => setFile(e.target.files[0])}/>
          <input type = 'text' placeholder='Title' className='writeInput' autoFocus={true} onChange={ e => setTitle(e.target.value)}/>
        </div>
        <div className='writeFormGroup'>
          <textarea 
         placeholder='Tell your story...'
         type='text'
         className='writeInput writeText'
         onChange={e =>setDesc(e.target.value)}
          ></textarea>
            <div>
              <button className='writeSubmit' type='submit'>Publish</button>
            </div>
        </div>
      </form>
    </div>

   /*  <div className='containerWrite'>
      {file &&(
      
      < img
        className='writeImg'
        src={URL.createObjectURL(file)}
        alt=''
        />
      )}
        <form className='writePost' onSubmit={handleSubmit}>
          <input type ='desc' className='postTitle' placeholder='Enter post Title' onChange={e =>setTitle(e.target.value)}></input><hr></hr>
    <div className='writeBlog'>
          <label for='myfile'></label>
          <input type = 'file' id='myfile' name='myfile' onChange={e =>setFile(e.target.files[0])}></input>
          <input type='submit' className='submitPost'></input>
       </div> 

       <div className='writeBlog'>
        <textarea className='desc' placeholder='Enter post details' onChange = {e =>setDesc(e.target.value)}></textarea>
        <button className='postButton' type = 'submit'> Post </button>
        </div>
        </form>
</div> */

  )
}
