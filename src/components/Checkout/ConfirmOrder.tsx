import { BubbleType } from "../../types/bubble-types";
import Order from "../../types/order-types";
import NavigationBar from "../NavigationBar";
import "../../styles/Checkout.css";
import { useNavigate } from "react-router-dom";

export default function ConfirmOrder() {
    const cartStorage = localStorage.getItem("cart");
    const userStorage = localStorage.getItem("userInfo");

    const cart: BubbleType[] = cartStorage ? JSON.parse(cartStorage) : [];
    const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);
    const userInfo: Order = userStorage ? JSON.parse(userStorage) : "";
    
    const navigate = useNavigate();

    const handleSubmit = () => {
        fetch(`http://localhost:3500/api/orders/${userInfo.name}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ items: cart, orderInfo: userInfo}),
        })
        .then((res) => 
            res.text())
        .then((data) => {
            console.log("Order submitted:", data);
            localStorage.removeItem("cart");
            localStorage.removeItem("userInfo");
            navigate("/");
        })
        .catch((err) => console.error("Error submitting order:", err));
    }

    return (
        <>
        <NavigationBar />
        <div id="confirm-container">
        <h1>Confirm Order</h1>
        <div id="confirm-items">
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
        <div id="user-info">
          <h2>Delivery Information:</h2>
        <p>Delivery Method: {userInfo.deliveryMethod}</p>
        {userInfo.deliveryMethod === "Delivery" ? (
            <>
            <p>Name: {userInfo.name}</p>
          <p>Address: {userInfo.address}</p>
          <p>City: {userInfo.city}</p>
          <p>Telephone: {userInfo.telephone}</p>
          <p>Postal Code: {userInfo.postalCode}</p>
          </>) : 
          <>
            <p>Name: {userInfo.name}</p>
            <p>Telephone: {userInfo.telephone}</p>
          
          </>}
        </div>
        <button id="confirm-btn" onClick={handleSubmit}>Confirm Order</button>
        </div>
        </>
    )
}