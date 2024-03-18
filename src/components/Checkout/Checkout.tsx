import NavigationBar from "../NavigationBar";
import "../../styles/Checkout.css";
import { useEffect, useState } from "react";
import { BubbleType } from "../../types/bubble-types";
import Order, { DeliveryMethod } from "../../types/order-types";
import DeliveryInfoForm from "./DeliveryInfoForm";

export default function Checkout() {
  const cartStorage = localStorage.getItem("cart");
  const cartArray = cartStorage ? JSON.parse(cartStorage) : [];
  const cart: BubbleType[] = cartArray;
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  const user = localStorage.getItem("userInfo");
  const userInfo = user ? JSON.parse(user) : "";

  const [order, setOrder] = useState<Order>({
    deliveryMethod: DeliveryMethod.Delivery,
    name: userInfo.name || "",
    address: userInfo.address || "",
    city: userInfo.city || "",
    telephone: userInfo.telephone || "",
    postalCode: userInfo.postalCode || "",
  });

  useEffect(() => {
    localStorage.setItem("userInfo", JSON.stringify(order));
    }, [order]);
  return (
    <div>
      <NavigationBar />
      <div id="checkout-container">
        <div id="items">
          <h1>Checkout</h1>
          <h2 id="items-header">Items in cart:</h2>
          {cart.map((item) => (
            <div className="item-container">
              <img src={item.image} alt="" />
              <p className="item-name">{item.name}</p>
              <p className="item-price">${item.price}</p>
            </div>
          ))}

          <div id="total-price-container">
            <h2 id="total-header">Total:</h2>
            <p id="total-price">${totalPrice}</p>
          </div>
        </div>
        <DeliveryInfoForm order={order} setOrder={setOrder} />
      </div>
    </div>
  );
}
