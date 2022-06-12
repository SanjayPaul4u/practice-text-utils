import Home from "./components/Home";
import About from "./components/About";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState('light');

  // show alert function
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  // removeClass
  const removeClass = () => {
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-info");
    document.body.classList.remove("bg-success");
  };

  // toggle mode
  const toggleMode = (cls) => {
    removeClass();
    if (cls === "dark") {
      document.body.style.backgroundColor ='#696969';
      setMode('dark');
    } else if (cls === "primary") {
      document.body.style.backgroundColor ='#1f335d';
      setMode('primary');
    } else {
      document.body.classList.add("bg-" + cls);
      setMode(cls);
    }
  };

  return (
    <>
      <BrowserRouter>
        <Navbar title="Text-Utils" toggleMode={toggleMode} mode={mode} />
        <Alert myAlert={alert} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
              mode={mode}
                main_heading="Text-Utils:"
                heading=" Utilize Your Text"
                paragraph="lowercase to uppercase, uppercase to lowercase, word count, letter count, copy text, remove space, capitalize text etc..."
                showAlert={showAlert}
              />
            }
          ></Route>
          <Route path="/about" element={<About mode={mode} />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
