import { useState } from "react";
import carret from "../assets/img/carret.svg";
import filter from "../assets/img/filter.svg";

export function SortBy({setToTrue}) {
    let [type, setType] = useState("Featured");
    return (
        <>
            <div className="options">
                <p>Showing 1 – 12 of 23 item(s)</p>
                <div>
                    {/* open filters on click of .filter-icon */}
                    <span className="filter-icon tooltip-con" onClick={()=>setToTrue(true)}>
                        <img src={filter} alt="filter icon" />
                        <div className="tooltip">
                            Filter
                        </div>
                    </span>
                    <div className="sorting">
                        <p>Sort by : <span>{type}</span></p>
                        <ul>
                            <li onClick={() => setType("Featured")}>Featured</li>
                            <li onClick={() => setType("Latest")}>Latest</li>
                            <li onClick={() => setType("Best Selling")}>Best Selling</li>
                            <li onClick={() => setType("Price, Low to High")}>Price, Low to High</li>
                            <li onClick={() => setType("Price, High to Low")}>Price, High to Low</li>
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