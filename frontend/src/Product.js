import React from "react";
import data from "./data";
import { Link } from "react-router-dom";

function Product(props) {
  const product = data.products.find((x) => x._id == props.match.params.id);
  console.log(data.products);
  return (
    <div>
      <div className="back-to-result">
        <Link to="/">Back to result</Link>
      </div>
      <div className="details">
        <div className="details-image">
          <img src={product.image} alt="product"></img>
        </div>
        <div className="details-info">
          <ul>
            <li>
              <h4>{product.name}</h4>
            </li>
            <li>
              <div>
                {product.rating} Stars {product.reviews} Reviews
              </div>
            </li>
            <li>
              Price: $<b>{product.price}</b>
            </li>
            <li>
              Descripcion
              <div>{product.description}</div>
            </li>
          </ul>
        </div>
        <div className="details-action">
          <ul>
            <li>Price: {product.price}</li>
            <li>Status: {product.status}</li>
            <li>
              Quantity:{" "}
              <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </li>
            <li>
              <button className="button">Add to Cart</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Product;
