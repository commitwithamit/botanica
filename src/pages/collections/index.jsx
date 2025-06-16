
import { TitleBanner } from "../../components";
import CategorySection from "../../components/category";

export function Collections() {

    return (
        <>
            <TitleBanner name="Collections" />
            <section className="site-width padding-tb">
                <CategorySection basepath={"./"} />
            </section>
        </>
    )
}
