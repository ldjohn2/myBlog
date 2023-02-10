import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Topbar from '../../components/topbar/Topbar'
import Posts from '../../components/posts/Posts'
import Post from '../../components/post/Post'
import axios from 'axios'
import './home.css'
import { useLocation } from 'react-router-dom'

export default function Home() {
    const [posts,setPosts] = useState([])
    const location = useLocation()
    const {search} = useLocation()
    

    useEffect(()=>{
        const fecthPosts = async() =>{
            const res = await axios.get('/post' + search)
            setPosts(res.data)
            console.log(location)
        }
        fecthPosts()
    },[search])
  return (
    <>
    <div className='home'>
        <Posts posts={posts}/>
    </div>
    </>
    
  )
}
