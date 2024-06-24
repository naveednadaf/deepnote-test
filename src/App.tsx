import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Block from "./components/Block";

function App() {
  const [count, setCount] = useState(0);

  const [blocks, setBlocks] = useState<string[]>([]);

  function addBlocks() {
    setBlocks((prevBlocks) => [...prevBlocks, "newBlock"]);
  }

  return (
    <>
      <div className="mainContainer">
        <>
          {blocks.map((item, index) => {
            return (
              <div className="container" key={index}>
                <Block />
              </div>
            );
          })}
        </>
        <div className="button">
          <button className="btn btn-primary" onClick={addBlocks}>
            Add new block
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
