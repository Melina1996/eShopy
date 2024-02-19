import React from 'react'
import Card from './Card'
import data from "../assets/JSON/data.json"

export default function AllCards() {
  return (
    <div className='w-[80%] h-[100%] bg-white flex justify-center items-center flex-wrap gap-6'>
      {/* loope über meine Elemente des Arrays, um mir alle anzeigen zu lassen */}
      {data.map((element, id) => {
              return (
                <Card name={element.name} price={element.price} stock={element.stock} category={element.category} img={element.img}/>
              )
              })
          }     

      
    </div>
  )
}
