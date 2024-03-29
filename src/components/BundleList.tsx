import { useEffect, useState } from "react";
import NavigationBar from "./NavigationBar";
import { BundleType, BubbleType } from "../types/bubble-types";
import "../styles/BundleList.css"



const BundleList = () => {
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

  let [bundles, setBundles] = useState<BundleType[]>([]);
  useEffect(() => {
    fetch(`http://localhost:3500/api/bundles`)
      .then((res) => res.json() as Promise<BundleType[]>)
      .then((data) => {
        setBundles(data);
        console.log(data);
      })
      .catch((err) => console.error(err));
  }, []);


if (!bundles) {
  return (
    <>
      <NavigationBar />
      <div id="bundles-container">
        <h1>No bundles found</h1>
      </div>
    </>
  );
}
  
  return (
    <>
    <NavigationBar />
    <div id="bundles-container">
    <h1>Bundles</h1>
    <ul id="bundles-list">
      {bundles.map((bundle) => (
        <li key={String(bundle.id)}>

          <div className="product-img-container">
            {bubbles.map((product) => (
                bundle.items.includes(product.id) ? (
                <img src={product.image} alt="" />
              ) : null
            ))}
          </div>
          <div className="product-info-container">

            <p className="product-name">
              {bundle.name}
            </p>
          </div>
        </li>
      ))}
    </ul>
  </div>
  </>
  );
    
}

export default BundleList;