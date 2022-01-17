import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./ProductComponents.css";

const ProductComponents = () => {
    
  const products = useSelector((state) => state.allProducts.product);
  //console.log("products", products);
  //single product
  const allProducts = products.map((product) => {
    const { id, title, image } = product;
    return (
      <Col key={id} lg={3} className="mt-5">
        <Link to={`/productDetail/${id}`}>
          <Card className="card">
            <Card.Img className="image" variant="top" src={image} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
            </Card.Body>
          </Card>
        </Link>
      </Col>
    );
  });

  return (
    <>
      {Object.keys(products).length === 0 ? (
        <div style={{ color: "black" }}>...Loading</div>
      ) : (
        <Container>
          <Row className="py-5">{allProducts}</Row>
        </Container>
      )}
    </>
  );
};

export default ProductComponents;
