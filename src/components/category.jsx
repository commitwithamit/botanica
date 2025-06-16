import { useSelector } from "react-redux";
import { LoaderCollection, MainIconBtn } from ".";

function CategorySection({basepath}) {
    const products = useSelector((state) => state.products);

    return (
        <>
            <div className="category-con">
                <div className="cat-box">
                    <div className="cat-text">
                        <div>
                            <h6>Herbs & Culinary</h6>
                            {
                                products.isLoading ? <LoaderCollection /> :
                                    <p>
                                        <em>
                                            {products.data.filter(items => items.category === "Herbs & Culinary").length} items
                                        </em>
                                    </p>
                            }
                        </div>
                        <div>
                            <MainIconBtn info={{ name: "View Products", path: `${basepath}herbs-and-culinary` }} />
                        </div>
                    </div>
                </div>
                <div className="cat-box">
                    <div className="cat-text">
                        <div>
                            <h6>Succulents & Cacti</h6>
                            {
                                products.isLoading ? <LoaderCollection /> :
                                    <p>
                                        <em>
                                            {products.data.filter(items => items.category === "Succulents & Cacti").length} items
                                        </em>
                                    </p>
                            }
                        </div>
                        <div>
                            <MainIconBtn info={{ name: "View Products", path: `${basepath}succulents-and-cacti` }} />
                        </div>
                    </div>
                </div>
                <div className="cat-box">
                    <div className="cat-text">
                        <div>
                            <h6>Bonsai & Miniature</h6>
                            {
                                products.isLoading ? <LoaderCollection /> :
                                    <p>
                                        <em>
                                            {products.data.filter(items => items.category === "Bonsai & Miniature").length} items
                                        </em>
                                    </p>
                            }
                        </div>
                        <div>
                            <MainIconBtn info={{ name: "View Products", path: `${basepath}bonsai-and-miniature` }} />
                        </div>
                    </div>
                </div>
                <div className="cat-box">
                    <div className="cat-text">
                        <div>
                            <h6>Foliage Plants</h6>
                            {
                                products.isLoading ? <LoaderCollection /> :
                                    <p>
                                        <em>
                                            {products.data.filter(items => items.category === "Foliage Plants").length} items
                                        </em>
                                    </p>
                            }
                        </div>
                        <div>
                            <MainIconBtn info={{ name: "View Products", path: `${basepath}foliage-plants` }} />
                        </div>
                    </div>
                </div>
                <div className="cat-box">
                    <div className="cat-text">
                        <div>
                            <h6>Flowering Houseplants</h6>
                            {
                                products.isLoading ? <LoaderCollection /> :
                                    <p>
                                        <em>
                                            {products.data.filter(items => items.category === "Flowering Houseplants").length} items
                                        </em>
                                    </p>
                            }
                        </div>
                        <div>
                            <MainIconBtn info={{ name: "View Products", path: `${basepath}flowering-houseplants` }} />
                        </div>
                    </div>
                </div>
                <div className="cat-box">
                    <div className="cat-text">
                        <div>
                            <h6>Air Plants (Tillandsia)</h6>
                            {
                                products.isLoading ? <LoaderCollection /> :
                                    <p>
                                        <em>
                                            {products.data.filter(items => items.category === "Air Plants (Tillandsia)").length} items
                                        </em>
                                    </p>
                            }
                        </div>
                        <div>
                            <MainIconBtn info={{ name: "View Products", path: `${basepath}air-plants-tillandsia` }} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CategorySection;