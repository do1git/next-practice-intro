import { useState } from "react";
import NavBar from "../components/NavBar";

export default function Home() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <NavBar />
      <h1>Hello</h1>
      <div>hello {counter}</div>
      <button onClick={() => setCounter((prev) => prev + 1)}>CLIKCME</button>
    </div>
  );
}
