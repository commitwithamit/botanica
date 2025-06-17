import { useEffect, useMemo, useState } from "react";
import { SortBy, TitleBanner } from "../../components";
import ProductList from "./productsList";
import { useSelector } from "react-redux";

import ReactSlider from "react-slider";
import { sortingProducts } from "../../utils/customFunctions";
import FlowerLoader from "../../components/flowerLoader";
import { PiPlantThin } from "react-icons/pi";


export function Shop() {
    const allProducts = useSelector((state) => state.products.data);
    let loading = useSelector((state) => state.products.isLoading);

    let minPrice = Math.min(...allProducts.map(obj => obj.price));
    let maxPrice = Math.max(...allProducts.map(obj => obj.price));

    let [range, setRange] = useState([minPrice, maxPrice]);
    let [sortType, setSortType] = useState("Featured");
    let [filterOpen, setFilterOpen] = useState(false);
    let [selectedCategory, setSelectedCategory] = useState([]);
    if (loading) {
        return <FlowerLoader />
    }

    // making array of categroy filtered/selected by the user
    function handleFilter(e) {
        let selectedFilter = e.target.value;

        setSelectedCategory(prev =>
            prev.includes(selectedFilter) ?
                prev.filter(val => val !== selectedFilter) : // remove category
                [...prev, selectedFilter]   // add category
        )
    }

    // comparing all products with array of categroy filtered/selected by the user and sorting then showing the filtered products
    let filteredAndSorted = useMemo(() => {
        return allProducts
            .filter(p => {
                if (selectedCategory.length === 0) return true; // all products
                return selectedCategory.includes(p.category)
            })
            .filter(p => p.price >= range[0] && p.price <= range[1])
            .sort(sortingProducts(sortType));
    }, [allProducts, sortType, selectedCategory, range]);

    useEffect(() => {
        if (filterOpen) {
            document.body.classList.add("modal-active");
        } else {
            document.body.classList.remove("modal-active");
        }
    }, [filterOpen]);

    return (
        <>
            <TitleBanner name="Shop" />

            <section className="shop-con site-width padding-tb">
                <div className={filterOpen ? "filter-sidebar" : "filter-sidebar closed"}>
                    <span className="close-filter" onClick={() => setFilterOpen(false)}></span>
                    <div>
                        <h6>Plant Types</h6>
                        <ul>
                            <li>
                                <label htmlFor="t1">Flowering Houseplants
                                    <input value="Flowering Houseplants" onChange={(e) => handleFilter(e)} id="t1" type="checkbox" />
                                </label>
                            </li>
                            <li>
                                <label htmlFor="t2">Succulents & Cacti
                                    <input value="Succulents & Cacti" onChange={(e) => handleFilter(e)} id="t2" type="checkbox" />
                                </label>
                            </li>
                            <li>
                                <label htmlFor="t3">Herbs & Culinary
                                    <input value="Herbs & Culinary" onChange={(e) => handleFilter(e)} id="t3" type="checkbox" />
                                </label>
                            </li>
                            <li>
                                <label htmlFor="t4">Bonsai & Miniature
                                    <input value="Bonsai & Miniature" onChange={(e) => handleFilter(e)} id="t4" type="checkbox" />
                                </label>
                            </li>
                            <li>
                                <label htmlFor="t5">Foliage Plants
                                    <input value="Foliage Plants" onChange={(e) => handleFilter(e)} id="t5" type="checkbox" />
                                </label>
                            </li>
                            <li>
                                <label htmlFor="t6">Air Plants (Tillandsia)
                                    <input value="Air Plants (Tillandsia)" onChange={(e) => handleFilter(e)} id="t6" type="checkbox" />
                                </label>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h6>Price</h6>
                        <ReactSlider className={"slider"} onChange={setRange} value={range} min={minPrice} max={maxPrice} minDistance={100} pearling />
                        <p><b>Range :</b> <span className="rupee">₹</span>{range[0]} - <span className="rupee">₹</span>{range[1]}</p>
                    </div>
                </div>
                {
                    filterOpen && (
                        <div className="bg-close"></div>
                    )
                }
                <div className="products-con">
                    <SortBy items={filteredAndSorted.length} sortType={sortType} setSortType={setSortType} setFilterOpen={setFilterOpen} />
                    <div className={filteredAndSorted.length===0?"product-listing empty-products":"product-listing"}>
                        {
                            filteredAndSorted.length === 0 ?
                                <p><PiPlantThin /> No plants found matching your filters.</p> :
                                <ProductList products={filteredAndSorted} />
                        }
                    </div>
                </div>
            </section>
        </>
    )
}
