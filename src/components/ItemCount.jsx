import { useState, useContext } from 'react';
import CartContext from '../context/CartContext';

function ItemCount({ item, id }) {

    const [ itemCount, setItemCount ] = useState(0);
    const { addToCart } = useContext(CartContext);

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
        addToCart({...item, quantity: itemCount, id: id});
    }

    return (
        <>
            <button onClick={subItem} className="card-footer-item">-</button>
            <p className="card-footer-item">{itemCount}</p>
            <button onClick={addItem} className="card-footer-item">+</button>
            <button onClick={handleCart} className="card-footer-item">Add to Cart</button>
        </>
    )
}

export default ItemCount;