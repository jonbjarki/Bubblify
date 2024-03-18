import { BubbleType } from "../types/bubble-types";
import NavigationBar from "./NavigationBar";
import "../styles/Cart.css";


const Cart = () => {
  let cartItems: BubbleType[] = [];

  for (let i = 0; i < localStorage.length; i++) {

    var key: string = localStorage.key(i) || '';
    var value: string | null = localStorage.getItem(key);

    if (value) {
      try {
        const parsedValue: BubbleType = JSON.parse(value);
        cartItems.push(parsedValue);
      } catch (error) {
        console.error(`Error parsing value for key ${key}:`, error);
      }
    }
  }
  
  console.log("cartItems:", cartItems);

  const handleDelete = (itemID: string) => {
    localStorage.removeItem(itemID);
    window.location.reload();
  }

  return (
    <>
      <NavigationBar />
      <div id="cart">
        <div id="header">
          <h1>Shopping Cart</h1>
          <button>Porceed to Checkout</button>
        </div>
        {cartItems.map((item) => (
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