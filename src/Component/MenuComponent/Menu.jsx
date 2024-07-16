import React from 'react'
import Cake from '../../Assests/Images/Frame 12.png'
import plate from '../../Assests/Images/Frame 13.png'
import dish from '../../Assests/Images/Frame 14.png'
import noodles from '../../Assests/Images/Frame 16.png'
import beef from '../../Assests/Images/Frame 17.png'
import plate2 from '../../Assests/Images/Frame 18.png'
import dish2 from '../../Assests/Images/Frame 19.png'
import noodles2 from '../../Assests/Images/Frame 20.png'
import beef2 from '../../Assests/Images/Frame 17.png'

function Menu() {
  return (
    <div className=' h-full w-full flex md:flex-row  justify-around py-20  '>
        <div className=' justify-center align-middle flex'>
            <div className=' relative border border-textColor h-customHeight w-customWidth  '></div>
            <div className=' absolute mr-16 mt-10 z border border-textColor h-customHeight w-customWidth grid grid-cols-3  '>
                <img src={Cake} alt=""  className='' />
                <img src={plate} alt="" />
                <img src={dish} alt="" />
                <img src={noodles} alt="" />
                <img src={beef} alt="" />
                <img src={plate2} alt="" />
                <img src={dish2} alt="" />
                <img src={noodles2} alt="" />
                <img src={beef2} alt="" />
            </div>
        </div>
        <div>
            <div className=' '>
                <h1 className=' text-textColor font-extrabold text-7xl pb-7 '>Menu</h1>
            </div>
           <div className=' flex flex-col gap-12 text-textColor text-4xl justify-center '>
            <a className=' bg-textColor cursor-pointer  text-customColor py-4 h-20 w-64 pl-8 ' href="Italian">Italian</a>
            <a href="">Japanese</a>
            <a href="">Mexican</a>
            <a href="">Drinks</a>
            <a href="">Burgers</a>
            <a href="">Snacks</a>
            <a href="">Dessert</a>
           </div>
        </div>
    </div>
  )
}

export default Menu