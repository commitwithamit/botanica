import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import { Home, Shop, Cart, AboutUs, ContactUs, ProductDetail, PageNotFound, Collections} from "./pages";
import AddProducts from './utils/AddProducts.jsx';
import App from './App.jsx';
import store from './store';
import { Provider } from "react-redux";
import ReadData from './utils/ReadData.jsx';
import CollectionType from './pages/collectionTypes/index.jsx';
import {AirPlants} from "./pages/collectionTypes/AirPlants";
import {BonsaiAndMiniature} from "./pages/collectionTypes/BonsaiMiniature";
import {FloweringHouseplants} from "./pages/collectionTypes/FloweringHouseplant";
import {FoliagePlants} from "./pages/collectionTypes/FoliagePlants";
import {HerbsAndCulinary} from "./pages/collectionTypes/HerbsCulinary";
import {SucculentsAndCacti} from "./pages/collectionTypes/SucculentsCactus";


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

        {/* category page show all collection/types */}
        <Route path='/collection' element={<Collections />} />

        {/* sub-category pages show all products from one collection */}
        <Route path='/collection' element={<CollectionType />}>
          <Route path='air-plants-tillandsia' element={<AirPlants/>} />
          <Route path='flowering-houseplants' element={<FloweringHouseplants/>} />
          <Route path='foliage-plants' element={<FoliagePlants/>} />
          <Route path='bonsai-and-miniature' element={<BonsaiAndMiniature/> } />
          <Route path='succulents-and-cacti' element={<SucculentsAndCacti/> } />
          <Route path='herbs-and-culinary' element={<HerbsAndCulinary/> } />
        </Route>

        <Route path='/read' element={<ReadData />} />
      </Route>
      <Route path='*' element={<PageNotFound />} /> {/* this is seprate because i don't want to show header/footer on 404 page */}
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  // </React.StrictMode>
)
