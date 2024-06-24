import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Block from "./components/Block";

interface Block {
  id: string;
  text: string;
  evaluatedText: string;
}

function App() {
  const [count, setCount] = useState(1);

  const [blocks, setBlocks] = useState<Block[]>([]);

  function addBlocks() {
    const newId = `A${blocks.length + 1}`;
    setBlocks((prevBlocks) => [
      ...prevBlocks,
      { id: newId, text: "", evaluatedText: "" },
    ]);
  }

  function handleTextChange(id: string, newText: string) {
    setBlocks((prevBlocks) =>
      prevBlocks.map((block) =>
        block.id === id ? { ...block, text: newText } : block
      )
    );
  }

  function handleEvaluatedTextChange(id: string, newEvaluatedText: string) {
    setBlocks((prevBlocks) =>
      prevBlocks.map((block) =>
        block.id === id ? { ...block, evaluatedText: newEvaluatedText } : block
      )
    );
  }

  return (
    <>
      <div className="mainContainer">
        <div>
          <>
            {blocks.map((block, index) => (
              <div className="container" key={index}>
                <Block
                  id={block.id}
                  text={block.text}
                  onTextChange={handleTextChange}
                  onEvaluatedTextChange={handleEvaluatedTextChange}
                />
              </div>
            ))}
          </>
        </div>
        <div className="Mainbutton">
          <button className="btn btn-primary" onClick={addBlocks}>
            Add new block
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
