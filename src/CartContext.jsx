import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    let [cartCount, setCartCount] = useState(0);
    let [totalPrice, setTotalPrice] = useState(0);

    let addToCart = (price) => {
        setCartCount(pre => pre + 1);
        setTotalPrice(pre => pre + price);
    };

    let removeFromCart = (price) => {
        setCartCount(pre => (pre > 0 ? pre - 1 : 0));
        setTotalPrice(pre => (pre > price ? pre - price : 0));
    };

    return (
        <CartContext.Provider value={{ cartCount, totalPrice, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
