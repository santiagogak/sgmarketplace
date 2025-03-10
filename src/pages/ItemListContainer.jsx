import { db } from '../config/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../components/ItemList';

function ItemListContainer({ greeting }) {

  const [products, setProducts] = useState([]);

  const { category } = useParams();

  useEffect(() => {

    const productsCollectionRef = category ? query(collection(db, 'products'), where('category', '==', category)) : collection(db, 'products');

    getDocs(productsCollectionRef).then((data) => {
      const productsDocs = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      setProducts(productsDocs);
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