import React, { useContext } from 'react'
import MainContext from '../../../context/context'
import BasketItems from '../BasketItems/BasketItems'
const Basket = () => {
    const {data,basketItems}=useContext(MainContext)
  return (
    <div className=''>
    <table class="table table-hover table-dark">
    <thead>
      <tr>
        <th scope="col">id</th>
        <th scope="col">image</th>
        <th scope="col">name</th>
        <th scope="col">ingredients</th>
        <th scope="col">price</th>
        <th scope="col">delete</th>
      </tr>
    </thead>
    <tbody>
      {
          basketItems.map((item,index)=>{
              return(<BasketItems key={index}  item={item}/>)
          })
      }
    </tbody>
  </table>
    </div>
  )
}

export default Basket
