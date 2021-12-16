import React, { createContext, useState } from "react";
import { toast } from 'react-toastify';
export const Shop = createContext();


export const ShopProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const notifyRepeatedItem = () => toast.error('¡Ya existe ese elemento en tu carrito!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored"
    });
    const notifySuccess = () => toast.success('¡Elemento agregado a tu carrito!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored"
    });
    const [repeatedItem, setRepeatedItem] = useState(false)

    const addItem = (item) => {

        if (cart.some((cart) => cart.name === item.name)) {
            setRepeatedItem(true);
            notifyRepeatedItem();
            console.log(repeatedItem);
        } else {
            setRepeatedItem(false);
            notifySuccess();
            setCart([...cart, item])
        }

    }

    const removeItem = (id) => {
        let itemRemoved = cart.filter(item => item.id !== id);
        setCart(itemRemoved);
    }

    const clearCart = () => {
        setCart([])
    }


    return (
        <Shop.Provider value={{
            cart,
            addItem,
            removeItem,
            clearCart
        }}>
            {children}
        </Shop.Provider>
    )
}