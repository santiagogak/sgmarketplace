import { createContext , useState } from 'react';

const CartContext = createContext();

function CartContextProvider ({children}) {

    const [ cart , setCart ] = useState([]);

    const addToCart = (item) => {
        const newCart = [...cart];
        const index = newCart.findIndex((i) => i.id === item.id);
        if (index === -1) {
            newCart.push(item);
        } else {
            if (item.quantity === 0) {
                newCart.splice(index, 1);
            } else {
                newCart[index].quantity = item.quantity;
            }
        }
        setCart(newCart);
    }

    const clearCart = () => {
        setCart([]);
    }

    return (
        <CartContext.Provider value={{cart, addToCart, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}

export { CartContextProvider };
export default CartContext;