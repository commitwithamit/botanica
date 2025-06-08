import { useState } from "react";
import InnerImageZoom from 'custom-react-inner-image-zoom';
import 'custom-react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';

import cart from "../../assets/img/cart.svg";
import wishIcon from "../../assets/img/wishicon.svg";
import productImg1 from "../../assets/porducts/1.png";
import productImg2 from "../../assets/porducts/2.png";
import productImg3 from "../../assets/porducts/3.png";

import { Counter, Tabs, ProductsCarousel, SectionHeading, MainIconBtn, SmallBtn } from "../../components";
import { selectAllProducts } from "../../store/slices/productsSlice";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { titleCase } from "../../utils/customFunctions";

export function ProductDetail() {
    const slug = useParams();
    const plantName = titleCase(slug.plantSlug);

    const allProducts = useSelector(selectAllProducts);
    // console.log(allProducts);
    const productDetail = allProducts.filter((val, ind) => val.name === plantName);
    const [changeBtn, setChangeBtn] = useState(false);
    const [mainImg, setMainImg] = useState(ProductDetail.imgUrl1); 
    const tabsData = [
        { label: "Description", content: "Plants are essential to life on Earth, providing oxygen, food, and habitat for countless organisms. They come in an astonishing variety of shapes, sizes, and colors, from towering trees to delicate flowers. Photosynthesis is their remarkable process of converting sunlight into energy, a vital function that sustains most life forms. Many plants have adapted to thrive in specific environments, such as cacti in deserts or ferns in rainforests. Besides their ecological importance, plants also offer medicinal properties, with numerous species used in traditional and modern medicine. Their beauty and diversity continue to inspire gardeners, botanists, and nature lovers around the world. Additionally, plants play a crucial role in combating climate change by absorbing carbon dioxide and releasing oxygen. Through their roots, they help prevent soil erosion and maintain the earth’s fertility. From providing raw materials for construction and textiles to enhancing mental well-being, the significance of plants in our daily lives cannot be overstated." },
        { label: "Reviews", content: "This is something different food, and habitat for countless organisms. They come in an astonishing variety of shapes, sizes, and colors, from towering trees to delicate flowers. Photosynthesis is their remarkable process of converting sunlight into energy, a vital function that sustains most life forms. Many plants have adapted to thrive in specific environments, such as cacti in deserts or ferns in rainforests. Besides their ecological importance, plants also offer medicinal properties, with numerous species used in traditional and modern medicine. Their beauty and diversity continue to inspire gardeners, botanists, and nature lovers around the world. Additionally, plants play a crucial role in combating climate change by absorbing carbon dioxide and releasing oxygen." },
    ]
    // const prop = { width: 400, height: 250, zoomWidth: 500, img: "1.jpg" };
    // console.log(plantName);
    // console.log(productDetail);
    // console.log(productDetail.imgUrl1);
    return (
        <>
            <section className="site-width padding-tb product-detail-con">
                <div className="col product-img-con">
                    <div className="sml-img">
                        <img  loading="lazy" src={productDetail.imgUrl1} onClick={() => setMainImg(productDetail.imgUrl1)} alt="product image 1" />
                        <img  loading="lazy" src={productDetail.imgUrl2} onClick={() => setMainImg(productDetail.imgUrl2)} alt="product image 2" />
                        <img  loading="lazy" src={productDetail.imgUrl3} onClick={() => setMainImg(productDetail.imgUrl3)} alt="product image 3" />
                    </div>
                    <div className="big-img">
                        {/* <img src={productImg1} alt="product image" /> */}

                        <InnerImageZoom
                            src={mainImg}
                            zoomSrc={mainImg}
                            zoomScale={2}
                            zoomType="hover"
                            hideHint={true}
                        />
                    </div>
                </div>
                <div className="col">
                    <div>
                        <div className="breadcrumb">
                            {"Home > Shop > Air Plants > Aloe"}
                        </div>
                        <h2>Calathea Plant</h2>
                        <h5 className="price">₹499/-</h5>
                    </div>
                    <hr />
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam aliquid corrupti labore modi consequuntur quidem sequi. At, quo adipisci aut illum cumque aspernatur? Nisi perferendis error mollitia inventore fugiat voluptatibus!
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
                <ProductsCarousel range={[0, 9]}/>
            </section>
        </>
    )
}

