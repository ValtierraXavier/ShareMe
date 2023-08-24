import './App.css';
import { useEffect, useContext, useState } from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import Nav from './Components/Nav/Nav.jsx'
import Landing from './Screens/Landing/Landing.jsx'
import PostCard from './Components/PostCard/PostCard.jsx';
import PostModal from './Components/PostModal/PostModal';
import Comments from './Components/Comments/Comments.jsx';
import LogInModal from './Components/LogInModal/LogInModal.jsx';
import SignupPage from './Screens/SignUp/SignupPage.jsx';
import UserHomepage from './Screens/UserHomepage/UserHomepage.jsx';
import UserStuff from './Screens/userStuff/UserStuff.jsx';
import {getAllPosts} from './Services/PostServices/PostServices.js'

function App() {

  const[modalOpen, setModalOpen] = useState(false)
  const[posts, setPosts] = useState([])
  const[user, setUser] = useState('')
        
  const HandleLoginModal=()=>{
            if(modalOpen === false){
              const loginModal = document.getElementById('loginModal')
              loginModal.style.visibility = 'visible'
              setModalOpen(prev => prev = true)
                // openLoginModal()
            }else if(modalOpen === true){
              const loginModal = document.getElementById('loginModal')
              loginModal.style.visibility = 'hidden'            
              setModalOpen(prev => prev = false)
                // closeLoginModal()
            }
    }
  
  

  return (
    <div className="App">
      <Nav HandleLoginModal={HandleLoginModal} />
      <LogInModal/>
      <Routes> 
        <Route path = '/' element={<Landing/>}/>
        <Route path = '/signup' element={<SignupPage/>} />
        <Route path = '/user/:id' element={<UserHomepage/>} />       
        <Route path = '/user/:id/settings' element={<UserStuff/>} />       
        {/* <PostModal/> */}
        {/* <PostCard /> */}
        {/* <Comments/> */}
      </Routes>
    </div>
  );
}

export default App;
