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

  return (
      <>
          <NavigationBar />
          <div id="cart">
              {cartItems.map((item) => (
                  <p>{item.name}</p>
              ))}
          </div>
      </>
  );
}

export default Cart;