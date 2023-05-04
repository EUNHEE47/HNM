/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/products/${item.id}`);
  };
  return (
    <div onClick={showDetail} className="product-card">
      <img src={item?.img} />
      <div className="premiumSelection">
        {item?.choice === true ? "Premium Selection" : ""}
      </div>
      <div>{item?.title}</div>
      <div>₩{item?.price}</div>
      <div className="newProduct">{item?.new === true ? "신제품" : ""}</div>
    </div>
  );
};

export default ProductCard;
