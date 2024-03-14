import { useEffect, useState } from "react";
import NavigationBar from "./NavigationBar";
import { BundleType } from "../types/bubble-types";

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

const Bundles = () => {
    return <NavigationBar />;
}

export default Bundles;