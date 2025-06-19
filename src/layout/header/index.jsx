import logo from "../../assets/img/logo.png";
import carret from "../../assets/img/carret.svg";
import cart from "../../assets/img/cart.svg";
import search from "../../assets/img/search.svg";
import user from "../../assets/img/person.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Header() {
    const [trigger, setTrigger] = useState(false);
    const [openSearch, setOpenSearch] = useState(false);

    useEffect(()=>{
        if(openSearch === true){
            let search = document.querySelector(".search-box input");
            search.focus();
        }
    }, [openSearch])

    useEffect(()=>{
        const body = document.querySelector("body");
        if(trigger === true){
            body.style.overflow = "hidden";
        }else{
            body.style.overflow = "auto";
        }
    },[trigger]);

    const closeMenu = ()=>{
        setTrigger(false);
    }
    return (
        <header className="site-width">
            <nav>
                <div className="left-part">
                    <Link to="">
                        <img src={logo} alt="Botanica logo" />
                    </Link>
                </div>
                <div className="center-part">
                    <ul>
                        <li>
                            <Link to="">Home</Link>
                        </li>
                        <li className="drop-trigger">
                            <Link to="/collection">Plants Type <img src={carret} alt="carret" /></Link>
                            <div className="drop-con">
                                <ul className="dropdown">
                                    <li>
                                        <Link to="/collection/flowering-houseplants">Flowering Houseplants</Link>
                                    </li>
                                    <li>
                                        <Link to="/collection/succulents-and-cacti">Succulents & Cacti</Link>
                                    </li>
                                    <li>
                                        <Link to="/collection/herbs-and-culinary">Herbs & Culinary</Link>
                                    </li>
                                    <li>
                                        <Link to="/collection/bonsai-and-miniature">Bonsai & Miniature</Link>
                                    </li>
                                    <li>
                                        <Link to="/collection/foliage-plants">Foliage Plants</Link>
                                    </li>
                                    <li>
                                        <Link to="/collection/air-plants-tillandsia">Air Plants (Tillandsia)</Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <Link to="shop">Shop</Link>
                        </li>
                        <li>
                            <Link to="contact-us">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className="right-part">
                    <div className={openSearch ? "search-box open" : "search-box"}>
                        <div>
                            <input type="text" name="serach"/>
                        </div>
                        <button>
                            <img src={search} onClick={() => setOpenSearch(!openSearch)} alt="serach icon" />
                        </button>
                    </div>
                    <div>
                        <img src={user} alt="user profile" />
                    </div>
                    <div>
                        <Link to="cart" >
                            <img src={cart} alt="cart icon" className="cart-icon"/>
                        </Link>
                    </div>
                    <div className="mob-menu">
                        {/* hamburger icon */}
                        <span className={trigger ? "active menu-icon" : "menu-icon"} onClick={() => setTrigger(!trigger)}></span>
                        <div className={trigger ? "active sidebar" : "sidebar"}>
                            <div className="extra-top"></div>
                            <div className="main-bottom">
                                <div className="side-category">
                                    <h6>Plant Types</h6>
                                    <ul>
                                        <li>
                                            <Link onClick={closeMenu} to="/collection/flowering-houseplants">Flowering Houseplants</Link>
                                        </li>
                                        <li>
                                            <Link onClick={closeMenu} to="/collection/succulents-and-cacti">Succulents & Cacti</Link>
                                        </li>
                                        <li>
                                            <Link onClick={closeMenu} to="/collection/herbs-and-culinary">Herbs & Culinary</Link>
                                        </li>
                                        <li>
                                            <Link onClick={closeMenu} to="/collection/bonsai-and-miniature">Bonsai & Miniature</Link>
                                        </li>
                                        <li>
                                            <Link onClick={closeMenu} to="/collection/foliage-plants">Foliage Plants</Link>
                                        </li>
                                        <li>
                                            <Link onClick={closeMenu} to="/collection/air-plants-tillandsia">Air Plants (Tillandsia)</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="side-nav">
                                    <h6>Quick Links</h6>
                                    <ul>
                                        <li>
                                            <Link onClick={closeMenu} to="">Home</Link>
                                        </li>
                                        <li>
                                            <Link onClick={closeMenu} to="shop">Shop</Link>
                                        </li>
                                        <li>
                                            <Link onClick={closeMenu} to="about-us">About Us</Link>
                                        </li>
                                        <li>
                                            <Link onClick={closeMenu} to="contact-us">Contact Us</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="side-social">
                                    <Link onClick={closeMenu} to="https://www.facebook.com/" target="_blank">FB</Link>
                                    <Link onClick={closeMenu} to="https://x.com/" target="_blank">TW</Link>
                                    <Link onClick={closeMenu} to="https://www.instagram.com/" target="_blank">IN</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;