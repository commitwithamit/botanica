// image
import cartIcon from "../../assets/img/cart.svg";
import wishIcon from "../../assets/img/wishicon.svg";
import viewIcon from "../../assets/img/eye.svg";

import { discountCalculator, slugify } from "../../utils/customFunctions";
import { Mrp, Sp, SmallBtn } from "../../components";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/slices/addToCart";

export default function ProductList({ products }) {
    const dispatch = useDispatch();
    function handleAddToCart(product) {
        dispatch(addItem({
            id: product.id,
            name: product.name,
            category: product.category,
            price: product.price,
            mrp: product.mrp,
            img: product.imgPng
        }));
    }

    return (
        <>
            {
                products.map((product) => {
                    return (
                        <div className="product-card" key={product.id}>
                            <img loading="lazy" src={product.imgPng} alt={product.name} />
                            <div className="card-info">
                                <h6>{product.name}</h6>
                                <p className="text-ellipsis">
                                    {product.description}
                                </p>
                                <div className="btn-con">
                                    <div className="double-price">
                                        <h5 className="price">
                                            <Sp>{product.price}</Sp>
                                        </h5>
                                        <h6 className="mrp">
                                            <Mrp>{product.mrp}</Mrp>
                                        </h6>
                                        <p className="discount">{`${discountCalculator(product.mrp, product.price)}% off`}</p>
                                    </div>
                                    <div className="card-btns">
                                        <SmallBtn info={{ path: wishIcon, toolTip: true, msg: "Wishlist" }} />
                                        <SmallBtn info={{ path: cartIcon, toolTip: true, msg: "Add to cart" }} onClick={() => handleAddToCart(product)} />
                                        <SmallBtn info={{ path: viewIcon, toolTip: true, msg: "Quick View", link: `/collection/${slugify(product.category)}/${slugify(product.name)}` }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    );
}