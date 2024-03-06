import { useEffect, useState } from "react";
import { BubbleType } from "../types/bubble-types";

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

  return (
    <div id="bubbles">
      <h1>Bubbles</h1>
    </div>
  );
}
