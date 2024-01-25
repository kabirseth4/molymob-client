import "./App.scss";
import Render from "./components/Render/Render";
import Sketcher from "./components/Sketcher/Sketcher";

const App = () => {
  return (
    <main>
      <Render />
      <Sketcher />
    </main>
  );
};

export default App;
