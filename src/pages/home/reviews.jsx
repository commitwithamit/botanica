// images
import user from "../../assets/img/user-img.png";
import stars from "../../assets/img/stars.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';


// import required modules
import { Autoplay, FreeMode } from 'swiper/modules';

export default function ReviewsSlider() {
    return (
        <div className="reviews">
            <Swiper
                loop={true}
                slidesPerView={1}
                spaceBetween={30}
                autoplay={{
                    delay: 1,
                    disableOnInteraction: false
                }}
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                    },
                    1200:{
                        slidesPerView: 3,
                        spaceBetween:10
                    }
                  }}
                speed={6000}
                freeMode={true}
                modules={[Autoplay, FreeMode]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="review-card">
                        <div className="col">
                            <img  loading="lazy" src={user} alt="users avatar" className="review-user" />
                            <span>
                                <h6>John Wick</h6>
                                <span className="ratings">
                                    <img src={stars} alt="rating" />
                                </span>
                            </span>
                        </div>
                        <div className="col">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum vero delectus quasi? Molestias, nostrum nam.
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="review-card">
                        <div className="col">
                            <img  loading="lazy"src={user} alt="users avatar" className="review-user" />
                            <span>
                                <h6>Wade Willson</h6>
                                <span className="ratings">
                                    <img src={stars} alt="rating" />
                                </span>
                            </span>
                        </div>
                        <div className="col">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum vero delectus quasi? Molestias, nostrum nam.
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="review-card">
                        <div className="col">
                            <img loading="lazy" src={user} alt="users avatar" className="review-user" />
                            <span>
                                <h6>James Howlett</h6>
                                <span className="ratings">
                                    <img src={stars} alt="rating" />
                                </span>
                            </span>
                        </div>
                        <div className="col">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum vero delectus quasi? Molestias, nostrum nam.
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="review-card">
                        <div className="col">
                            <img loading="lazy" src={user} alt="users avatar" className="review-user" />
                            <span>
                                <h6>Billy Butcher</h6>
                                <span className="ratings">
                                    <img src={stars} alt="rating" />
                                </span>
                            </span>
                        </div>
                        <div className="col">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum vero delectus quasi? Molestias, nostrum nam.
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="review-card">
                        <div className="col">
                            <img loading="lazy" src={user} alt="users avatar" className="review-user" />
                            <span>
                                <h6>Yogita Rawat</h6>
                                <span className="ratings">
                                    <img src={stars} alt="rating" />
                                </span>
                            </span>
                        </div>
                        <div className="col">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum vero delectus quasi? Molestias, nostrum nam.
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
