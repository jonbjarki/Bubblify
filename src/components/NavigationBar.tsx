import { useEffect, useState } from "react";
import "../styles/NavigationBar.css";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const categories = ["Bubbles", "Bundles", "About"];

  const handleClick = (index: number) => {
    setSelectedIndex(index);
  };

  const whereTo = ['/bubbles', '/bundles', '/about'];

  const [selectedInex, setSelectedIndex] = useState(0);

  return (
    <div id="navigation-container">
      {categories.map((category, index) => (
        <Link key={String(category)} to={whereTo[index]}>
          <button
          className={selectedInex === index ? "btn-active" : ""}
          onClick={() => handleClick(index)}
          >
          {category}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default NavigationBar;
