import { useContext } from 'react';
import CartContext from '../context/CartContext';

function CartWidget() {

    const { cart } = useContext(CartContext);

    return (
        <div className="navbar-item">
            <button className="button is-success is-dark">
                <span className="icon-text">
                    <span className="icon is-large">
                        <i className="fas fa-cart-shopping"></i>
                    </span>
                    <span className="is-large">{cart.length}</span>
                </span>

            </button>
        </div>
    )
}

export default CartWidget;