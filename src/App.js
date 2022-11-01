import "./App.css";
import "./index.scss";
import About from "./components/About";
import Explore from "./components/Explore";
import Help from "./components/Help";
import Stories from "./components/Stories";
import Home from "./components/Home";
import { useState, useEffect } from "react";

function App() {
  // 1:home, 2:explore, 3:stories, 4:about, 5:help
  const [type, setType] = useState(1);
  const callback = (val) => {
    setType(val);
  };

  return (
    <div className="App">
      {type == 1 && <Home callback={callback} />}
      {type == 2 && <Explore callback={callback} />}
      {type == 3 && <Stories callback={callback} />}
      {type == 4 && <About callback={callback} />}
      {type == 5 && <Help callback={callback} />}
    </div>
  );
}

export default App;
