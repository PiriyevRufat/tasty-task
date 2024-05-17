import React, { useContext } from 'react'
const BasketItems = () => {
  return (
    <React.Fragment>
    <tr>
    <th scope='row'>{items.id}</th>
    <td>{item.ingredients}</td>
    <td>{}</td>
    <td>{}</td>
    <td><button className='btn btn-primary'></button></td>
    <td>0</td>
    <td><button className='btn btn-danger'></button></td>
    </tr>
    </React.Fragment>
  )
}

export default BasketItems
