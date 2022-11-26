import { useState } from "react";
import "./App.css";
import { Home } from "./Components/Home";
import { Navbar } from "./Components/Navbar";
import {SocialLinks} from './Components/SocialLinks.jsx'

function App() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  if (loading) {
    return (
      <div id="loading">
        <div className="slide-down">
          <h1 className="text-4xl">Welcome to My World</h1>
          <img
            src="https://camo.githubusercontent.com/8bf6f6d78abc81fcf9c49f10649423e73ea44bc248e83aaae8759d401c829a84/68747470733a2f2f70687973696373677572756b756c2e66696c65732e776f726470726573732e636f6d2f323031392f30322f6368617261637465722d312e676966"
            alt=""
          />
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <Navbar />
      <Home />
      <SocialLinks/>
    </div>
  );
}

export default App;
