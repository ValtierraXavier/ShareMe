import React from 'react'
import './Comments.css'

export default function Comments({commentText}) {
  return (
    <div className='eachCommentContainer'>
        <div className='commentDetails'>
            <div className='nameDiv'>name</div>
            <div className='timeSincePost'>1day</div>
        </div>
        <p className='commentText'>TEXT</p>
        <div className='actionButtonsContainer'>...
            <div className='deleteButton'>delete</div>
            <div className='editButton'>edit</div>
        </div>
    </div>
  )
}
