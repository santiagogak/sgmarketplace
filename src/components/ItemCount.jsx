import { useState, useContext, useEffect } from 'react';
import CartContext from '../context/CartContext';

function ItemCount({ item, id }) {

    const [itemCount, setItemCount] = useState(0);
    const { cart, addToCart } = useContext(CartContext);
    const initItemCount = 0;

    useEffect(() => {
        const cartItem = cart.find((cartItem) => cartItem.id === id);
        if (cartItem) {
            initItemCount = cartItem.quantity;
            setItemCount(cartItem.quantity);
        }
    }, []);

    const addItem = () => {
        if (itemCount < item.stock) {
            setItemCount(itemCount + 1);
        }
    }

    const subItem = () => {
        if (itemCount >= 1) {
            setItemCount(itemCount - 1);
        }
    }

    const handleCart = () => {
        const cartItemCount = cart.find((cartItem) => cartItem.id === id)?.quantity || 0;
        if (itemCount != cartItemCount) {
            addToCart({ ...item, quantity: itemCount, id: id });
        }
    }

    return (
        <div className="has-text-centered">
            <div className="card-footer columns is-centered mb-5">
                <button onClick={subItem} className="column is-one-fifth card-footer-item">-</button>
                <p className="column is-one-fifth card-footer-item">{itemCount}</p>
                <button onClick={addItem} className="column is-one-fifth card-footer-item">+</button>
            </div>
            <div className="columns is-centered mb-5">
                <button onClick={handleCart} className="button column is-half is-primary">Add to Cart</button>
            </div>
        </div>
    )
}

export default ItemCount;