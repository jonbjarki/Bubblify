import { useEffect, useState } from "react";
import { BubbleType } from "../types/bubble-types";
import NavigationBar from "./NavigationBar";
import { Link, useParams } from "react-router-dom";
import "../styles/Product.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState<BubbleType>();
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3500/api/bubbles/${productId}`)
      .then((res) => res.json() as Promise<BubbleType>)
      .then((data) => {
        setProduct(data);
      })
      .catch((err) => console.error(err));
  }, [productId]);

  if (!product) {
    return <></>;
  }

  console.log(product);

  const notifyAddToCart = () => {
    toast(`Success! ${product.name} added to cart.`);
  }

  const handleClick = () => {
    try {
      const cart = localStorage.getItem("cart");
      let cartArray = cart ? JSON.parse(cart) : [];
      cartArray.push(product);
      localStorage.setItem("cart", JSON.stringify(cartArray));
      setAddedToCart(true);
      notifyAddToCart();
    } catch (error) {
      console.error(`Error adding ${product} to local storage:`, error);
    }
  };

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
              <button onClick={() => handleClick()}>Add to Cart</button>
            </div>
            <div id="checkout-btn-container">
              {addedToCart ? (
              <Link to="/checkout">
                <button id="checkout-btn">Go to Checkout</button>
              </Link>) : <></>}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Product;
