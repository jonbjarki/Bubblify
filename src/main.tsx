import React from "react";
import "./main.css";
import BubbleList from "./components/BubbleList";
import NavigationBar from "./components/NavigationBar";

import { useEffect, useState } from "react";
import { BubbleType, BundleType } from "./types/bubble-types";


export default function Main() {

  return (
    <div className="App">
      <NavigationBar />
    </div>
  );
}
