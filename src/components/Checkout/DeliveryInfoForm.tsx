import { useState } from "react";
import Order, { DeliveryMethod } from "../../types/order-types";
import { useNavigate } from "react-router-dom";

export default function DeliveryInfoForm({
  order,
  setOrder,
}: {
  order: Order;
  setOrder: React.Dispatch<React.SetStateAction<Order>>;
}) {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState<string>("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(order);

    if (order.deliveryMethod === "Delivery") {
      if (
        order.name === "" ||
        order.address === "" ||
        order.city === "" ||
        order.telephone === "" ||
        order.postalCode === ""
      ) {
        setErrorMessage("Please fill out all fields");
      } else if (order.telephone.length < 7) {
        setErrorMessage("Telephone number too short!");
      } else {
        setErrorMessage("");
        navigate("/checkout/confirm");
      }
    } else {
      if (order.name === "" || order.telephone === "") {
        setErrorMessage("Please fill out all fields");
      } else if (order.telephone.length < 7) {
        setErrorMessage("Telephone number too short!");
      } else {
        setErrorMessage("");
        navigate("/checkout/confirm");
      }
    }
  };

  return (
    <div id="order-info-container">
      <form id="order-form" onSubmit={handleSubmit}>
        <h1 id="delivery-info-header">Delivery Information</h1>
        {errorMessage ? <div id="error-message">{errorMessage}</div> : <></>}
        <div id="delivery-method">
          <p>Please select a delivery method:</p>
          <input
            type="radio"
            id="method-delivery"
            name="delivery"
            checked={order.deliveryMethod === DeliveryMethod.Delivery}
            onChange={() => {
              setOrder({ ...order, deliveryMethod: DeliveryMethod.Delivery });
            }}
            value={DeliveryMethod.Delivery}
          />
          <label htmlFor="method-delivery">Delivery</label>
          <input
            type="radio"
            id="method-pickup"
            name="delivery"
            checked={order.deliveryMethod === DeliveryMethod.Pickup}
            onChange={() => {
              setOrder({ ...order, deliveryMethod: DeliveryMethod.Pickup });
            }}
            value={DeliveryMethod.Pickup}
          />
          <label htmlFor="method-pickup">Store Pickup</label>
        </div>
        {order.deliveryMethod === "Delivery" ? (
          <div className="information-form">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={order.name}
              onChange={(e) => {
                setOrder({
                  ...order,
                  name: e.target.value,
                });
              }}
              placeholder="Name"
            />
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={order.address}
              onChange={(e) => {
                setOrder({
                  ...order,
                  address: e.target.value,
                });
              }}
              placeholder="Address"
            />
            <label htmlFor="city">City:</label>
            <input
              type="text"
              id="city"
              name="city"
              value={order.city}
              onChange={(e) => {
                setOrder({
                  ...order,
                  city: e.target.value,
                });
              }}
              placeholder="City"
            />
            <label htmlFor="telephone">Telephone:</label>
            <input
              type="text"
              id="telephone"
              name="telephone"
              value={order.telephone}
              onChange={(e) => {
                setOrder({
                  ...order,
                  telephone: e.target.value,
                });
              }}
              placeholder="Telephone"
            />
            <label htmlFor="postal-code">Postal Code:</label>
            <input
              type="text"
              id="postal-code"
              name="postal-code"
              value={order.postalCode}
              onChange={(e) => {
                setOrder({
                  ...order,
                  postalCode: e.target.value,
                });
              }}
              placeholder="Postal Code"
            />
          </div>
        ) : (
          <div className="information-form">
            <label htmlFor="pickup-name">Name:</label>
            <input
              type="text"
              id="pickup-name"
              name="name"
              value={order.name}
              onChange={(e) => {
                setOrder({
                  ...order,
                  name: e.target.value,
                });
              }}
              placeholder="Name"
            />
            <label htmlFor="telephone">Telephone:</label>
            <input
              type="text"
              id="pickup-telephone"
              name="telephone"
              value={order.telephone}
              onChange={(e) => {
                setOrder({
                  ...order,
                    telephone: e.target.value,
                });
              }}
              placeholder="Telephone"
            />
          </div>
        )}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
