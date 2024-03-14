import React from "react";
import "./main.css";
import BubbleList from "./components/BubbleList";
import NavigationBar from "./components/NavigationBar";

import { useEffect, useState } from "react";
import { BubbleType, BundleType } from "./types/bubble-types";

export default function Main() {


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


  return (
    <div className="App">
      <NavigationBar />
      <BubbleList />
    </div>
  );
}
