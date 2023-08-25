import './App.css';
import { useEffect, useContext, useState } from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import Nav from './Components/Nav/Nav.jsx'
import Landing from './Screens/Landing/Landing.jsx'
import LogInModal from './Components/LogInModal/LogInModal.jsx';
import SignupPage from './Screens/SignUp/SignupPage.jsx';
import UserHomepage from './Screens/UserHomepage/UserHomepage.jsx';
import UserStuff from './Screens/userStuff/UserStuff.jsx';
import {getPosts} from './Services/PostServices/PostServices.js'

function App() {

  const[modalOpen, setModalOpen] = useState(false)
  const[posts, setPosts] = useState([])
  const[user, setUser] = useState({})
        
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

    const checkUser=()=>{
      const token = window.localStorage.getItem('Token')
      if(token){
        console.log('youre logged in')
        const decoded = token
      }else{
        console.log('you are not logged in')
        setUser(prev => prev = {
          name: "Guest",
          avatarImg:"https://static.vecteezy.com/system/resources/previews/013/042/571/original/default-avatar-profile-icon-social-media-user-photo-in-flat-style-vector.jpg"
        } )
      }
    }

  const getAllPosts = async () => {
    try{
      const allPosts = await getPosts()
      setPosts(prev => prev = allPosts.data)
    }catch(error){console.log(error)}
  }
  
  useEffect(()=>{
    checkUser()
    getAllPosts()

  },[])

  return (
    <div className="App" id='App'>
      <Nav user = {user} HandleLoginModal={HandleLoginModal} />
      <LogInModal/>
      <Routes> 
        <Route path = '/' element={<Landing posts={posts}/>}/>
        <Route path = '/signup' element={<SignupPage/>} />
        <Route path = '/user' element={<UserHomepage/>} />       
        <Route path = '/user/settings' element={<UserStuff/>} />
      </Routes>
    </div>
  );
}

export default App;
