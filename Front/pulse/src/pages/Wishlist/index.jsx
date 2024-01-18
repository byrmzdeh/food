import React, { useContext } from 'react'
import { WishlistContext } from '../../context/WishlistContext'
import { BasketContext } from '../../context/BasketContext'
import './style.scss'

const Wishlist = () => {
  const {addWishlist, checkWishlist, wishlist } = useContext(WishlistContext)

  const { addBasket } = useContext(BasketContext)
  return (
    <div className='wishlist'>
      {wishlist.map(item => (
        <div className="card">
           <i className={`${checkWishlist(item) ? 'fa-solid fa-heart' : 'fa-regular fa-heart'}`} onClick={()=>addWishlist(item)}></i>
          <h2>{item.name}</h2>
          <p>{item.desc}</p>
          <h2>$ {item.price}</h2>
          <button onClick={() => addBasket(item)}>Cart</button>
        </div>
      ))}

    </div>
  )
}

export default Wishlist