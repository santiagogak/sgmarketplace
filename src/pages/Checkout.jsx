
import { useContext } from 'react';
import CartContext from '../context/CartContext';
import { Link } from 'react-router-dom';
import CheckoutForm from '../components/CheckoutForm';

function Checkout() {
    
    const { cart } = useContext(CartContext);

    return (
        <div className="container">
            <div className="notification m-auto">
                <h1 className="title has-text-centered">Checkout</h1>
                <Link to={cart.length > 0 ? "/cart" : "/"} className="delete"></Link>
                <CheckoutForm />
            </div>
        </div>
    )
}
export default Checkout;