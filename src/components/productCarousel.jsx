// image
import cartIcon from "../assets/img/cart.svg";
import { SmallBtn } from "./buttonsAndHeadings";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Navigation, Pagination } from 'swiper/modules';

import { Link } from "react-router-dom";
import { discountCalculator, slugify } from "../utils/customFunctions";

import { Sp, Mrp } from "./rupee";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../store/slices/addToCart";

export function ProductsCarousel({ range }) {
    const products = useSelector((state) => state.products);
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
        <div className="top-seller">
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                    },
                    1200: {
                        slidesPerView: 3,
                    },
                }}
                modules={[Navigation, Pagination]}
                className="mySwiper"
            >
                {
                    products.data.filter(product => product.type === "Top Seller").slice(range[0], range[1]).map((product) => {
                        return (
                            <SwiperSlide key={product.id} id={product.id}>
                                <div className="topseller-card">
                                    <Link to={`/collection/${slugify(product.category)}/${slugify(product.name)}`}>
                                        <img loading="lazy" src={product.imgPng} alt={product.name} />
                                    </Link>

                                    <div className="card-info">
                                        <Link to={`/collection/${slugify(product.category)}/${slugify(product.name)}`}>
                                            <h4>{product.name}</h4>
                                            <p className="text-ellipsis">
                                                {product.description}
                                            </p>
                                        </Link>
                                        <div className="btn-con">
                                            <div className="double-price long-price">
                                                <h5 className="price">
                                                    <Sp>{product.price}</Sp>
                                                </h5>
                                                <h5 className="mrp">
                                                    <Mrp>{product.mrp}</Mrp>
                                                </h5>
                                                <p className="discount">{`${discountCalculator(product.mrp, product.price)}% off`}</p>
                                            </div>
                                            <SmallBtn info={{ path: cartIcon, toolTip: true, msg: "Add to cart" }} onClick={(e) => handleAddToCart(product)} style={{ marginLeft: "10px" }} />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    );
}