import React from 'react'
import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'
import './singlepost.css'
import { FaPenSquare } from 'react-icons/fa'
import { FaTrashAlt } from 'react-icons/fa'
import { useState } from 'react'
import { useContext } from 'react'
import { myContext } from '../../context/Context'

export default function SinglePost () {
  const pf = 'http://localhost:5000/images/'
  const {user} = useContext(myContext)
  const location = useLocation()
  const path = (location.pathname.split('/')[2])
  const [post, setPost] = useState({})
  const [title, setTitle] = useState()
  const [desc, setDesc] = useState()
  const [updatepost, setUpdatePost] = useState(false)

 useEffect(()=>{
  const getPost = async () =>{
    const res =  await axios.get('/post/'+ path)
   setPost(res.data)
   setTitle(res.data.title)
   setDesc(res.data.desc)
    console.log(post.photo)
    console.log(post.userName == user.userName)
  }
  getPost()
 },[path])

  const handleDelete = async () => {
    try {
    await axios.delete(`/post/${post._id}`,{
    data: {userName:user.userName},
    })
    window.location.replace('/')
    //console.log(post.photo)
    }
    catch(err) {
   console.log(err)
    }
 } 

 const handleUpdate = async () =>{
  try {
    await axios.put(`/post/${post._id}`,{
       userName:user.userName, title, desc
    })
    setUpdatePost(false)
    window.location.reload()
    console.log(post)
  } catch(err){
    console.log(err)
  }
 }
  return (
    <div className='singlepost'>
      <div className='singlePostWrapper'>
        {post.photo && (
        <img
          src={  pf + post.photo}
          alt=''
          className='singlePostImg'
        />
        )}{
          updatepost ? <input type='text' vaule = {post.title} onChange={(e) =>setTitle(e.target.value)} className='singlePostTitleUpdate'/>:
          (
        <h1 className='singlePostTitle'>
           {post.title}
           {post.userName === user?.userName && (
          <div className='singlepostEdit'>
            <i className=' singlePostIcon ' onClick = {() => setUpdatePost(true)}> <FaPenSquare/> </i>
            <i className=' singlePostIcon ' onClick={handleDelete}>  <FaTrashAlt/> </i>
          </div>
           )}
        </h1>
          )}
        <div className='singlePostInfo'>
          <span className='singlePostAuthor'>
            <Link to={`/?user=${post.userName}`} className='link'>
              Author: <b>{post.userName} </b>
              </Link>
          </span>
          <span className='singlePostDate'> {new Date(post.createdAt).toDateString()} </span>
        </div>
        {
          updatepost ? <textarea rows='10' cols='20' vaule = {post.desc} onChange={(e)=>setDesc(e.target.value)} className= 'singlePostDescUpdate'  />:
          (
        
        <p className='singlePostDesc'>
             {post.desc}
        </p>
          )}
          {updatepost && (
          <button className='singlePostButton' onClick={handleUpdate}>Update</button>
          )}
      </div>
    </div>
  )
}
