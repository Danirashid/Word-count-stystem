import React, { useState } from "react";

const App = () => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleUpCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  return (
    <>
      <div className="container my-2">
        <textarea
          className="form-control"
          value={text}
          onChange={handleChange}
          cols="30"
          rows="10"
        />
        <button className="btn btn-primary mt-2" onClick={handleUpCase}>
          Convert to UperCase
        </button>
        <button className="btn btn-primary mt-2 mx-4" onClick={handleLoCase}>
          Convert to LowerCase
        </button>
      </div>
      <div className="container">
        <h1>Word Count</h1>
        <p>
          <b>{text.split(" ").length}</b> and <b>{text.length}</b> Characters
        </p>
        <h1>Time Required to Read This Paragraph</h1>
        <p>{0.008 * text.split(" ").length}</p>
        <h1>Preview Your Para Here</h1>
        <p>{text}</p>
      </div>
    </>
  );
};

export default App;
