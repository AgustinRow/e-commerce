import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "./actions/productActions";

function Home(props) {
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
    return () => {
      //
    };
  }, []);

  return (
    <ul className="products">
      {products.map((product) => (
        <li key={product._id}>
          <div className="product">
            <img
              className="product-image"
              src={product.image}
              alt="product"
            ></img>
            <div className="product-name">
              <Link to={"product/" + product._id}>{product.name}</Link>
            </div>
            <div className="product-brand">{product.brand}</div>
            <div className="product-price">{product.price}</div>
            <div className="product-rating">
              {product.rating} Stars ({product.reviews})
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Home;
