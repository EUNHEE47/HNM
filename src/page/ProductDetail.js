/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { Row, Col, Container, Dropdown, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { BsHandbag, BsHeart, BsHeartFill } from "react-icons/bs";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const [heart, setHeart] = useState(false);

  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/EUNHEE47/HNM/products/${id}`;
    let res = await fetch(url);
    let data = await res.json();
    // console.log(data);
    setProduct(data);
  };

  const likeToggle = () => {
    setHeart(!heart);
    // console.log(heart);
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <div>
      <Container className="detail-wrap">
        <Row>
          <Col className="detail-img">
            <img src={product?.img} />
          </Col>
          <Col>
            <div className="detail-content title">
              <p>{product?.title}</p>
              <p onClick={likeToggle} className="like-icon">
                {heart ? <BsHeartFill className="heart-icon" /> : <BsHeart />}
              </p>
            </div>
            <div className="detail-content">₩ {product?.price}</div>
            <div className="detail-content">
              {product?.choice === true ? "Premium Selection" : ""}
            </div>
            <Dropdown className="drop-down detail-content">
              <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                사이즈 선택
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {product?.size.length > 0 &&
                  product.size.map((item, index) => (
                    <Dropdown.Item href="#/action-1" key={index}>
                      {item}
                    </Dropdown.Item>
                  ))}
              </Dropdown.Menu>
            </Dropdown>
            <Button variant="dark" className="add-button">
              <BsHandbag />
              추가
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetail;
