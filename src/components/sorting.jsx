import carret from "../assets/img/carret.svg";
import filterImg from "../assets/img/filter.svg";

export function SortBy({setFilterModal, products, filter, setFilter}) {
    // let [filter, setFilter] = useState("Featured"); uplift this state

    return (
        <>
            <div className="options">
                <p>Showing {products.length} item(s)</p>
                <div>
                    {/* open filters on click of .filter-icon */}
                    <span className="filter-icon tooltip-con" onClick={()=>setFilterModal(true)}>
                        <img src={filterImg} alt="filter icon" />
                        <div className="tooltip">
                            Filter
                        </div>
                    </span>
                    <div className="sorting">
                        <p>Sort by : <span>{filter}</span></p>
                        <ul>
                            <li onClick={() => setFilter("Featured")}>Featured</li>
                            <li onClick={() => setFilter("Latest")}>Latest</li>
                            <li onClick={() => setFilter("Best Selling")}>Best Selling</li>
                            <li onClick={() => setFilter("Price, Low to High")}>Price, Low to High</li>
                            <li onClick={() => setFilter("Price, High to Low")}>Price, High to Low</li>
                        </ul>
                        <img src={carret} alt="dropdown" />
                    </div>
                </div>
            </div>
        </>
    )
}

{/* <select>
    <option value="">Sort By</option>
    <option value="recommended">Recommended</option>
    <option value="new">What's New</option>
    <option value="priceLH">Price: Low to High</option>
    <option value="priceHL">Price: High to Low</option>
</select> */}