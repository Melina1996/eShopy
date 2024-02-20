import { useState } from 'react'
import AllCards from './components/AllCards'

function App() {

  const myArticles = []

  const mySingleArticles = []

  const[plants,setPlants] = useState([
    {
        "name": "LATIA",
        "price": 15,
        "stock": 10,
        "category": "indoor",
        "img": "../src/assets/img/PLANT_ONE.jpg",
    },
    {
        "name": "SUCCA",
        "price": 25,
        "stock": 8,
        "category": "outdoor",
        "img": "../src/assets/img/PLANT_TWO.jpg",
    }
  ])

  let initialQuantities=[0,0,0,0,0,0,0,0,0,0,0,0]

  const[quantity,setQuantity] = useState(initialQuantities)

  function checkExist(index){

    const newQuantities= quantity.map((c,i)=>{
      if (i===index){
        console.log("hi")
        return c+1
      } else {
        return c
      }
    })

    setQuantity(newQuantities)

    console.log(quantity)


  }


  function changeBasket(article,id){
    // myArticles.push(article)
    checkExist(id)

    // console.log(mySingleArticles)
    // console.log(myArticles)
    // countItems(myArticles)
    // console.log(amount)
  }


  return (
    <div className='w-screen h-max flex justify-center items-center bg-[white]'>

      <AllCards quantity={quantity} changeBasket={changeBasket} plants={plants} mySingleArticles={mySingleArticles}/>
      
    </div>
  )
}

export default App
