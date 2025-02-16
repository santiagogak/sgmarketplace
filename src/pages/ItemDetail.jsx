
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProductById } from '../asyncMock';
import { Link } from 'react-router-dom';

function ItemDetail() {

    const { productid } = useParams();

    const [item, setItem] = useState([]);

    useEffect(() => {
        getProductById(productid)
            .then((data) => {
                setItem(data);
            });
    }, []);

    return (
        <div className="container is-max-tablet">

        <div className="box m-auto is-small">
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
                        <p className="title is-4 has-text-right">${item.price}</p>
                    </div>
                </div>
                <div className="card-footer">
                    <Link to={`/category`} className="card-footer-item">Back to Catalog</Link>
                </div>
            </div>
        </div>
                            </div>
    );
}
export default ItemDetail;