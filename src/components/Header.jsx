import React from 'react'
import BasketIcon from '../assets/img/BASKET_ICON.png'
import Basket from './Basket'

export default function Header(props) {
  return (
    <div className="h-[50dvh] w-screen jungleImage bg-center bg-cover">
      <div className='h-[10dvh] flex justify-end gap-5 items-center text-white pl-[20px] text-[25px] backdrop-blur-sm	'>
        <div className='hover:cursor-pointer hover:text-black hover:font-semibold  text-[15px] md:text-[18px] lg:text-[20px]'>HOME</div>
        <div className='hover:cursor-pointer hover:text-black hover:font-semibold text-[15px] md:text-[18px] lg:text-[20px]'>ABOUT</div>

        <div className="drawer drawer-end justify-end pr-4">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <label htmlFor="my-drawer-4" className="drawer-button btn bg-black hover:bg-[#808080] rounded-xl border-none pt-4  pb-4 btn-primary"><img className='w-[20px] h-[20px]' src="./src/assets/img/BASKET_ICON.png" alt="" /></label>
          </div> 
          <div className="drawer-side">
            <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu p-4 w-100 min-h-full bg-white text-base-content">
              <Basket sum={props.sum} setSum={props.setSum} reduceItem={props.reduceItem} addItem={props.addItem} restorestock={props.restorestock} addStock={props.addStock} quantity={props.quantity} deleteQuantity={props.deleteQuantity} stock={props.stock} changeBasket={props.changeBasket} money={props.money} setMoney={props.setMoney} reduceStock={props.reduceStock}/>
            </ul>
          </div>
        </div>      

      </div>
      <div className='my-title flex justify-center items-center h-[40dvh] lg:text-[80px] md:text-[40px] text-white text-[30px] font-semibold'>
        JOIN THE JUNGLE <span className='lg:text-[30px] md:text-[20px] md:mb-8 lg:mb-14 text-[15px] mb-6'>&#169;</span>
      </div>
    </div>
  )
}
