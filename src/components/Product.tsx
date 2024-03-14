import { useEffect, useState } from "react";
import { BubbleType } from "../types/bubble-types";
import NavigationBar from "./NavigationBar";
import { useParams } from "react-router-dom";

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
      <>
        <NavigationBar />
        <h1>Product</h1>
        <div>Loading...</div>
      </>
    );
    
  }

  console.log(product);

  return (
    <>
      <NavigationBar />
      <div>
        <h1>Product</h1>
        <p>{product.name}</p>
      </div>
    </>
  );
}

export default Product;