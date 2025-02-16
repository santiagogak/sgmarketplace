import { Link } from "react-router-dom";

function Item({ product }) {

    const { id, title, image, price } = product;
    
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-4by3">
                    <img
                        src={image}
                        alt={id}
                    />
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="title is-6 is-centered">{title}</p>
                    </div>
                </div>

                <div className="content">
                    <p className="title is-6 is-centered">${price}</p>
                </div>
            </div>
            <div className="card-footer">
                <Link to={`/category/${id}`} className="card-footer-item">Read Description</Link>
            </div>
        </div>
    )
}
export default Item;