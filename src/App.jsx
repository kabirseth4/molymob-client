import { useState, useEffect, useRef } from "react";
import "./App.scss";
import Render from "./components/Render/Render";
import Sketcher from "./components/Sketcher/Sketcher";

const App = () => {
  const [currentMol, setCurrentMol] = useState(null);

  return (
    <main>
      <Render currentMol={currentMol} />
      <Sketcher setCurrentMol={setCurrentMol} />
    </main>
  );
};

export default App;
