import React from 'react'
import data from "../assets/JSON/data.json"

export default function Basket(props) {
  return (
    <div className='w-[100%] h-[100%] bg-[white] flex justify-center items-center'>

      <div className='w-[90%] h-[100%] pt-4 pl-4 flex flex-col justify-start'>


          {props.plants.map((element, id) => {
              return (

                <div key={id} className={`${props.quantity[id] > 0 ? "flex" : "hidden"} w-[350px] h-[150px] md:w-[450px] md:h-[200px] lg:w-[550px] lg:h-[250px] justify-center items-center`}>

                  <div className='w-[50%] h-[100%]'>
                    <img className='w-[100%] h-[100%] object-cover rounded-lg shadow' src={element.img} alt="Shoes" />
                  </div>
  
                  <div className="flex justify-start w-[50%] h-[100%] bg-white pl-2 pr-2">
    
                      <div className='w-[50%] h-[100%] flex flex-col justify-end pl-2 pr-2'>
                        <h2 className="font-semibold tracking-widest text-[10px] md:text-[13px]">{element.category}</h2>
                        <h1 className="text-black text-[15px] tracking-widest md:text-lg">{element.name}</h1>
                        <h1 className='text-sm md:text-xl text-black font-semibold'>{element.price*props.quantity[id]}€</h1>
                        <div className='flex justify-start items-center gap-2 pt-2'>

                          <button onClick={()=> {props.reduceItem(id);props.setSum(props.sum - element.price);props.addStock(id)}} className='w-[10px] h-[10px] p-4 rounded-full flex justify-center items-center bg-[black] hover:bg-[#214E1Fff] text-white'>-</button>

                          <h1>{props.quantity[id]}</h1>

                          <button onClick={()=> {props.addItem(id); props.stock[id] > 0 ? props.setSum(props.sum + element.price) : "";props.reduceStock(id)}} className='w-[10px] h-[10px] p-4 rounded-full flex justify-center items-center bg-[black] hover:bg-[#214E1Fff] text-white'>+</button>
    
                        </div>
                      </div>
                  </div>

                </div>             
                )
              })
          } 

          <div>
            <h1>TOTAL: {props.sum}</h1>
          </div>
      
      </div>

      <div className='w-[10%] h-[100%] flex justify-end items-start pr-4 pt-4'>

        <p>X</p>

      </div>


    </div>
  )
}
