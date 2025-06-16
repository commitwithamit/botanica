// import { app } from "../firebaseConfig.js"; // import Firebase configuration
import { Outlet, useLocation } from "react-router-dom";

import Header from './layout/header';
import Footer from './layout/footer';
import './style.scss'
import { PageTop } from './components';
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./store/slices/productsSlice";
import { useEffect } from "react";
import FlowerLoader from "./components/flowerLoader";
import ErrorPage from "./pages/error";

function App() {
  const location = useLocation();
  const hideHeaderFooterFor = ['/back-123'];
  const isAuthPage = hideHeaderFooterFor.includes(location.pathname);

  let error = useSelector(state=>state.products.isError);
  let errorMsg = useSelector(state=>state.products.error);

  
  // getting all the products from db
  const dispatch = useDispatch();
  const state = useSelector((state) => state.products);
  
  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch]);
  
  if(error && errorMsg != null){
    return <ErrorPage/>
  }
  return (
    <>
      {!isAuthPage && <Header />}
      {state.isLoading ?
        <main style={{ display: "flex", justifyContent: "center" }}>
          <FlowerLoader />
        </main> :
        <main>
          <PageTop />
          <Outlet />
        </main>
      }
      {!isAuthPage && <Footer />
      }
    </>
  )
}
export default App;