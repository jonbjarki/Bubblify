import "../styles/OrderConfirmed.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const OrderConfirmed = () => {
  return (
    <>
    <div id="outer-container">
      <div id="confirm-container">
        <div id="checkmark-container">
          <div id="inner-checkmark-container">
            <FontAwesomeIcon icon={faCheck} id="check-icon"/>  

          </div>
          <p>Order Confirmed</p>
        </div>
        <Link itemID="to-Home" to={"/"}><p>Return Home</p></Link>
      </div>
    </div>

    </>
  );
}

export default OrderConfirmed;