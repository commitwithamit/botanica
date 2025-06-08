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

import { useSelector } from "react-redux";
import { selectAllProducts } from "../store/slices/productsSlice";
import { Link } from "react-router-dom";

export function ProductsCarousel({ range }) {
    const products = useSelector(selectAllProducts);
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
                    products.filter(product => product.type === "Top Seller").slice(range[0],range[1]).map((product, key) => {
                        return (
                            <SwiperSlide key={key}>
                                <Link to={'/'} className="topseller-card">
                                    <img loading="lazy" src={product.imgPng} alt={product.name} />
                                
                                    <div className="card-info">
                                        <h4>{product.name}</h4>
                                        <p className="text-ellipsis">
                                            {product.description}
                                        </p>
                                        <div className="btn-con">
                                            <div className="double-price">
                                                <h4 className="price">{`₹${product.price}`}</h4>
                                                <h4 className="mrp">{`₹${product.mrp}`}</h4>
                                            </div>
                                            <SmallBtn info={{ path: cartIcon, toolTip: true, msg: "Add to cart" }} />
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