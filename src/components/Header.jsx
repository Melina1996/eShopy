import React from 'react'
import BasketIcon from '../assets/img/BASKET_ICON.png'

export default function Header() {
  return (
    <div className="h-[50dvh] w-screen jungleImage bg-center bg-cover ">
      <div className='h-[10dvh] flex justify-end gap-5 items-center text-white pr-[20px] text-[25px]'>
        <div>HOME</div>
        <div>ABOUT</div>
        <img className='h-[35px] border-white border-[2px] rounded-full p-[5px] hover:cursor-pointer' src={BasketIcon} alt="" />
      </div>
      <div className='flex justify-center items-center h-[40dvh] text-[100px] text-white drop-shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]'>
        JOIN THE JUNGLE
      </div>
    </div>
  )
}
