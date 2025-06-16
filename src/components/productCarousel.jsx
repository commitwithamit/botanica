// image
import wishIcon from "../assets/img/wishicon.svg";
import { SmallBtn } from "./buttonsAndHeadings";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Navigation, Pagination } from 'swiper/modules';

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { discountCalculator, slugify } from "../utils/customFunctions";

import { Sp, Mrp } from "./rupee";

export function ProductsCarousel({ range }) {
    const products = useSelector((state) => state.products);
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
                                <Link to={`collection/${slugify(product.category)}/${slugify(product.name)}`} className="topseller-card">
                                    <img loading="lazy" src={product.imgPng} alt={product.name} />

                                    <div className="card-info">
                                        <h4>{product.name}</h4>
                                        <p className="text-ellipsis">
                                            {product.description}
                                        </p>
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
                                            <SmallBtn info={{ path:wishIcon, toolTip: true, msg: "Wishlist" }} style={{ marginLeft: "10px" }} />
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    );
}



















// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';


// // import required modules
// import { Navigation, Pagination } from 'swiper/modules';

// export default function TopSeller() {
//     return (
//         <>
//             <Swiper
//                 slidesPerView={3}
//                 navigation={true}
//                 pagination={{
//                     clickable: true,
//                 }}
//                 breakpoints={{
//                     992: {
//                         slidesPerView: 1,
//                     }
//                 }}
//                 modules={[Navigation, Pagination]}
//                 className="mySwiper"
//             >
//                 <SwiperSlide>
//                     <div className="topseller-card">
//                         <img src={plant} alt="" />
//                         <div className="card-info">
//                             <p>Trendy House Plant</p>
//                             <h6>Calathea Plant</h6>
//                             <div className="btn-con">
//                                 <MainBtn info={{ name: "Buy Now", path: "/" }} />
//                                 <CartBtn />
//                             </div>
//                         </div>
//                     </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <div className="topseller-card">
//                         <img src={plant} alt="" />
//                         <div className="card-info">
//                             <p>Trendy House Plant</p>
//                             <h6>Calathea Plant</h6>
//                             <div className="btn-con">
//                                 <MainBtn info={{ name: "Buy Now", path: "/" }} />
//                                 <CartBtn />
//                             </div>
//                         </div>
//                     </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <div className="topseller-card">
//                         <img src={plant} alt="" />
//                         <div className="card-info">
//                             <p>Trendy House Plant</p>
//                             <h6>Calathea Plant</h6>
//                             <div className="btn-con">
//                                 <MainBtn info={{ name: "Buy Now", path: "/" }} />
//                                 <CartBtn />
//                             </div>
//                         </div>
//                     </div>
//                 </SwiperSlide>
//             </Swiper>
//         </>
//     );
// }