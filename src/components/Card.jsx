import React from 'react'

export default function Card(props) {

  const imagePath = new URL(
    `../assets/img/${props.images}`,
    import.meta.url
  ).href;

  return (
    <div>
        <div className="w-[170px] h-[200px] md:w-[300px] md:h-[350px] lg:w-[270px] lg:h-[320px] xl:w-[300px] xl:h-[350px] shadow">
          <div className='w-[100%] h-[70%]'>

            <div className='w-[100%] h-[100%] image-container'>
              <img className='w-[100%] h-[100%] object-cover rounded-t-lg my-image' src={imagePath} alt="Shoes" />
            </div>

            </div>

          <div className="flex justify-center w-[100%] h-[30%] bg-white pl-2 pr-2">

              <div className='w-[50%] h-[100%] flex flex-col justify-center'>
                <h2 className="font-semibold tracking-widest text-[10px] md:text-[13px]">{props.element.category}</h2>
                <h1 className="text-black text-[15px] tracking-widest md:text-lg">{props.element.name}</h1>
                <h1 className='text-sm md:text-xl text-black font-semibold'>{props.element.price}€</h1>
              </div>

            <div className="w-[50%] h-[100%] flex flex-col justify-end items-end md:pb-2 pb-1 md:gap-2 gap-1">
              
              {/* call function to change quantity and stock with Card's ID */}
              <button onClick={()=> {props.changeBasket(props.id),props.setSum(props.sum + props.element.price),props.setMoney(props.money-props.element.price)}} className={`${(props.money >= props.element.price) ? "flex" : "hidden"} h-[30px] shadow rounded w-[40px] md:w-[80px] tracking-widest bg-black hover:bg-[#214E1Fff] text-white text-sm md:text-md justify-center items-center`}>ADD</button>

              {/* depending on amount of stock change color of text */}
              <p className={`md:text-[12px] text-[10px] ${props.stock[props.id] <= 1 ? "text-[#FF0000]" : "text-[#808080]"}`}>{`${props.stock[props.id]>0 ? `STOCK:${props.stock[props.id]}` : "OUT OF STOCK"}`}</p>

            </div>

          </div>


      </div>

    </div>
  )
}
