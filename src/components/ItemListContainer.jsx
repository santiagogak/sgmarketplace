import { useState, useEffect } from 'react';
import { getProducts } from '../asyncMock';
import ItemList from './ItemList';

function ItemListContainer({greeting}) {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div className="box m-auto">
      <h1 className="title has-text-centered">{greeting}</h1>
      <ItemList products={products} />
    </div>
  );
}
export default ItemListContainer;