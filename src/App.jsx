import { useState } from 'react'
import AllCards from './components/AllCards'
import Basket from './components/Basket'

function App() {

  const myArticles = []

  const mySingleArticles = []

  const[plants,setPlants] = useState([
    {
        "name": "LATIA",
        "price": 15,
        "category": "indoor",
        "img": "../src/assets/img/PLANT_ONE.jpg",
    },
    {
        "name": "SUCCA",
        "price": 25,
        "category": "outdoor",
        "img": "../src/assets/img/PLANT_TWO.jpg",
    },
    {
      "name": "PLAVIA",
      "price": 20,
      "category": "indoor",
      "img": "../src/assets/img/PLANT_THREE.jpg"
  },
  {
      "name": "SAVAGIA",
      "price": 30,
      "category": "outdoor",
      "img": "../src/assets/img/PLANT_FOUR.jpg"
  },
  {
      "name": "SNAKIS",
      "price": 18,
      "category": "indoor",
      "img": "../src/assets/img/PLANT_FIVE.jpg"
  },
  {
      "name": "LAURE",
      "price": 28,
      "category": "indoor",
      "img": "../src/assets/img/PLANT_SIX.jpg"
  },
  {
      "name": "MARA",
      "price": 20,
      "category": "indoor",
      "img": "../src/assets/img/PLANT_SEVEN.jpg"
  },
  {
      "name": "CIELA",
      "price": 12,
      "category": "outdoor",
      "img": "../src/assets/img/PLANT_EIGHT.jpg"
  },
  {
      "name": "TIZIA",
      "price": 33,
      "category": "indoor",
      "img": "../src/assets/img/PLANT_NINE.jpg"
  },
  {
      "name": "SUCCULENTA",
      "price": 12,
      "category": "indoor",
      "img": "../src/assets/img/PLANT_TEN.jpg"
  },
  {
      "name": "CACTUS",
      "price": 5,
      "category": "indoor",
      "img": "../src/assets/img/PLANT_ELEVEN.jpg"
  },
  {
      "name": "COLARE",
      "price": 20,
      "category": "indoor",
      "img": "../src/assets/img/PLANT_TWELVE.jpg"
  }
  ])

  let initialQuantities=[0,0,0,0,0,0,0,0,0,0,0,0]

  let initialStocks=[5,7,3,10,5,13,1,10,8,12,2,3]

  const[quantity,setQuantity] = useState(initialQuantities)

  const[stock,setStock] = useState(initialStocks)

  function changeStock(index){

    const newStocks= stock.map((c,i)=>{
      if (i===index && c >0){
        return c-1
      } else {
        return c
      }
    })

    setStock(newStocks)

  }

  function changeQuantity(index){

    const newQuantities= quantity.map((c,i)=>{
      if (i===index){
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
    changeStock(id)
    changeQuantity(id)

    // console.log(mySingleArticles)
    // console.log(myArticles)
    // countItems(myArticles)
    // console.log(amount)
  }


  return (
    <div className='w-screen h-max flex flex-col justify-center items-center bg-[white]'>

      <AllCards changeBasket={changeBasket} stock={stock} plants={plants} mySingleArticles={mySingleArticles}/>
      
      <Basket quantity={quantity}/>

    </div>
  )
}

export default App
