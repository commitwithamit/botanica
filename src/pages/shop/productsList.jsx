// image
import cartIcon from "../../assets/img/cart.svg";
import wishIcon from "../../assets/img/wishicon.svg";
import viewIcon from "../../assets/img/eye.svg";

import { SmallBtn } from "../../components/";

import { useSelector } from "react-redux";
import { selectAllProducts } from "../../store/slices/productsSlice";
import { slugify } from "../../utils/customFunctions";

export default function ProductList() {
    const allProducts = useSelector(selectAllProducts);
    const str = "Foliage & Plants";
    console.log(str.replaceAll(/[^\w\s]/g,""));
    // console.log(allProducts);
    return (
        <>
            {
                allProducts.map((product, index) => {
                    return (
                        <div className="product-card" key={index}>
                            <img loading="lazy" src={product.imgPng} alt={product.name} />
                            <div className="card-info">
                                <h6>{product.name}</h6>
                                <p className="text-ellipsis">
                                    {product.description}
                                </p>
                                <div className="btn-con">
                                    <div className="double-price">
                                        <h4 className="price">{`₹${product.price}`}</h4>
                                        <h4 className="mrp">{`₹${product.mrp}`}</h4>
                                    </div>
                                    <div className="card-btns">
                                        <SmallBtn info={{ path: wishIcon, toolTip: true, msg: "Wishlist" }} />
                                        <SmallBtn info={{ path: cartIcon, toolTip: true, msg: "Add to cart" }} />
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