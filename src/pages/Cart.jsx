import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../context/CartContext';

function Cart() {
    const { cart } = useContext(CartContext);

    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        setTotalPrice(cart.reduce((acc, item) => acc + (item.price * item.quantity), 0));
    }, [])

    return (
        <div className="container is-max-desktop">
            <div className="box has-text-centered m-auto">
                <h1 className="title">{cart.length > 0 ? 'Cart' : 'Empty Cart'}</h1>
                <h2 className="title">{`Total: $${totalPrice}USD`}</h2>
                {
                    cart.map((item) => (
                        <div key={item.id} className="columns p-6">
                            <div className="column is-one-quarter">
                                <figure className="image is-4by3">
                                    <img src={item.image} alt={item.title} />
                                </figure>
                            </div>
                            <div className="column is-two-quarters">
                                <p>{item.title}</p>
                                <p>Quantity: {item.quantity}</p>
                                <p>Price: ${item.price}</p>
                            </div>
                            <div className="column is-one-quarter">
                                <p>Total Item Price: ${item.price*item.quantity}</p>
                            </div>
                        </div>
                    ))
                }
                {
                    cart.length > 0 && (
                        <Link to={'/checkout'} className="button is-large is-success">
                            <button>Checkout</button>
                        </Link>
                    )
                }
            </div>
        </div>
    )
}
export default Cart;