import React from 'react'
import Card from './Card'
import data from "../assets/JSON/data.json"

export default function AllCards(props) {
  return (
    <div className='w-[90%] lg:w-[90%] xl:w-[80%] h-[100%] bg-white flex justify-center items-center flex-wrap gap-6'>
      {/* loope über meine Elemente des Arrays, um mir alle anzeigen zu lassen */}
      {props.plants.map((element, id) => {
              return (
                <Card key={id} id={id} quantity={props.quantity} changeBasket={props.changeBasket} element={element}/>
              )
              })
          }     

    </div>


  )
}
