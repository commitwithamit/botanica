import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import { Home, Shop, Cart, AboutUs, ContactUs, ProductDetail, PageNotFound, Collections } from "./pages";
import AddProducts from './utils/AddProducts.jsx';
import App from './App.jsx';
import store from './store/index.js';
import { Provider } from "react-redux";
import ReadData from './utils/ReadData.jsx';
import CollectionType from './pages/collections/CollectionType.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/collection/:collectionName/:plantSlug' element={<ProductDetail />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/back-123' element={<AddProducts />} />
        {/* category page */}
        <Route path='/collection' element={<Collections />} />
        {/* sub-category pages */}
        <Route path='/collection/:collectionName' element={<CollectionType/>} />
        <Route path='/read' element={<ReadData />} />
      </Route>
      <Route path='*' element={<PageNotFound />} /> {/* this is seprate because i don't want to show header/footer on 404 page */}
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
