import { useEffect, useState } from "react";
import "../styles/NavigationBar.css";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const categories = ["Products", "Bundles", "About"];
  const whereTo = ['/bubbles', '/bundles', '/about'];

  const handleClick = (index: number) => {
    setSelectedIndex(index);
  };

  const [selectedInex, setSelectedIndex] = useState(0);

  return (
    <div id="navigation-container">
      {categories.map((category, index) => (
        <Link key={category} to={whereTo[index]}>
          <button
          className={selectedInex === index ? "btn-active" : ""}
          onClick={() => handleClick(index)}
          >
          {category}
          </button>
        </Link>
      ))}
      <Link to={'/cart'}>
        <button id="cart-butn">
          Cart
        </button>
      </Link>
    </div>
  );
};

export default NavigationBar;
