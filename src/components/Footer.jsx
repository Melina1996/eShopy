import React from 'react'

export default function Footer() {
  return (
    <div className='h-[50dvh]'>


      <div className='md:h-[50dvh] h-[150dvh] bg-[#16341A] flex flex-col md:flex-row'>

        <div className='md:w-[70%] md:h-[100%] h-[50%] relative'>

        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14911.692718053744!2d-156.3118033!3d20.8751464!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7954cb488c434497%3A0xe7158f110dd6f440!2sAloha%20Botanicals%20Maui!5e0!3m2!1ses-419!2sbe!4v1708522209378!5m2!1ses-419!2sbe" className='h-full w-full' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          

        </div>


        <div className='md:w-[30%] md:h-[100%] h-[50%] flex flex-col justify-center pl-10 gap-2 text-white'>

          <h1 className='text-xl font-semibold tracking-wider'>CONTACT</h1>

          <p className='pt-2'>Aloha Botanicals Maui</p>

          <p>2612 Pololei Pl</p>

          <p>Haiku, HI 96708</p>

          <p>USA</p>

          <div className='flex-col lg:flex-row pt-4 gap-4'>

            <div className='flex gap-2'>

              <img className='w-[25px] h-[25px]' src="../src/assets/img/PHONE.png" alt="" />

              <p>+18085731130</p>

            </div>

            <div className='flex gap-2'>

              <img className='w-[25px] h-[25px]' src="../src/assets/img/MAIL.png" alt="" />

              <p>aloha@gmail.com</p>

            </div>

          </div>

          

        </div>

      </div>

      <div className='h-[20dvh] bg-[#1E1E1E] flex justify-center items-center'>
        <div className='flex gap-20'>
          <div className='bg-[#16341A] hover:bg-black rounded-full h-[50px] w-[50px] flex justify-center items-center'><img className='h-[30px]' src="../src/assets/img/Facebook.png" alt="" /></div>
          <div className='bg-[#16341A]  hover:bg-black rounded-full h-[50px] w-[50px] flex justify-center items-center'><img className='h-[30px]' src="../src/assets/img/Twitter.png" alt="" /></div>
          <div className='bg-[#16341A]  hover:bg-black rounded-full h-[50px] w-[50px] flex justify-center items-center'><img className='h-[30px]' src="../src/assets/img/Instagram.png" alt="" /></div>
        </div>
      </div>

      <div className='h-[20dvh] jungleImage bg-center bg-cover'></div>
    </div>
  )
}
