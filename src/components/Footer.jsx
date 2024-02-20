import React from 'react'

export default function Footer() {
  return (
    <div className='h-[50dvh]'>
      <div className='h-[10dvh] bg-[#1E1E1E] flex justify-center items-center'>
        <div className='flex gap-20'>
          <div className='bg-[#D9D9D9] rounded-full h-[50px] w-[50px]'></div>
          <div className='bg-[#D9D9D9] rounded-full h-[50px] w-[50px]'></div>
          <div className='bg-[#D9D9D9] rounded-full h-[50px] w-[50px]'></div>
        </div>
      </div>
      <div className='h-[20dvh] bg-[#16341A] '></div>
      <div className='h-[20dvh] jungleImage bg-center bg-cover'></div>
    </div>
  )
}
