import { useEffect, useState } from "react";
import InnerImageZoom from 'custom-react-inner-image-zoom';
import 'custom-react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';

import cart from "../../assets/img/cart.svg";
import wishIcon from "../../assets/img/wishicon.svg";

import { Counter, Tabs, ProductsCarousel, SectionHeading, MainIconBtn, SmallBtn } from "../../components";
import { Sp, Mrp } from "../../components/rupee";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { discountCalculator, titleCase } from "../../utils/customFunctions";
import FlowerLoader from "../../components/flowerLoader";

import { RxCaretRight } from "react-icons/rx";

export function ProductDetail() {
    const slug = useParams();
    const breadcrumb = location.pathname.split("/");

    const plantName = titleCase(slug.plantSlug);
    const allProducts = useSelector((state) => state.products.data);
    const loading = useSelector((state) => state.products.isLoading);
    if (loading && !allProducts.length) {
        return <FlowerLoader />
    }

    const [productDetail] = allProducts.filter((val) => val.name.replace("'", "") === plantName);

    const [mainImg, setMainImg] = useState(productDetail.imgUrl1);
    const [changeBtn, setChangeBtn] = useState(false);

    useEffect(() => {
        setMainImg(productDetail.imgUrl1);
    }, [productDetail]);

    const tabsData = [
        { label: "Description", content: "Plants are essential to life on Earth, providing oxygen, food, and habitat for countless organisms. They come in an astonishing variety of shapes, sizes, and colors, from towering trees to delicate flowers. Photosynthesis is their remarkable process of converting sunlight into energy, a vital function that sustains most life forms. Many plants have adapted to thrive in specific environments, such as cacti in deserts or ferns in rainforests. Besides their ecological importance, plants also offer medicinal properties, with numerous species used in traditional and modern medicine. Their beauty and diversity continue to inspire gardeners, botanists, and nature lovers around the world. Additionally, plants play a crucial role in combating climate change by absorbing carbon dioxide and releasing oxygen. Through their roots, they help prevent soil erosion and maintain the earth’s fertility. From providing raw materials for construction and textiles to enhancing mental well-being, the significance of plants in our daily lives cannot be overstated." },
        { label: "Reviews", content: "This is something different food, and habitat for countless organisms. They come in an astonishing variety of shapes, sizes, and colors, from towering trees to delicate flowers. Photosynthesis is their remarkable process of converting sunlight into energy, a vital function that sustains most life forms. Many plants have adapted to thrive in specific environments, such as cacti in deserts or ferns in rainforests. Besides their ecological importance, plants also offer medicinal properties, with numerous species used in traditional and modern medicine. Their beauty and diversity continue to inspire gardeners, botanists, and nature lovers around the world. Additionally, plants play a crucial role in combating climate change by absorbing carbon dioxide and releasing oxygen." },
    ]

    return (
        <>
            <section className="site-width padding-tb product-detail-con">
                <div className="col product-img-con">
                    <img loading="lazy" src={productDetail.imgUrl1} onClick={() => setMainImg(productDetail.imgUrl1)} alt="product image 1" className="sm-img" />
                    <img loading="lazy" src={productDetail.imgUrl2} onClick={() => setMainImg(productDetail.imgUrl2)} alt="product image 2" className="sm-img" />
                    <img loading="lazy" src={productDetail.imgUrl3} onClick={() => setMainImg(productDetail.imgUrl3)} alt="product image 3" className="sm-img" />

                    <InnerImageZoom
                        src={mainImg}
                        zoomSrc={mainImg}
                        zoomScale={2}
                        zoomType="hover"
                        hideHint={true}
                    />
                </div>
                <div className="col">
                    <div>
                        <div className="breadcrumb">
                            {
                                <>
                                    <Link to="/">Home</Link>
                                    <RxCaretRight />
                                    <Link to={`/${breadcrumb[1]}`}>{titleCase(breadcrumb[1])}</Link>
                                    <RxCaretRight />
                                    <Link to={`/collection/${breadcrumb[2]}`}>{titleCase(breadcrumb[2])}</Link>
                                    <RxCaretRight />
                                    <span>{titleCase(breadcrumb[3])}</span>
                                </>
                            }
                        </div>
                        <h2>{productDetail.name}</h2>
                        <div className="double-price long-price">
                            <h5 className="price">
                                <Sp>{productDetail.price}</Sp>
                            </h5>
                            <h5 className="mrp">
                                <Mrp>{productDetail.mrp}</Mrp>
                            </h5>
                            <p className="discount">{`${discountCalculator(productDetail.mrp, productDetail.price)}% off`}</p>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <p>
                            {productDetail.description}
                        </p>
                        <div className="product-btn-con">
                            <Counter />
                            <SmallBtn info={{ path: wishIcon, toolTip: true, msg: "Wishlist" }} />
                            <MainIconBtn info={changeBtn ? { name: "Go to cart", path: "cart" } : { name: "Add to cart", img: cart, setChangeBtn: setChangeBtn }} />
                        </div>
                    </div>
                </div>
            </section>

            <section className="site-width padding-tb hr-tb">
                <Tabs tabs={tabsData} />
            </section>

            <section className="site-width padding-tb">
                <SectionHeading name="Related Products" />
                <ProductsCarousel range={[0, 9]} />
            </section>
        </>
    )
}

