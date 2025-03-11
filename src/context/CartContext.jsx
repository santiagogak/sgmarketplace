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
            newCart[index].quantity += item.quantity;
        }
        setCart(newCart);
    }

    return (
        <CartContext.Provider value={{cart, addToCart}}>
            {children}
        </CartContext.Provider>
    )
}

export { CartContextProvider };
export default CartContext;