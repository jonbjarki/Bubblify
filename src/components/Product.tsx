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

  return (
    <>
      <NavigationBar />
      <div id="product-container">
        <p>{product.name}</p>
      </div>
    </>
  );
}

export default Product;