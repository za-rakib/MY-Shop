/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { selectProducts } from "../redux/action/productAction";
import "./productDetail.css";

//main function
const ProductDetail = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  //all products
  const product = useSelector((state) => state.singleProduct);
  //console.log("product", product);
  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((error) => {
        console.log(error);
      });
    dispatch(selectProducts(response.data));
  };
  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail();
  }, [productId]);
  //data find

  //data destructuring
  const { category, description, image, price ,title } = product;
  //   console.log(" findProduct", findProduct);


  return (
    <>
      <Container className="mt-5">
        <div className="details">
          <div className="d-flex justify-content-center align-items-center ">
            <div>
              <img className="image" src={image} alt="pic"></img>
            </div>
            <div className="ms-5">
             <div className='title'>
             <h2>{title}</h2>
             </div>
              <div className="price">
                <p>$ {price}</p>
              </div>
              <div className="category mt-3">
                <h5 className="me-auto">{category}</h5>
              </div>
             <div className="description mt-3">
             <p>{description}</p>
             </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ProductDetail;
