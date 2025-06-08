import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";

function Footer() {
    let year = new Date().getFullYear();
    return (
        <footer>
            <div className="site-width padding-tb">
                <div className="foot-con">
                    <div>
                        <Link>
                            <img src={logo} alt="botanica logo" />
                        </Link>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus unde sint quis ex fugiat quod eos autem odit dolores debitis?
                        </p>
                    </div>
                    <div>
                        <h6>Quick Links</h6>
                        <ul>
                            <li>
                                <Link to={"/"}>Our Story</Link>
                            </li>
                            <li>
                                <Link to={"/"}>Contact Us</Link>
                            </li>
                            <li>
                                <Link to={"/"}>Types of plants</Link>
                            </li>
                            <li>
                                <Link to={"/"}>Track order</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h6>Consumer Policy</h6>
                        <ul>
                            <li>
                                <Link to={"/"}>Cancellation policy</Link>
                            </li>
                            <li>
                                <Link to={"/"}>Return policy</Link>
                            </li>
                            <li>
                                <Link to={"/"}>Terms & conditions</Link>
                            </li>
                            <li>
                                <Link to={"/"}>Shipping policy</Link>
                            </li>
                            <li>
                                <Link to={"/"}>Privacy policy</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h6>For Every Update</h6>
                        <div className="newsletter">
                            <input type="email" name="subscriber" />
                            <button>Subscribe</button>
                        </div>
                        <div className="contact">
                            <Link to="tel:9998887776">+91-9998887776</Link>
                            <Link to="mailto:botanica@info.com">botanica@info.com</Link>
                            <div className="social">
                                <Link to="https://www.facebook.com/" target="_blank">FB</Link>
                                <Link to="https://x.com/" target="_blank">TW</Link>
                                <Link to="https://www.instagram.com/" target="_blank">IN</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copy-con" >
                    <em>Copyright © {year} <Link to={"/"}>Botanica</Link> | Developed by Amit</em>
                </div>
            </div>
        </footer>
    )
}

export default Footer;