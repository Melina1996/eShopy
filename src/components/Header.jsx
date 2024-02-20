import React from 'react'
import BasketIcon from '../assets/img/BASKET_ICON.png'

export default function Header() {
  return (
    <div className="h-[50dvh] w-screen jungleImage bg-center bg-cover ">
      <div className='h-[10dvh] flex justify-end gap-5 items-center text-white pr-[20px] text-[25px]'>
        <div className='hover:cursor-pointer text-[15px] md:text-[25px] lg:text-[30px]'>HOME</div>
        <div className='hover:cursor-pointer text-[15px] md:text-[25px] lg:text-[30px]'>ABOUT</div>
        <img className='h-[25px] md:h-[30px] lg:h-[35px] border-white border-[2px] rounded-full p-[5px] hover:cursor-pointer' src={BasketIcon} alt="" />
      </div>
      <div className='flex justify-center items-center h-[40dvh] lg:text-[100px] md:text-[40px] text-white text-[20px]'>
        JOIN THE JUNGLE
      </div>
    </div>
  )
}
