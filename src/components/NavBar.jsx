import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import MarketPlaceIcon from "../assets/img/marketplace.webp";

function NavBar() {
    return (
        <nav className="navbar is-success is-transparent">
            <div className="navbar-brand">
                <Link to="/" className="navbar-item" href="#">
                    <img src={MarketPlaceIcon}/>
                    MARKETPLACE
                </Link>
            </div>

            <div id="navMenuColorsuccess" className="navbar-menu is-active">
                <div className="navbar-start">
                    <Link className="navbar-item" to="/"> Home </Link>
                    <Link className="navbar-item" to="category"> Store </Link>
                    <Link className="navbar-item" to="/"> Contact Us </Link>
                </div>

                <div className="navbar-end">
                    <CartWidget />
                </div>
            </div>
        </nav>
    )
}

export default NavBar;