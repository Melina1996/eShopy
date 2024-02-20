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
    },
    {
      "name": "PLAVIA",
      "price": 20,
      "stock": 12,
      "category": "indoor",
      "img": "../src/assets/img/PLANT_THREE.jpg"
  },
  {
      "name": "SAVAGIA",
      "price": 30,
      "stock": 8,
      "category": "outdoor",
      "img": "../src/assets/img/PLANT_FOUR.jpg"
  },
  {
      "name": "SNAKIS",
      "price": 18,
      "stock": 5,
      "category": "indoor",
      "img": "../src/assets/img/PLANT_FIVE.jpg"
  },
  {
      "name": "LAURE",
      "price": 28,
      "stock": 8,
      "category": "indoor",
      "img": "../src/assets/img/PLANT_SIX.jpg"
  },
  {
      "name": "MARA",
      "price": 20,
      "stock": 20,
      "category": "indoor",
      "img": "../src/assets/img/PLANT_SEVEN.jpg"
  },
  {
      "name": "CIELA",
      "price": 12,
      "stock": 2,
      "category": "outdoor",
      "img": "../src/assets/img/PLANT_EIGHT.jpg"
  },
  {
      "name": "TIZIA",
      "price": 33,
      "stock": 13,
      "category": "indoor",
      "img": "../src/assets/img/PLANT_NINE.jpg"
  },
  {
      "name": "SUCCULENTA",
      "price": 12,
      "stock": 35,
      "category": "indoor",
      "img": "../src/assets/img/PLANT_TEN.jpg"
  },
  {
      "name": "CACTUS",
      "price": 5,
      "stock": 3,
      "category": "indoor",
      "img": "../src/assets/img/PLANT_ELEVEN.jpg"
  },
  {
      "name": "COLARE",
      "price": 20,
      "stock": 3,
      "category": "indoor",
      "img": "../src/assets/img/PLANT_TWELVE.jpg"
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
