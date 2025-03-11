import { useContext, useState, useEffect } from 'react';
import CartContext from '../context/CartContext';
import { db } from '../config/firebase';
import { collection, addDoc } from 'firebase/firestore';

function CheckoutForm() {


    const { cart, clearCart } = useContext(CartContext);

    const [newOrder, setnewOrder] = useState({ name: '', lastName: '', email: '', confirmedEmail: false, total: 0, products: [], date: new Date() });

    const [orderID, setOrderID] = useState('');

    useEffect(() => {
        const totalP = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
        setnewOrder({ ...newOrder, total: totalP, products: cart });
    }, [])

    const ordersCollectionRef = collection(db, 'orders');

    //CREATE ORDER
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (newOrder.name !== '' && newOrder.lastName !== '' && newOrder.email !== '' && newOrder.confirmedEmail) {
            setnewOrder({ ...newOrder, date: new Date() });
            const response = await addDoc(ordersCollectionRef, newOrder);
            if (response.id) {
                setOrderID(response.id);
                clearCart();
            }
        }
    }

    const handleName = (e) => {
        setnewOrder({ ...newOrder, name: e.target.value });
    }
    const handleLastName = (e) => {
        setnewOrder({ ...newOrder, lastName: e.target.value });
    }
    const handleEmail = (e) => {
        setnewOrder({ ...newOrder, email: e.target.value });
    }
    const handleConfirmEmail = (e) => {
        const isConfirmed = e.target.value === newOrder.email;
        setnewOrder({ ...newOrder, confirmedEmail: isConfirmed });
    }

    return (
        <>
            {
                orderID === '' ?
                <div>
                    <div className="field">
                        <label className="label">Name</label>
                        <div className="control">
                            <input onChange={handleName} className="input" type="text" placeholder="Text input" />
                        </div>
                        {newOrder.name === '' && <p class="help is-danger">Please enter your name</p>}
                    </div>

                    <div className="field">
                        <label className="label">Last Name</label>
                        <div className="control">
                            <input onChange={handleLastName} className="input" type="text" placeholder="Text input" />
                        </div>
                        {newOrder.lastName === '' && <p class="help is-danger">Please enter your last name</p>}
                    </div>

                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control has-icons-left has-icons-right">
                            <input onChange={handleEmail} className="input" type="email" placeholder="Email input" />
                            <span className="icon is-small is-left">
                                <i className="fas fa-envelope"></i>
                            </span>
                        </div>
                        {newOrder.email === '' && <p class="help is-danger">Please enter your email</p>}
                    </div>

                    <div className="field">
                        <label className="label">Confirm Email</label>
                        <div className="control has-icons-left has-icons-right">
                            <input onChange={handleConfirmEmail} className="input" type="email" placeholder="Email input" />
                            <span className="icon is-small is-left">
                                <i className="fas fa-envelope"></i>
                            </span>
                        </div>
                        {!newOrder.confirmedEmail && <p class="help is-danger">Please confirm your email correctly</p>}
                    </div>
                    <div className="has-text-centered">
                        <button onClick={handleSubmit} className='button is-success'>Create Purchase Order</button>
                    </div>
                </div>
                
                :

                <article className="message is-success has-text-centered">
                    <div className="message-header">
                        <p>{`Order ID: ${orderID}`}</p>
                    </div>
                    <div className="message-body">{`Your order has been created successfully. Created at ${newOrder.date}`}</div>
                </article>
            }
        </>
    )
}
export default CheckoutForm;