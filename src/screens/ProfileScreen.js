import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';
import Navbar from '../components/Navbar';
import "./ProfileScreen.css"
import Plan from '../components/Plan';

function ProfileScreen() {
  const user = useSelector(selectUser);
  return (
    <div className='profileScreen'>
      <Navbar />
      <div className="profileScreen_body">
        <h1>Your Profile</h1>
        <div className="profileScreen_info">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
               alt="" 
          />
          <div className="profileScreen_details">
            <h2>{user.email}</h2>
            <div className="profileScreen_plans">
              <Plan />
              <button 
              onClick={()=>auth.signOut()}
              className='profileScreen_signOut'>Sign Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen