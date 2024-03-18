import { BubbleType } from "../types/bubble-types";
import NavigationBar from "./NavigationBar";
import "../styles/Cart.css";
import { Link } from "react-router-dom";


const Cart = () => {
  const cartStorage = localStorage.getItem("cart");
  const cart: BubbleType[] = cartStorage ? JSON.parse(cartStorage) : [];
  console.log("Cart Items:", cart);


  const handleDelete = (itemID: string) => {
    const itemIndex = cart.findIndex((item) => item.id === parseInt(itemID));
    cart.splice(itemIndex, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    window.location.reload();
  }

  return (
    <>
      <NavigationBar />
      <div id="cart">
        <div id="header">
          <h1>Shopping Cart</h1>
          {cart.length !== 0 ? <Link id="checkout-link" to="/checkout">
                <button id="checkout-btn">Go to Checkout</button>
              </Link> : <></>}
        </div>
        {cart.map((item) => (
          <div id="item-container">
            <img src={item.image} alt="" />
            <div id="options-container">
              <p>{item.name}</p>
              <p>${item.price}</p>
              <button onClick={() => handleDelete(String(item.id))}>
                delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cart;