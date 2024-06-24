import { useState } from "react";
import "../App.css";
import { IoPlayOutline } from "react-icons/io5";

const Block = () => {
  const [run, setRun] = useState<boolean>(false);
  const [text, setText] = useState<string>("");
  const [evaluatedText, setEvaluatedText] = useState("");

  function handleTextChange(event: any) {
    setText(event.target.value);
  }

  function runText() {
    try {
      const result = eval(text);
      setEvaluatedText(result.toString());
    } catch (error) {
      setEvaluatedText("Error in evaluation");
    }
    setRun(true);
  }

  return (
    <div>
      <div className="container">
        <div >
          <textarea
            placeholder="Textarea" // Specifies a short hint that describes the expected value of the textarea
            wrap="soft" // Specifies how the text in the textarea should be wrapped
            name="name" // Specifies the name of the textarea, which can be used when submitting a form
            value={text}
            className="textInput"
            onChange={handleTextChange}
          />
        </div>

        <div className="button">
          <button className="btn btn-primary" onClick={runText}>
            <IoPlayOutline />
            <div>Run</div>
          </button>
        </div>
      </div>
      {run ? (
        <div className="greyArea">
          <p>{evaluatedText}</p>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Block;
