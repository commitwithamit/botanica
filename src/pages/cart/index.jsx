import img from "../../assets/porducts/1.png";

import { Link } from "react-router-dom";
import { BsX } from "react-icons/bs";
import { PiPlantThin } from "react-icons/pi";

import { Counter, Sp, Mrp } from "../../components";
import { discountCalculator } from "../../utils/customFunctions";
import { useSelector } from "react-redux";

export function Cart() {
    let cart = useSelector(state => state.cart);
    return (
        <>
            <div className="other-header">
                <div className="content">
                    <h2>Cart</h2>
                </div>
            </div>
            <section className="cart-con site-width padding-tb">
                <div className="col">
                    <h4>Items in cart</h4>
                    {
                        cart.selectedItems.length === 0 ?
                            <h6 style={{ marginTop: "5rem" }}>
                                <PiPlantThin style={{position:"relative",top:"2px"}}/> No plants here yet — let’s add a little green to your space.
                            </h6> :
                            <div className="cart-item-con">
                                <div className="cart-item">
                                    <div>
                                        <Link to="/">
                                            <img loading="lazy" src={img} alt="p1" />
                                        </Link>
                                    </div>
                                    <div>
                                        <div className="name">
                                            <Link to="/">Prickly Pear Cactus</Link>
                                            <Link to="/">Flowering Houseplants</Link>
                                        </div>
                                        <Counter />
                                        <div className="double-price">
                                            <h5 className="price">
                                                <Sp>{400}</Sp>
                                            </h5>
                                            <h6 className="mrp">
                                                <Mrp>{899}</Mrp>
                                            </h6>
                                            <p className="discount">{`${discountCalculator(899, 400)}% off`}</p>
                                        </div>
                                    </div>
                                    <button>
                                        <BsX />
                                    </button>
                                </div>
                            </div>
                    }
                </div>
                <div className="col">
                    <h4>Price details</h4>
                    <div className="pricing-details">
                        <div>
                            <span>Price (0 items)</span>
                            <span>₹0</span>
                        </div>
                        <div>
                            <span>Discount</span>
                            <span style={{ color: 'lightgreen' }}>-₹0</span>
                        </div>
                        <div>
                            <span>Platform Fee</span>
                            <span>₹0</span>
                        </div>
                        <div>
                            <span>Delivery Charges</span>
                            <span><span style={{ textDecoration: 'line-through' }}>₹55</span> <span style={{ color: 'lightgreen' }}>Free</span></span>
                        </div>
                        <div className="final-amt">
                            <span>Total amount</span>
                            <span>₹0</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

