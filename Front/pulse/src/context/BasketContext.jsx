import { createContext, useState } from "react";
import LocalStorage from "../hook/LocalStorage";

export const BasketContext = createContext()

function BasketProvider({ children }) {
    const [basket, setBasket] = LocalStorage('basket',[])

    function addBasket(item) {
        const index = basket.findIndex((x) => x._id === item._id)
        if (index === -1) {
            return setBasket([...basket, { ...item, count: 1 }])
        }
        basket[index].count++
        setBasket([...basket])
    }

    function increaseCount(item) {
        const index = basket.findIndex((x) => x._id === item._id)
        basket[index].count++
        setBasket([...basket])
    }

    function decreaseCount(item) {
        const index = basket.findIndex((x) => x._id === item._id)
        if (basket[index].count > 1) {
            basket[index].count--
            setBasket([...basket])
        }
        setBasket([...basket])
    }

    function remove(item) {
        setBasket( basket.filter((x) => x._id !== item._id))
    }

    const data = {basket, remove , addBasket,increaseCount, decreaseCount}


    return (
        <BasketContext.Provider value={data}>
            {children}
        </BasketContext.Provider>
    )
}

export default BasketProvider