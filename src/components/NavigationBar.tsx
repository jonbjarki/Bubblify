import { useEffect, useState } from "react";
import "../styles/NavigationBar.css";

const FilterBar = () => {
  const categories = ["Bubbles", "Bundles", "About"];

  const handleClick = (index: number) => {
    setSelectedIndex(index);
  };

  const [selectedInex, setSelectedIndex] = useState(0);

  return (
    <div id="navigation-container">
      {categories.map((category, index) => (
        <button
          className={selectedInex === index ? "btn-active" : ""}
          key={String(category)}
          onClick={() => handleClick(index)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
