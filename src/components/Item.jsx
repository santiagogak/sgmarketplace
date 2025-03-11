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

                <div className="content has-text-centered">
                    <p className="title is-4">${price}</p>
                </div>
                <div className="columns is-centered">
                    <Link to={`/item/${id}`} className="button column is-primary">Description</Link>
                </div>
            </div>
        </div>
    )
}
export default Item;