import { useEffect, useState } from "react";
import { MainBtn, SectionHeading, SmallBtn } from "../../components";
import BannerSlider from "./bannerSlider";

// image
import play from "../../assets/img/play.svg";
import cartIcon from "../../assets/img/cart.svg";

// store
import { useSelector } from "react-redux";
import { discountCalculator } from "../../utils/customFunctions";
import { Sp, Mrp } from "../../components/rupee";
import { Link } from "react-router-dom";

import { slugify } from "../../utils/customFunctions";

function Banner() {
    const [active, setActive] = useState(false);

    const products = useSelector((state) => state.products);

    useEffect(() => {
        if (active) {
            document.body.classList.add("modal-active");
        } else {
            document.body.classList.remove("modal-active");
        }
    }, [active]);

    const handlePlayClick = () => {
        setActive(true);
    };

    const handleCloseClick = () => {
        setActive(false);
    };
    return (
        <>
            <div className="site-width row-con">
                <div className="col">
                    <h1>Breath Natural</h1>
                    <p>Explore our wide selection of vibrant, healthy plants delivered right to your door. Transform your space with lush greenery and enjoy the benefits of nature indoors, every day.</p>
                    <div className="btns-con">
                        <MainBtn info={{ name: "Explore", path: "/shop" }} />
                        <div className="play-con" onClick={handlePlayClick}>
                            <span className="play-btn">
                                <img src={play} alt="play video" />
                            </span>
                            View Demo...
                        </div>
                    </div>
                    {active && (
                        <div className="video-con active">
                            <div id="youtube-player-container">
                                <iframe
                                    id="youtube-player"
                                    width="560"
                                    height="315"
                                    src={`https://www.youtube.com/embed/uSOOO3KBKDY?enablejsapi=1`}
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <div className="bg-close" onClick={handleCloseClick}></div>
                            <div className="btn-close" onClick={handleCloseClick}>Close</div>
                        </div>
                    )}
                </div>
                <div className="col">
                    <BannerSlider />
                </div>
            </div>
            <div className="site-width padding-tb trendy">
                <SectionHeading name="Newly Launched" />
                {
                    products.data.filter(value => value.type === "New Launch").map((product) => {
                        return (
                            <div className="long-box" key={product.id}>
                                <div className="col">
                                    <Link to={`collection/${slugify(product.category)}/${slugify(product.name)}`}>
                                        <img loading="lazy" className="big-pro-img" src={product.imgPng} alt={`${product.name}`} />
                                    </Link>
                                </div>
                                <div className="col long-box-text">
                                    <Link to={`collection/${slugify(product.category)}/${slugify(product.name)}`}>
                                        <h6>{product.category}</h6>
                                        <h3>{product.name}</h3>
                                        <p>{product.description}</p>
                                    </Link>
                                    <div className="double-price long-price">
                                        <h5 className="price">
                                            <Sp>{product.price}</Sp>
                                        </h5>
                                        <h5 className="mrp">
                                            <Mrp>{product.mrp}</Mrp>
                                        </h5>
                                        <p className="discount">{`${discountCalculator(product.mrp, product.price)}% off`}</p>
                                    </div>
                                    <div className="btn-con">
                                        <MainBtn info={{ name: "Buy Now", path: "/" }} />
                                        <SmallBtn info={{ path: cartIcon, toolTip: true, msg: "Add to cart" }} />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
export default Banner;