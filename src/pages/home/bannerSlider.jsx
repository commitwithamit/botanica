// image
import cartIcon from "../../assets/img/cart.svg";

// Import Swiper React components & styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { addItem } from "../../store/slices/addToCart";
import { MainBtn, SmallBtn } from "../../components";
import { slugify } from "../../utils/customFunctions";

export default function BannerSlider() {
    const products = useSelector((state) => state.products);
    let dispatch = useDispatch();
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Navigation, Pagination]}
                className="mySwiper"
            >
                {
                    products.data.filter(value => value.type === "Trending").map((product) => (
                        <SwiperSlide key={product.id}>
                            <div className="banner-card" >
                                <Link to={`collection/${slugify(product.category)}/${slugify(product.name)}`}>
                                    <img loading="lazy" src={product.imgPng} alt={`${product.name} image`} />
                                </Link>
                                <div className="card-info">
                                    <Link to={`collection/${slugify(product.category)}/${slugify(product.name)}`}>
                                        <h6>{product.name}</h6>
                                    </Link>
                                    <p>Trendy House Plant</p>
                                    <div className="btn-con">
                                        <MainBtn info={{ name: "Buy Now", path: `collection/${slugify(product.category)}/${slugify(product.name)}` }} />
                                        <SmallBtn
                                            info={{ path: cartIcon, toolTip: true, msg: "Add to cart" }}
                                            onClick={() => dispatch(addItem({
                                                id: product.id,
                                                name: product.name,
                                                category: product.category,
                                                price: product.price,
                                                mrp: product.mrp,
                                                img: product.imgPng
                                            }))}
                                        />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    );
}















{/* <div className="banner-card">
    <img src={plant} alt="" />
    <div className="card-info">
        <p>Trendy House Plant</p>
        <h6>Calathea Plant</h6>
        <div className="btn-con">
            <MainBtn info={{ name: "Buy Now", path: "/" }} />
            <SmallBtn info={{path:cartIcon, toolTip:true, msg:"Add to cart"}} />
        </div>
    </div>
</div> */}