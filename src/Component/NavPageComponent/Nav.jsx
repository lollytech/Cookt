import React from 'react';
import logo from '../../Assests/Images/logo.png';



function Nav() {
  return (
    <div className=' h-20 w-full flex bg-transparent shadow-black shadow-inner align-middle justify-around py-5 '>
      <div className=' flex space-x-24 '>
        <a href="" className=' text-textColor text-18px'>Menu</a>
        <a href="" className=' text-textColor text-18px' >About</a>
      </div>
      <div><img src={logo} alt="" /></div>
      <div className=' flex space-x-24'>
        <a href="" className=' text-textColor text-18px'>Outlets</a>
        <a href="" className=' text-textColor text-18px'>Order Online</a>
      </div>
    </div>
  )
}

export default Nav
