import React from 'react'
import Button from '../ButtonComponent/Button'
import Aboutimage from '../../Assests/Images/pexels-adrien-olichon-3534750 1.png'
import Aboutsecond from '../../Assests/Images/pexels-aleksandra-platonova-2263510 1.png'

function About() {
  return (
    <div className=' h-full w-full flex flex-col justify-around items-center '>
      <div>
      <h1 className= ' text-[3rem] text-textColor font-bold '>About</h1>
      </div>
      <br /><br />
      <div className=' grid grid-cols-3 justify-center gap-24 '>
        <div className=' w-[400px] h-[270px] items-center'>
          <p className=' lin text-[18px] text-wrap text-textColor '>Embark on a culinary journey that seamlessly 
            fuses speed and flavor at our dining 
            destination. Indulge in a symphony of 
            delectable creations meticulously crafted for those 
            who appreciate swift satisfaction 
            without compromising on taste. From 
            mouthwatering bites to savory delights, our 
            menu is a celebration of bold flavors and quality 
            ingredients. </p>
            <br /><br /><br /><br />
            <Button className= ' h-[60px] w-[308px]' text = "Learn Now"/>
        </div>
        <div className=' relative top-28  '>
        <div className=' absolute left-8 border border-textColor h-[30rem] w-[20rem] '></div>
          <div className=' absolute top-8 mr-[208px] mb-[577px] z h-[481.44px] w-[321px] '>
            <img src= {Aboutimage} alt="" /></div>
          </div>
          <div className=' relative '>
        <div className=' absolute top-16 left-8 border border-textColor h-[28rem] w-[20rem] '></div>
          <div className=' absolute mr-[208px] mb-[577px] z h-[481.44px] w-[321px] '>
            <img src= {Aboutsecond} alt="" /></div>
          </div>
      </div>
    </div>
  )
}

export default About