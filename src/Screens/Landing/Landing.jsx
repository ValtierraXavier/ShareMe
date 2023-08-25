import React, {useState}from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import PostCard from '../../Components/PostCard/PostCard.jsx'
import './Landing.css'

export default function Landing({posts}) {
  return (
    <div className ='landingContainer'>
      <h1 id='homeLabel' className='pageLabel'>Home</h1>
    {posts.length?
      <div id ='postCardMapContainer'>{
      posts.map((post, index)=>{
        return(<PostCard key={`PU${index}`} post={post}/>)
      })
      }</div>
      :<div id ='homepageLoading'>
          <h1 id ='loading' >Loading...</h1>
        </div>
    }    
    </div>
  )
}