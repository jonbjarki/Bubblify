import React from "react";
import "./main.css";
import BubbleList from "./components/BubbleList";
import FilterBar from "./components/NavigationBar";

export default function Main() {
  return (
    <div className="App">
      <FilterBar />
      <BubbleList />
    </div>
  );
}
