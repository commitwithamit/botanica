import { ProductsCarousel, SectionHeading, CategorySection } from "../../components";

// img
import ReviewsSlider from "./reviews";
import Banner from "./banner";


export function Home() {
    return (
        <>
            <section className="banner padding-tb" style={{paddingBottom:"0px"}}>
                <Banner />
            </section>

            <section className="site-width padding-tb">
                <SectionHeading name="Our Top Selling" />
                <ProductsCarousel range={[0, 3]} />
                <ProductsCarousel range={[3, 6]} />
            </section>

            <section className="site-width padding-tb bg-with-leaf">
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

