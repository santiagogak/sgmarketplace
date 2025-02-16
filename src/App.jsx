import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Catalogo from './pages/Catalogo';
import ItemDetail from './pages/ItemDetail';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Catalogo />} />
                    <Route path="category" element={<Catalogo />} />
                    <Route path="category/:productid" element={<ItemDetail />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;