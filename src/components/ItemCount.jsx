import { useState } from 'react';

function ItemCount({stock}) {

    const [itemCount, setItemCount] = useState(0);

    const addItem = () => {
        if (itemCount < stock) {
            setItemCount(itemCount + 1);
        }
    }

    const subItem = () => {
        if (itemCount >= 1) {
            setItemCount(itemCount - 1);
        }
    }

    return (
        <>
            <button onClick={subItem} className="card-footer-item">-</button>
            <p className="card-footer-item">{itemCount}</p>
            <button onClick={addItem} className="card-footer-item">+</button>
            <button className="card-footer-item">Add to Cart</button>
        </>
    )
}

export default ItemCount;