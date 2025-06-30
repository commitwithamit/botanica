import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { sortingProducts, slugify, discountCalculator } from "../../../utils/customFunctions";
import { SmallBtn, SortBy, TitleBanner, Sp, Mrp, FlowerLoader } from "../../../components";
import { useMemo, useState } from "react";
import { addItem } from "../../../store/slices/addToCart";
import cartIcon from "../../../assets/img/cart.svg"

export function HerbsAndCulinary() {
  let allProducts = useSelector(state => state.products.data);
  let loading = useSelector(state => state.products.isLoading);
  let [sortType, setSortType] = useState("Latest");

  let filterdProducts = useMemo(() => {
    return allProducts
      .filter(product => product.category === "Herbs & Culinary")
      .sort(sortingProducts(sortType));
  }, [allProducts, sortType]);

  if (loading) {
    return <FlowerLoader />
  }
  const dispatch = useDispatch();
  function handleAddToCart(product) {
    dispatch(addItem({
      id: product.id,
      name: product.name,
      category: product.category,
      price: product.price,
      mrp: product.mrp,
      img: product.imgPng
    }));
  }
  return (
    <>
      <TitleBanner name="Herbs & Culinary" />
      <section className="collection-con site-width padding-tb">
        <div className="col-1">
          <SortBy items={filterdProducts.length} sortType={sortType} setSortType={setSortType} />
        </div>
        <div className="col-2">
          {
            filterdProducts.map((product) => {
              return (
                <div className="topseller-card" key={product.id}>
                  <Link to={`${slugify(product.name)}`}>
                    <img loading="lazy" src={product.imgPng} alt={product.name} />
                  </Link>
                  <div className="card-info">
                    <Link to={`${slugify(product.name)}`}>
                      <h4>{product.name}</h4>
                      <p className="text-ellipsis">
                        {product.description}
                      </p>
                    </Link>
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
                      <SmallBtn info={{ path: cartIcon, toolTip: true, msg: "Add to cart" }} onClick={(e) => handleAddToCart(product)} style={{ marginLeft: "10px" }} />
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </section>
    </>
  )
}
