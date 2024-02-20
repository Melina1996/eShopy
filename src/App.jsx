import { useState } from 'react'
import AllCards from './components/AllCards'
import Basket from './components/Basket'

function App() {


  //MONEY VARIABLE
  const[money,setMoney]= useState(100)

  //TOTAL SUM VARIABLE

  const[sum,setSum]=useState(0)

  //ALL MY ARTICLES: useState of array with objects that is passed to components. Only contains properties with whos values don't change

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
  // {
  //     "name": "SAVAGIA",
  //     "price": 30,
  //     "category": "outdoor",
  //     "img": "../src/assets/img/PLANT_FOUR.jpg"
  // },
  // {
  //     "name": "SNAKIS",
  //     "price": 18,
  //     "category": "indoor",
  //     "img": "../src/assets/img/PLANT_FIVE.jpg"
  // },
  // {
  //     "name": "LAURE",
  //     "price": 28,
  //     "category": "indoor",
  //     "img": "../src/assets/img/PLANT_SIX.jpg"
  // },
  // {
  //     "name": "MARA",
  //     "price": 20,
  //     "category": "indoor",
  //     "img": "../src/assets/img/PLANT_SEVEN.jpg"
  // },
  // {
  //     "name": "CIELA",
  //     "price": 12,
  //     "category": "outdoor",
  //     "img": "../src/assets/img/PLANT_EIGHT.jpg"
  // },
  // {
  //     "name": "TIZIA",
  //     "price": 33,
  //     "category": "indoor",
  //     "img": "../src/assets/img/PLANT_NINE.jpg"
  // },
  // {
  //     "name": "SUCCULENTA",
  //     "price": 12,
  //     "category": "indoor",
  //     "img": "../src/assets/img/PLANT_TEN.jpg"
  // },
  // {
  //     "name": "CACTUS",
  //     "price": 5,
  //     "category": "indoor",
  //     "img": "../src/assets/img/PLANT_ELEVEN.jpg"
  // },
  // {
  //     "name": "COLARE",
  //     "price": 20,
  //     "category": "indoor",
  //     "img": "../src/assets/img/PLANT_TWELVE.jpg"
  // }
  ])

  //QUANTITIES: Quantities of my articles change. Create array with value for each of my articles in order to match this value via its index and the ID of my article

  let initialQuantities=[0,0,0,0,0,0,0,0,0,0,0,0]

  const[quantity,setQuantity] = useState(initialQuantities)


  ///STOCK: Same logic as above

  let initialStocks=[5,7,3,10,5,13,1,10,8,12,2,3]

  const[stock,setStock] = useState(initialStocks)

  //CHANGE STOCK: all the initial stocks are stored in an array which is stored in an useState. Loop through my items and match item's id with index of array 
  function reduceStock(index){

    const newStocks= stock.map((c,i)=>{

      if (i===index && c >0){
        return c-1
      } else {
        return c
      }
    })

    setStock(newStocks)

  }

  //same logic as above just the other way round
  function addStock(index){

    const newStocks= stock.map((c,i)=>{

      if (i===index){
        return c+1
      } else {
        return c
      }
    })

    setStock(newStocks)

  }

  //CHANGE QUANTITIES:
  //same logic as above
  function addItem(index){

    const newQuantities= quantity.map((c,i)=>{

      if (i===index && stock[i] > 0 && money > 0){
        return c+1
      } else {
        return c
      }
    })

    setQuantity(newQuantities)

  }

  //same logic as above
  function reduceItem(index){

    const newQuantities= quantity.map((c,i)=>{
      
      if (i===index){
        return c-1
      } else {
        return c
      }
    })

    setQuantity(newQuantities)

  }


  //FUNCTION that is called when ADD artcile to basket: changes quantity and stock of my article
  function changeBasket(id){

    reduceStock(id)

    addItem(id)

  }



  return (
    <div className='w-screen h-max flex flex-col justify-center items-center bg-[white] font-kumbh'>

      <AllCards changeBasket={changeBasket} stock={stock} plants={plants}  sum={sum} setSum={setSum} />
      
      <Basket quantity={quantity} plants={plants} stock={stock} addStock={addStock} reduceStock={reduceStock} addItem={addItem} reduceItem={reduceItem} sum={sum} setSum={setSum} money={money} setMoney={setMoney}/>

    </div>
  )
}

export default App
