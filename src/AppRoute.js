import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';

const ProductListing = lazy(() => import("./components/ProductListing"));
const ProductDetail = lazy(() => import("./components/ProductDetail"));


const AppRoute = () => {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<ProductListing />} />
            <Route path="/home" element={<ProductListing />} />
            <Route path="/productDetail/:productId" element={<ProductDetail />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default AppRoute;
