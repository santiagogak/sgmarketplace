function CartWidget() {
    const items = 5;

    return (
        <div className="navbar-item">
            <button className="button is-success is-dark">
                <span className="icon-text">
                    <span className="icon is-large">
                        <i className="fas fa-cart-shopping"></i>
                    </span>
                    <span className="is-large">{items}</span>
                </span>

            </button>
        </div>
    )
}

export default CartWidget;