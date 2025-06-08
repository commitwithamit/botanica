// image
import cartIcon from "../../assets/img/cart.svg";

import { MainBtn, SmallBtn } from "../../components";

// Import Swiper React components & styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import { useSelector } from "react-redux";
import { selectAllProducts } from "../../store/slices/productsSlice";

export default function BannerSlider() {
    const products = useSelector(selectAllProducts);
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
                    products.filter(value => value.type === "Trending").map((product, key) => (
                        <SwiperSlide key={key}>
                            <div className="banner-card" >
                                <img  loading="lazy" src={product.imgPng} alt={`${product.name} image`} />
                                <div className="card-info">
                                    <p>Trendy House Plant</p>
                                    <h6>{product.name}</h6>
                                    <div className="btn-con">
                                        <MainBtn info={{ name: "Buy Now", path: "/" }} />
                                        <SmallBtn info={{ path: cartIcon, toolTip: true, msg: "Add to cart" }} />
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