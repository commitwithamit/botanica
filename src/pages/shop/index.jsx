import { useEffect, useMemo, useState } from "react";
import { SortBy, TitleBanner } from "../../components";
import ProductList from "./productsList";
import { useSelector } from "react-redux";

import ReactSlider from "react-slider";
import { sortingProducts } from "../../utils/customFunctions";
const MIN = 0;
const MAX = 1200;

export function Shop() {
    let [values, setValues] = useState([MIN, MAX]);
    let [filter, setFilter] = useState("Featured");
    let [filterModal, setFilterModal] = useState(false);

    const allProducts = useSelector((state) => state.products.data);
    
    let sortedProducts = useMemo(()=>{
        return sortingProducts(allProducts, filter);
    },[allProducts, filter]);

    useEffect(() => {
        if (filterModal) {
            document.body.classList.add("modal-active");
        } else {
            document.body.classList.remove("modal-active");
        }
    }, [filterModal]);
    return (
        <>
            <TitleBanner name="Shop" />

            <section className="shop-con site-width padding-tb">
                <div className={filterModal ? "filter-sidebar" : "filter-sidebar closed"}>
                    <span className="close-filter" onClick={() => setFilterModal(false)}></span>
                    <div>
                        <h6>Plant Types</h6>
                        <ul>
                            <li>
                                <label htmlFor="t1">Flowering Houseplants
                                    <input id="t1" name="plant-type" type="checkbox" />
                                </label>
                            </li>
                            <li>
                                <label htmlFor="t2">Succulents & Cacti
                                    <input id="t2" name="plant-type" type="checkbox" />
                                </label>
                            </li>
                            <li>
                                <label htmlFor="t3">Herbs & Culinary
                                    <input id="t3" name="plant-type" type="checkbox" />
                                </label>
                            </li>
                            <li>
                                <label htmlFor="t4">Bonsai & Miniature
                                    <input id="t4" name="plant-type" type="checkbox" />
                                </label>
                            </li>
                            <li>
                                <label htmlFor="t5">Foliage Plants
                                    <input id="t5" name="plant-type" type="checkbox" />
                                </label>
                            </li>
                            <li>
                                <label htmlFor="t6">Air Plants (Tillandsia)
                                    <input id="t6" name="plant-type" type="checkbox" />
                                </label>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h6>Price</h6>
                        <ReactSlider className={"slider"} onChange={setValues} value={values} min={MIN} max={MAX} minDistance={10} />
                        <p><b>Range :</b> <span className="rupee">₹</span>{values[0]} - <span className="rupee">₹</span>{values[1]}</p>
                    </div>
                </div>
                {
                    filterModal && (
                        <div className="bg-close"></div>
                    )
                }
                <div className="products-con">
                    <SortBy setFilterModal={setFilterModal} products={allProducts} filter={filter} setFilter={setFilter} />
                    <div className="product-listing">
                        <ProductList products={sortedProducts}/>
                    </div>
                </div>
            </section>
        </>
    )
}
