import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import PostCard from '../../Components/PostCard/PostCard.jsx'

export default function Landing() {
  return (
    <div className ='landingContainer'>Landing!
      <PostCard/>
    </div>
  )
}