import React from 'react'

export default function Card(props) {

  return (
    <div>
        <div className="w-[300px] h-[350px] shadow">
          <div className='w-[100%] h-[70%]'>
            <img className='w-[100%] h-[100%] object-cover rounded-t-lg' src={props.img} alt="Shoes" />
            </div>

          <div className="flex justify-center w-[100%] h-[30%] bg-white pl-2 pr-2">

              <div className='w-[50%] h-[100%] flex flex-col justify-center'>
                <h2 className="font-semibold">{props.category.toUpperCase()}</h2>
                <h1 className="text-black text-lg">{props.name}</h1>
                <h1 className='text-xl text-black font-semibold'>{props.price}€</h1>
              </div>

            <div className="w-[50%] h-[100%] flex flex-col justify-end items-end pb-2 gap-2">
              <button className="btn w-[80px] bg-black text-white">ADD</button>
              <p className='text-sm'>STOCK: {props.stock}</p>
            </div>

          </div>


      </div>

    </div>
  )
}
