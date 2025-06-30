
import { TitleBanner, CategorySection } from "../../components";

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
