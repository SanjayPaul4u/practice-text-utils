import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Home(props) {
  // USE STATE
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  // UPPERCASE FUNCTION
  const uppercaseFunc = () => {
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted in Uppercase.", "success");
  };

  // LOWERCASE FUNCTION
  const lowercaseFunc = () => {
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted in Lowercase.", "success");
  };

  // CAPITALIZE FUNCTION
  function capitalizeEachWord(str) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
  const capitalizeFunc = () => {
    const newText = capitalizeEachWord(text);
    setText(newText);
    props.showAlert("Converted in Capitalized.", "success");
  };

  // REMOVE FUNCTION
  const removeSpaceFunc = () => {
    const newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Space Removed.", "success");
  };

  // clearFunc
  const clearFunc = () => {
    const newText = "";
    setText(newText);
    props.showAlert("Text cleared.", "success");
  };

  // COPY FUNCTION
  const copyFunc = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied.", "success");
  };

  // WORD COUNT 📌
  const countWord = () => {
    const textArr = text.split(/\s+/);
    const filterArr = textArr.filter((element) => {
      return element.length !== 0;
    });
    return filterArr.length;
  };

  // CHARACTER COUNT 📌
  const countChar = () => {
    const textArr = text.split(/\s+/);
    const joinText = textArr.join("");
    const splitJoinText = joinText.split("");
    // console.log(textArr);
    // console.log(joinText);
    // console.log(splitJoinText);
    return splitJoinText.length;
  };

  return (
    <>
      <div style={{ minHeight: "67vh" }} className="container my-5">
        <div className="text-center">
          <h2 className={`text-${props.mode!=='light'?'light': 'dark'}`}>
            {props.main_heading}{" "}
            <span className={`text-${props.mode ==='dark'?'info': 'danger'}`}>{props.heading}</span>
          </h2>
          <p className={`text-${props.mode!=='light'?'light': 'dark'}`}>{props.paragraph}</p>
          <hr className="w-75 mx-auto" />
        </div>
        <div className="row">
          <div className="col-10 col-md-8 col-xxl-8 mx-auto ">
            <div className="mb-3">
              <textarea
              style={{backgroundColor: props.mode!=='light'?'#343434': '#f0f0f0',color: props.mode!=='light'?'#f0f0f0': '#343434'}}
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="6"
                placeholder="Enter your text..."
                value={text}
                onChange={handleOnChange}
                
              ></textarea>
            </div>
            {/* BUTTON STARTED */}
            <button
              onClick={uppercaseFunc}
              className="btn btn-outline-info "
              disabled={text.length === 0}
            >
              UPPERCASE
            </button>
            <button
              onClick={lowercaseFunc}
              className="btn btn-outline-info mx-2 my-2"
              disabled ={text.length===0}
            >
              lowercase
            </button>
            <button
              onClick={capitalizeFunc}
              className="btn btn-outline-info mx-2 my-2"
              disabled ={text.length===0}
            >
              Capitalize
            </button>
            <button
              onClick={removeSpaceFunc}
              className="btn btn-outline-info mx-2 my-2"
              disabled ={text.length===0}
            >
              Remove Space
            </button>
            <button
              onClick={clearFunc}
              className="btn btn-outline-info mx-2 my-2"
              disabled ={text.length===0}
            >
              Clear Text
            </button>
            <button
              onClick={copyFunc}
              className="btn btn-outline-info mx-2 my-2"
              disabled ={text.length===0}
            >
              Copy Text
            </button>

            <h3  className={`text-${props.mode!=='light'?'light': 'dark'}`}>Your Text Summary</h3>
            <h6  className={`text-${props.mode!=='light'?'light': 'dark'}`}>
              <span className={`text-${props.mode ==='dark'?'info': 'danger'}`}>{countWord()}</span> word{" "}
              <span className={`text-${props.mode ==='dark'?'info': 'danger'}`}>{countChar()}</span> character
            </h6>
            <h6>
              <span className={`text-${props.mode ==='dark'?'info': 'danger'}`}>{0.008 * countWord()}</span> Minutes
              read
            </h6>

            <h3 className={`text-${props.mode!=='light'?'light': 'dark'}`}>Preview</h3>
            <p >
              <span className={`text-${props.mode ==='dark'?'info': 'danger'}`}>
                {text.length === 0 ? "Nothing to preview" : text}
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
Home.propTypes = {
  heading: PropTypes.string.isRequired,
};
Home.defaultProps = {
  heading: "Set Heading Here",
};
