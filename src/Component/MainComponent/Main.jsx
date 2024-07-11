import React from 'react';
import Burger from '../../Assests/Images/pexels-taha-balta-4628559 1.png';
import Pasta from "../../Assests/Images/pexels-valeria-boltneva-842571 1.png";
import Pizza from "../../Assests/Images/pexels-eneida-nieves-905847 1.png";
import Button from '../ButtonComponent/Button';

function Main() {
  return (
    <div className=' flex flex-row h-full w-full justify-center align-middle gap-28 py-16 lg:justify-around lg:gap-10'>
      
      <div className=' relative '>
      <img src={Burger} alt="" className='object-cover h-full' />
        <div className=' absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-customColor text-3xl font-bold px-10 py-2'>
           Burger
         </div>
      </div>
      <div className=' grid grid-cols-2 gap-16 md:grid-cols-none md:grid-flow-row'>
        <div className=' relative'>
          <img src={Pasta} alt="" className=' object-cover md:h-full md:w-full' />
            <div className=' absolute bottom-0 left-0  text-center bg-black bg-opacity-50 text-customColor text-3xl font-bold px-10  py-2'>
            Noodles & Pasta
            </div>
        </div>
        <div className=' md:flex-row md:justify-center md:align-middle'>
          <h1 className='h-33 w-97 font-semibold text-textColor text-5xl'>Cookt</h1>
          <br />
          <p>A Symphony of Flavors in Every Dish</p>
          <br />
          <div className='py-16'>
            <Button />
          </div>
        </div>
        <div className=' relative col col-span-2 '>
          <img src={Pizza} alt="" className=' object-cover h-full' />
            <div className=' absolute bottom-0 left-0  text-center bg-black bg-opacity-50 text-customColor text-3xl font-bold  py-2  px-10'>
              Pizza
            </div>
        </div>
        </div>
   </div>
  );
}

export default Main;
