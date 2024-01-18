import React, { useContext } from 'react'
import { BasketContext } from '../../context/BasketContext'
import './style.scss'

const Basket = () => {
  const {basket, remove, increaseCount , decreaseCount} = useContext(BasketContext)
  return (
    <div className='basket'>
      <table border={1}>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Count</th>
          <th>Delete</th>

        </tr>
        {basket
          .map(item => (
            <tr>
              <td>{item.name}</td>
              <td>{item.desc}</td>
              <td>$ {item.price*item.count}</td>
              <td>
              <i class="fa-solid fa-caret-up" onClick={()=>increaseCount(item)}></i>
                <h2>{item.count}</h2>
                <i class="fa-solid fa-caret-down" onClick={()=>decreaseCount(item)}></i>
              </td>
              <td><button onClick={() => remove(item)}>X</button></td>
            </tr>

          ))}
      </table>
    </div>
  )
}

export default Basket