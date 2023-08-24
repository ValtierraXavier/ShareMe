import React, {useState} from 'react'
import './PostModal.css'
import Comments from '../Comments/Comments.jsx'
import { postComment, getComments } from '../../Services/CommentServices/CommentSevices.js'

export default function PostModal() {

    let commentArr = ['hello', 'there', 'this', 'is', 'a', 'map']
    const[commentText, setCommentText] = useState('')
    const[allComments, setAllComments] = useState([])

    const handleCommentSubmit = async (e)=>{
        e.preventDefault(true)
        const commentBody ={
            commentText: commentText,
        }
        try{
            const commentsReturn = await postComment(commentBody)

            // const comments = await getComments()
            // console.log(comments)
            setAllComments(prev => prev = commentsReturn.data)
            console.log(commentsReturn.data)
        }catch(error){console.log(error)}
        // console.log('comment submitted')

    }

  return (
    <div className='postModal'>
        <div className='imgAndDeets'>
            <h2 className='postModalTitle banner'>title</h2>
            <img src='https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg' className='postModalImg'></img>
            <div className='captionAndLikesContainer'>
                <div>likes</div>
                <p className='captionContainer'>Caption</p>
            </div>
        </div>
            <div className='commentsContainer'>
                <h2 className='commentsContainerBanner banner' >Comments</h2>
                <div className= 'commentsContainerMap'>
                {
                    allComments.map((element, index)=>{
                        return(
                            <div key={`comments${index}`} className='individualComments'>{element.commentText}</div>
                            )
                        })
                    }
                </div>
            <form id ='commentForm' onSubmit={handleCommentSubmit}>
                <label>Comment Here</label>
                <textarea className ='commentsTextArea' onChange={(e)=>setCommentText(prev => prev = e.target.value)} value = {commentText} type= 'text' ></textarea>
                <input type = 'submit' id = 'makeCommentButton'></input>
            </form>
            </div>
    </div>
  )
}
