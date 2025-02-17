import { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';
import { getProducts, getProductsByCategory } from '../asyncMock';
import ItemList from '../components/ItemList';

function ItemListContainer({ greeting }) {

  const [products, setProducts] = useState([]);

  const { category } = useParams();

  useEffect(() => {

    const getProd = category ? getProductsByCategory(category) : getProducts();

    getProd.then((data) => {
        setProducts(data);
      });
  }, [category]);

  return (
    <div className="container">
      <div className="box m-auto">
        <h1 className="title has-text-centered">Welcome to the SG MarketPlace</h1>
        <ItemList products={products} />
      </div>
    </div>
  );
}
export default ItemListContainer;