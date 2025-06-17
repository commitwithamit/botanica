import { useSelector } from "react-redux";
import { TitleBanner } from "../../../components";
import { Link } from "react-router-dom";
import { sortingProducts, slugify } from "../../../utils/customFunctions";
import { Sp, Mrp } from "../../../components/rupee";
import { discountCalculator } from "../../../utils/customFunctions";
import { SmallBtn } from "../../../components";
import wishIcon from "../../../assets/img/wishIcon.svg";
import { SortBy } from "../../../components";
import { useMemo, useState } from "react";
import FlowerLoader from "../../../components/flowerLoader";

export function AirPlants() {
  let allProducts = useSelector(state => state.products.data);
  let loading = useSelector(state => state.products.isLoading);
  let [sortType, setSortType] = useState("Featured");

  let filterdProducts = useMemo(() => {
    return allProducts
      .filter(product => product.category === "Air Plants (Tillandsia)")
      .sort(sortingProducts(sortType));
  }, [allProducts, sortType]);

  if (loading) {
    return <FlowerLoader />
  }

  return (
    <>
      <TitleBanner name="Air Plants (Tillandsia)" />
      <section className="collection-con site-width padding-tb">
        <div className="col-1">
          <SortBy products={filterdProducts} sortType={sortType} setSortType={setSortType} />
        </div>
        <div className="col-2">
          {
            filterdProducts.map((product) => {
              return (
                <Link to={`${slugify(product.name)}`} key={product.id} className="topseller-card">
                  <img loading="lazy" src={product.imgPng} alt={product.name} />
                  <div className="card-info">
                    <h4>{product.name}</h4>
                    <p className="text-ellipsis">
                      {product.description}
                    </p>
                    <div className="btn-con">
                      <div className="double-price long-price">
                        <h5 className="price">
                          <Sp>{product.price}</Sp>
                        </h5>
                        <h5 className="mrp">
                          <Mrp>{product.mrp}</Mrp>
                        </h5>
                        <p className="discount">{`${discountCalculator(product.mrp, product.price)}% off`}</p>
                      </div>
                      <SmallBtn info={{ path: wishIcon, toolTip: true, msg: "Wishlist" }} style={{ marginLeft: "10px" }} />
                    </div>
                  </div>
                </Link>
              )
            })
          }
        </div>
      </section>
    </>
  )
}
