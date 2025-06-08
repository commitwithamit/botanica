import { Counter } from "../../components";
import img from "../../assets/porducts/1.png";
import { Link } from "react-router-dom";

export function Cart() {
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
                    <div className="table-con">
                        <table>
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <img  loading="lazy" src={img} alt="p1" />
                                        <span>
                                            <h6>Calathea Plant</h6>
                                            <Link to="/">Foliage Plants</Link>
                                        </span>
                                    </td>
                                    <td>₹400</td>
                                    <td>
                                        <Counter />
                                    </td>
                                    <td>
                                        ₹400
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img  loading="lazy" src={img} alt="p1" />
                                        <span>
                                            <h6>Calathea Plant</h6>
                                            <Link to="/">Foliage Plants</Link>
                                        </span>
                                    </td>
                                    <td>₹400</td>
                                    <td>
                                        <Counter />
                                    </td>
                                    <td>
                                        ₹400
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="col">
                    <h4>Price details</h4>
                    <div className="pricing-details">
                        <div>
                            <span>Price (2 items)</span>
                            <span>₹400</span>
                        </div>
                        <div>
                            <span>Discount 10%</span>
                            <span style={{color:'lightgreen'}}>-₹10</span>
                        </div>
                        <div>
                            <span>Delivery Charges</span>
                            <span><span style={{textDecoration:'line-through'}}>₹55</span> ₹42</span>
                        </div>
                        <div>
                            <span>Total amount</span>
                            <span>₹400</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

