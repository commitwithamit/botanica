import { useState } from "react";
import carret from "../assets/img/carret.svg";
import filterImg from "../assets/img/filter.svg";

export function SortBy({ items, sortType, setSortType, setFilterOpen }) {
    // let [sortType, setSortType] = useState("Featured"); uplift this state

    let [toggle, setToggle] = useState(false);
    return (
        <>
            <div className="options">
                <p>Showing {items} item(s)</p>
                <div>
                    {/* open filters on click of .filter-icon */}
                    <span className="filter-icon tooltip-con" onClick={() => setFilterOpen(true)}>
                        <img src={filterImg} alt="filter icon" />
                        <div className="tooltip">
                            Filter
                        </div>
                    </span>
                    <div className={toggle ? "sorting active" : "sorting"}
                        onClick={(e) => { e.stopPropagation(); setToggle(!toggle) }}
                    >
                        <p>Sort by : <span>{sortType}</span></p>
                        <ul>
                            <li onClick={() => setSortType("Latest")}>Latest</li>
                            <li onClick={() => setSortType("Price, Low to High")}>Price, Low to High</li>
                            <li onClick={() => setSortType("Price, High to Low")}>Price, High to Low</li>
                        </ul>
                        <img src={carret} alt="dropdown"/>
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