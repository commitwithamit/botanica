// import { app } from "../firebaseConfig.js"; // import Firebase configuration
import { Outlet, useLocation } from "react-router-dom";

import Header from './layout/header';
import Footer from './layout/footer';
import './style.scss'
import { PageTop } from './components';
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, selectAllProducts } from "./store/slices/productsSlice";
import { useEffect } from "react";

function App() {
  const location = useLocation();
  const hideHeaderFooterFor = ['/back-123'];

  // getting all the products from db
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  // console.log(products);

  return (
    <>
      {!hideHeaderFooterFor.includes(location.pathname) && <Header />}
      <main>
        <PageTop />
        <Outlet />
      </main>
      {!hideHeaderFooterFor.includes(location.pathname) && <Footer />}
    </>
  )
}


export default App;