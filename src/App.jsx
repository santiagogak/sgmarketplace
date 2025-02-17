import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import ItemDetail from './pages/ItemDetail';
import ItemListContainer from './pages/ItemListContainer';
import Error from './pages/Error';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<ItemListContainer />} />
                    <Route path="category/:category" element={<ItemListContainer />} />
                    <Route path="item/:productid" element={<ItemDetail />} />
                    <Route path="item/:productid" element={<ItemDetail />} />
                    <Route path="*" element={<Error />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;