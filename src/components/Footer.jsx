import React from 'react'

export default function Footer() {
  return (
    <div className='h-[50dvh]'>
      <div className='h-[10dvh] bg-[#1E1E1E] flex justify-center items-center'>
        <div className='flex gap-20'>
          <div className='bg-[#16341A] rounded-full h-[50px] w-[50px] flex justify-center items-center'><img className='h-[30px]' src="../src/assets/img/Facebook.png" alt="" /></div>
          <div className='bg-[#16341A] rounded-full h-[50px] w-[50px] flex justify-center items-center'><img className='h-[30px]' src="../src/assets/img/Twitter.png" alt="" /></div>
          <div className='bg-[#16341A] rounded-full h-[50px] w-[50px] flex justify-center items-center'><img className='h-[30px]' src="../src/assets/img/Instagram.png" alt="" /></div>
        </div>
      </div>
      <div className='h-[20dvh] bg-[#16341A] relative'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2518.693738058748!2d4.338645076949877!3d50.85535537167226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c38c275028d3%3A0xc7799151146ebf77!2sMolenGeek!5e0!3m2!1sfr!2sbe!4v1708514824188!5m2!1sfr!2sbe" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='h-full w-full'></iframe>

      </div>
      <div className='h-[20dvh] jungleImage bg-center bg-cover'></div>
    </div>
  )
}
