import { CartContextProvider } from './context/CartContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import ItemDetail from './pages/ItemDetail';
import ItemListContainer from './pages/ItemListContainer';
import Cart from './pages/Cart';
import Error from './pages/Error';
import Checkout from './pages/Checkout';

function App() {
    return (
        <CartContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<ItemListContainer />} />
                        <Route path="category/:category" element={<ItemListContainer />} />
                        <Route path="item/:productid" element={<ItemDetail />} />
                        <Route path="cart" element={<Cart />} />
                        <Route path="checkout" element={<Checkout />} />
                        <Route path="*" element={<Error />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </CartContextProvider>
    )
}

export default App;