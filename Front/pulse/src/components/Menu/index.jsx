import React, { useContext, useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import './style.scss'
import { BasketContext } from '../../context/BasketContext';
import { WishlistContext } from '../../context/WishlistContext';


const Menu = () => {
  const [data, setData] = useState([])
  const { addBasket } = useContext(BasketContext)
  const { addWishlist, checkWishlist } = useContext(WishlistContext)
  const [sortBy, setSortBy] = useState('')

  useEffect(() => {
    fetch('http://localhost:3000/')
      .then(res => res.json())
      .then((api) => setData(api))
  }, [])

  function lower(data) {
    if (typeof data === 'string') {
      return data.toLowerCase()

    }
    return data

  }
  return (

    <div className='menu'>

      <i className="fa-solid fa-utensils"></i>
      <div className="our">
        <div className="left"></div>
        <h1>Our Menu</h1>
        <div className="right"></div>
      </div>

      <div className="buttons">
        <button onClick={()=>setSortBy({preporty:"name" , asc:true})}><i class="fa-solid fa-arrow-down-a-z"></i></button>
        <button  onClick={()=>setSortBy({preporty:"name" , asc:false})}><i class="fa-solid fa-arrow-down-z-a"></i></button>
        <button  onClick={()=>setSortBy({preporty:"price" , asc:true})}><i class="fa-solid fa-arrow-down-1-9"></i></button>
        <button  onClick={()=>setSortBy({preporty:"price" , asc:false})}><i class="fa-solid fa-arrow-up-9-1"></i></button>
        <button  onClick={()=>setSortBy(null)}><i class="fa-solid fa-filter"></i></button>
      </div>

      <div className="cards">
        {data
          .sort((a, b) => {
            if (!sortBy) {
              return

            } else if (sortBy.asc) {
              return (lower(a[sortBy.preporty]) > lower(b[sortBy.preporty])) ? 1 : ((lower(b[sortBy.preporty]) > lower(a[sortBy.preporty])) ? -1 : 0)
            }else if (sortBy.asc===false) {
              return (lower(a[sortBy.preporty]) < lower(b[sortBy.preporty])) ? 1 : ((lower(b[sortBy.preporty]) < lower(a[sortBy.preporty])) ? -1 : 0)
            }
          })
          .map(item => (

            <div key={item._id} className="card">
              <h2>{item.name}</h2>
              <p>{item.desc.slice(0, 16)}... <Link to={`/${item._id}`}>Learn More</Link></p>
              <div className="btn">
                <h3>$ {item.price}</h3>
                <i className={`${checkWishlist(item) ? 'fa-solid fa-heart' : 'fa-regular fa-heart'}`} onClick={() => addWishlist(item)}></i>
                <button onClick={() => addBasket(item)}>Cart</button>
              </div>
            </div>
          ))}
      </div>

    </div>
  )
}

export default Menu