import { useSelector } from "react-redux";
import { LoaderHome, ProductsCarousel, SectionHeading } from "../../components";
import { ProductError, productStatus } from "../../store/slices/productsSlice";

// img
import ReviewsSlider from "./reviews";
import CategorySection from "../../components/category";
import Banner from "./banner";


export function Home() {
    const loading = useSelector(productStatus);
    const error = useSelector(ProductError);

    if (loading === "loading" || loading === "failed") {
        if (error) {
            console.log(error);
            return;
        }
            return <LoaderHome />;
    }
    return (
        <>
            <section className="banner padding-tb">
                <Banner />
            </section>

            <section className="site-width padding-tb">
                <SectionHeading name="Our Top Selling" />
                <ProductsCarousel range={[0, 3]} />
                <ProductsCarousel range={[3, 6]} />
            </section>

            <section className="site-width padding-tb">
                <SectionHeading name="Shop By Category" />
                <CategorySection basepath={"collection/"}/>
            </section>

            <section className="site-width padding-tb">
                <SectionHeading name="Customer Reviews" />
                <ReviewsSlider />
            </section>
        </>
    );
}

