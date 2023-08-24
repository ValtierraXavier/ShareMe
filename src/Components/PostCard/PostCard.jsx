import React from 'react'
import './PostCard.css'

export default function PostCard() {
    const caption = 'Some Random Caption that i am going to add a bunch of text to so that i can see how itl look. what do i do now when all the text is sitting at the bottom of the container? i dont know why this is so hard to style right now. its literally just a box with 4 things in it.'
  return (
    <div className = 'postCardContainer'>
        <div id = 'imgAndTitleContainer'>
            <h2 className= 'cardTitle'>A Fancy DSLR</h2>
            <img id = "postImg" src = 'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg'></img>
            <p id = 'captionContainer'>{caption}</p>     
        </div>
        <div id = 'likesButtonContainer'>
            <div id = 'likesButton'>Likes</div>  
        </div>
    </div>
  )
}
