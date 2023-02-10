//import React from 'react'
import { Link } from 'react-router-dom'
import './post.css'

export default function Post({post}) {
  const pf = 'http://localhost:5000/images/'
  
  return (
    
    <div className='post'>
      {post.photo && (
        <img 
        className='postImg'
        src = { pf + post.photo}
        alt=''
        />
      )}
    <div className='postInfo'>
        <div className='postCater'>{
          post.catergories.map(c=>(
        <span className='postCat'>{c.name}</span>
          ))
        }
        </div>
        <Link to={`/post/${post._id}`}>
        <span className='post-Title'>
            {post.title}
        </span>
        </Link>
        <hr />
        <span className='postDate'> {new Date(post.createdAt).toDateString()}</span>
    </div>
    <p className='postDesc'>
       <span className='post-desc'>
         {post.desc}
         </span>
    </p>
    </div>
  )
}
