import React, { useEffect, useState } from 'react'

const LocalStorage = (key, initalVal='') => {
    const [value,setValue] = useState(localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)): initalVal)

    useEffect(()=>{
        localStorage.setItem(key, JSON.stringify(value))
    },[key, value])

  return [value,setValue]
}

export default LocalStorage