/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import {  useDispatch } from "react-redux";
import ProductComponents from "./ProductComponents";
import axios from "axios";
import { setProducts } from "../redux/action/productAction";

const ProductListing = () => {
//   const products = useSelector((state) => state.allProducts);

  const dispatch = useDispatch();
  const fetchProduct = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((error) => console.log(error));
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProduct();
  },[]);

  return (
    <div>
      <ProductComponents />
    </div>
  );
};

export default ProductListing;
