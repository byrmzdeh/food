import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './style.scss'
import { BasketContext } from '../../context/BasketContext'

const Detail = () => {
    const { id } = useParams()
    const [detail, setDetail] = useState([])
    const {addBasket} = useContext(BasketContext)


    fetch('http://localhost:3000/' +id)
    .then(res => res.json())
    .then((api) => setDetail(api))

    return (
        <div className='detail'>
            <h2>{detail.name}</h2>
            <p>{detail.desc}</p>
            <h3>$ {detail.price}</h3>
            <button  onClick={()=>addBasket(detail)}>Add to Cart</button>
        </div>
    )
}

export default Detail