import React from 'react'
import { auth } from '../firebase'

const Navbar = () => {


  return (
   <div className="navbar">
    <span className="logo">Manda chat</span>
    <div className="user">
        <img src="https://images.pexels.com/photos/13461809/pexels-photo-13461809.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
         alt="" />
        <span>Anna</span>
        <button onClick={()=>signOut(auth)}>logout</button>
    </div>
   </div>
  )
}

export default Navbar