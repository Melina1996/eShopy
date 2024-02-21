import { useState } from 'react'
import AllCards from './components/AllCards'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollBtn from './components/ScrollBtn'


function App() {

  //BTN Basket

  const[statusBtn,setStatusBtn]=useState(false)

  //MONEY VARIABLE
  const[money,setMoney]= useState(100)

  //TOTAL SUM VARIABLE

  const[sum,setSum]=useState(0)

  //QUANTITIES: Quantities of my articles change. Create array with value for each of my articles in order to match this value via its index and the ID of my article

  let initialQuantities=[0,0,0,0,0,0,0,0,0,0,0,0]

  const[quantity,setQuantity] = useState(initialQuantities)


  ///STOCK: Same logic as above

  let initialStocks=[5,7,3,10,5,13,1,10,8,12,2,3]

  const[stock,setStock] = useState(initialStocks)

  //CHANGE STOCK: all the initial stocks are stored in an array which is stored in an useState. Loop through my items and match item's id with index of array 
  function reduceStock(index){

    const newStocks= stock.map((c,i)=>{

      if (i===index && c > 0){
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

      if (i===index && stock[i] > 0){
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

  //FUNCTION DELETE
  function deleteQuantity(index){

    const newQuantities= quantity.map((c,i)=>{
      
      if (i===index){
        c=0
        return c
      } else {
        return c
      }
    })

    setQuantity(newQuantities)

  }

  //FUNCTION STOCK

  function restorestock(index){

    const newStock= stock.map((c,i)=>{
      
      if (i===index){
        c+=quantity[index]
        return c
      } else {
        return c
      }
    })

    setStock(newStock)


  }

  //FUNCTION that is called when ADD artcile to basket: changes quantity and stock of my article
  function changeBasket(id){

    reduceStock(id)

    addItem(id)

  }




  return (
    <div className='font-kumbh relative'>

   

      <Header setStatusBtn={setStatusBtn} sum={sum} setSum={setSum} reduceItem={reduceItem} addItem={addItem} restorestock={restorestock} addStock={addStock} quantity={quantity} deleteQuantity={deleteQuantity} stock={stock} changeBasket={changeBasket} money={money} setMoney={setMoney} reduceStock={reduceStock}/>

      <AllCards sum={sum} setSum={setSum} quantity={quantity} stock={stock} changeBasket={changeBasket} money={money} setMoney={setMoney}/>

      <Footer />

      <ScrollBtn />

      
    </div>
  )
}

export default App
