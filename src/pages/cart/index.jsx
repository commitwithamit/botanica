import { Link } from "react-router-dom";
import { BsX } from "react-icons/bs";
// import { PiPlantThin } from "react-icons/pi";
import { PiPottedPlantLight } from "react-icons/pi";

import { Counter, Sp, Mrp } from "../../components";
import { discountCalculator, slugify } from "../../utils/customFunctions";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, decQuantity, incQuantity } from "../../store/slices/addToCart";

export function Cart() {
    let cart = useSelector(state => state.cart);
    let dispatch = useDispatch();
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
                                <PiPottedPlantLight style={{ position: "relative", top: "2px" }} /> No plants here yet — let’s add a little green to your cart.
                            </h6> :
                            <div className="cart-item-con">
                                {
                                    cart.selectedItems.map(product => {
                                        return (
                                            <div className="cart-item" key={product.id}>
                                                <div>
                                                    <Link to={`/collection/${slugify(product.category)}/${slugify(product.name)}`}>
                                                        <img loading="lazy" src={product.img} alt="p1" />
                                                    </Link>
                                                </div>
                                                <div>
                                                    <div className="name">
                                                        <Link to={`/collection/${slugify(product.category)}/${slugify(product.name)}`}>{product.name}</Link>
                                                        <Link to={`/collection/${slugify(product.category)}`}>{product.category}</Link>
                                                    </div>

                                                    <Counter
                                                        dispatch={dispatch}
                                                        incQuantity={incQuantity}
                                                        decQuantity={decQuantity}
                                                        id={product.id}
                                                        quantity={product.quantity}
                                                    />

                                                    <div className="double-price">
                                                        <h5 className="price">
                                                            <Sp>{product.price * product.quantity}</Sp>
                                                        </h5>
                                                        <h6 className="mrp">
                                                            <Mrp>{product.mrp * product.quantity}</Mrp>
                                                        </h6>
                                                        <p className="discount">{`${discountCalculator(product.mrp, product.price)}% off`}</p>
                                                    </div>
                                                </div>
                                                <button onClick={() => dispatch(removeItem(product.id))}>
                                                    <BsX />
                                                </button>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                    }
                </div>
                <div className="col">
                    <h4>Price details</h4>
                    <div className="pricing-details">
                        <div>
                            <span>Price ({cart.totalItems} items)</span>
                            <span><Mrp>{cart.totalMrp}</Mrp></span>
                        </div>
                        <div>
                            <span>Discount</span>
                            <span className="discount">-<Sp>{cart.totalMrp - cart.totalSp}</Sp></span>
                        </div>
                        <div>
                            <span>Platform Fee</span>
                            <span>{cart.selectedItems.length > 0 ? <Sp>{cart.platformFee}</Sp> : <Sp>0</Sp>}</span>
                        </div>
                        <div>
                            <span>Delivery Charges</span>
                            <span>
                                {
                                    // empty cart show 0 charges
                                    cart.selectedItems.length === 0 ? <Mrp>0</Mrp> :
                                        <>
                                            {
                                                cart.deliverCharges > 0 ?
                                                    <span>
                                                        <Mrp>{cart.deliverCharges}</Mrp>
                                                    </span> :
                                                    <>
                                                        <span className="line-mrp">
                                                            <Mrp>{115}</Mrp>
                                                        </span>
                                                        &nbsp;
                                                        <span className="discount">Free</span>
                                                    </>
                                            }
                                        </>

                                }
                            </span>
                            <p>Free delivery on order above {<Sp>{2999}</Sp>}/-</p>
                        </div>
                        <div className="final-amt">
                            <span>Total amount</span>
                            <span>
                                {
                                    <Sp>{cart.totalSp + cart.platformFee + cart.deliverCharges}</Sp>
                                }
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

