import { db } from '../config/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ItemCount from '../components/ItemCount';
import { Link } from 'react-router-dom';

function ItemDetail() {

    const { productid } = useParams();

    const [item, setItem] = useState([]);


    useEffect(() => {
        const productDocRef = doc(db, 'products', productid);
        getDoc(productDocRef).then((doc) => {
            const productData = { ...doc.data() };
            setItem(productData);
        });
    }, []);

    return (
        <div className="container is-max-tablet">

            <div className="box is-small">
                <div className="card">
                    <div className="card-image">
                        <figure className="image is-4by3">
                            <img
                                src={item.image}
                                alt={item.id}
                            />
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="media">
                            <div className="media-content">
                                <p className="title is-4">{item.title}</p>
                            </div>
                        </div>

                        <div className="content">
                            {item.description}
                            <br />
                            <p className="title is-4 has-text-centered">${item.price}</p>
                        </div>
                    </div>
                    <ItemCount item={item} id={productid} />
                    <div className="columns is-centered">
                        <Link to={`/`} className="button column is-half is-link mb-5">Back to Catalog</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ItemDetail;