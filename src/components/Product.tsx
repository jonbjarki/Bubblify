import { useEffect, useState } from "react";
import { BubbleType } from "../types/bubble-types";
import NavigationBar from "./NavigationBar";
import { useParams } from "react-router-dom";
import "../styles/Product.css";

const Product = () => {
  const { productId } = useParams();

  const [product, setProduct] = useState<BubbleType>();

  useEffect(() => {
    fetch(`http://localhost:3500/api/bubbles/${productId}`)
      .then((res) => res.json() as Promise<BubbleType>)
      .then((data) => {
        setProduct(data);
      })
      .catch((err) => console.error(err));
  }, []);

  if (!product) {
    return (
      <></>
    );
    
  }

  console.log(product);

  const handleCklick = () => {
    var jsonString = JSON.stringify(product);
    localStorage.setItem(String(product.id), jsonString);
  }

  return (
    <>
      <NavigationBar />

      <div id="product-container">
        <div id="inner-product-container">
          <div id="product-img-container">
            <img src={product.image} alt="" />
          </div>
          <div id="detail-info-container">
            <p id="name">{product.name}</p>
            <p id="description">{product.description}</p>
            <div id="cart-container">
              <p id="price">${product.price}</p>
              <button onClick={() => handleCklick()}>Add to cart</button>
            </div>
          </div>
        </div>
      </div>
      </>
  );
}

export default Product;