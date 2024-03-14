import { useEffect, useState } from "react";
import "../styles/NavigationBar.css";

const FilterBar = () => {
  interface Category {
    name: String;
    _id: String;
  }

  const [data, setData] = useState<Category[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3500/recipes/recipeTypes");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();

      console.log(jsonData);

      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleClick = (index: number, category_name: String) => {
    setSelectedIndex(index + 1);
  };

  const [selectedInex, setSelectedIndex] = useState(0);

  return (
    <div id="filter-btn-container">
      <button
        className={selectedInex === 0 ? "btn-active" : ""}
        onClick={() => setSelectedIndex(0)}
      >
        ALL
      </button>
      {data.map((category, index) => (
        <button
          className={selectedInex === index + 1 ? "btn-active" : ""}
          key={String(category._id)}
          onClick={() => handleClick(index, category.name)}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
