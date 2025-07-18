// import { app } from "../firebaseConfig.js"; // import Firebase configuration
import { Outlet, useLocation } from "react-router-dom";

import Header from './layout/header';
import Footer from './layout/footer';
import './style.scss'
import { PageTop, FlowerLoader, Message } from './components';
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./store/slices/fetchProducts";
import { clearNotification } from "./store/slices/addToCart";
import { useEffect, useState } from "react";
import ErrorPage from "./pages/error";

function App() {
  const location = useLocation();
  const hideHeaderFooterFor = ['/back-123'];
  const isAuthPage = hideHeaderFooterFor.includes(location.pathname);

  let error = useSelector(state => state.products.isError);
  let errorMsg = useSelector(state => state.products.error);

  let notification = useSelector(state => state.cart.notification);

  // getting all the products from db
  const dispatch = useDispatch();
  const state = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  let [notify, setNotify] = useState("");

  useEffect(() => {
    if (notification !== null) {
      setNotify(notification.msg);
    }
    dispatch(clearNotification());
  }, [notification]);

  // console.log("object", notify);

  if (error && errorMsg != null) {
    return <ErrorPage />
  }
  return (
    <>
      {!isAuthPage && <Header />}
      <main>
        {state.isLoading ?
          <FlowerLoader /> :
          <>
            {/* PageTop - if you're in the middle of a page and you click a link and next page opens but the new page scrollposition is same as the previous one */}
            <PageTop />
            <Outlet />
            {notification !== null && <Message text={notify} />}
          </>
        }
      </main>
      {!isAuthPage && <Footer />
      }
    </>
  )
}
export default App;