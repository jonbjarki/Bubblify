import { useEffect, useState } from "react";
import { BubbleType } from "../types/bubble-types";
import "../styles/BubbleList.css";
import { Link } from "react-router-dom";
import NavigationBar from "./NavigationBar";

export default function BubbleList() {
  let [bubbles, setBubbles] = useState<BubbleType[]>([]);
  useEffect(() => {
    fetch(`http://localhost:3500/api/bubbles`)
      .then((res) => res.json() as Promise<BubbleType[]>)
      .then((data) => {
        setBubbles(data);
        console.log(data);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleClick = (id: number) => {
    console.log(id);
  }

  return (
    <>
    <NavigationBar />
    <div id="bubbles-container">
      <h1>Bubbles</h1>
      <ul id="bubble-list">
        {bubbles.map((product) => (
          <Link 
          key={String(product.id)} 
          to={`/bubbles/${product.id}`}
          className="text-decoration-off"
          >
          <li onClick={() => handleClick(product.id)}>
            <div className="product-img-container">
              <img src={product.image} alt="" />
            </div>
            <div className="product-info-container">
              <p className="product-name">
                {product.name}
              </p>
              <p className="product-description">
                {product.description}
              </p>
              <div className="price-container">
                <hr />
                <p>Price: ${product.price}</p>
              </div>
            </div>
          </li>
          </Link>
        ))}
      </ul>
    </div>
    </>
  );
}
