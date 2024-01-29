import { useEffect } from "react";
import ChemDoodle from "../../libraries/ChemDoodleWeb/ChemDoodleWeb";
import "../../libraries/ChemDoodleWeb/ChemDoodleWeb.css";
import "./Render.scss";

const Render = ({ currentMol }) => {
  useEffect(() => {
    const render = new ChemDoodle.TransformCanvas3D("render", 390, 350);
    render.styles.set3DRepresentation("Ball and Stick");
    render.styles.backgroundColor = "black";

    if (currentMol) {
      const molecule = ChemDoodle.readMOL(currentMol, 1);
      render.loadMolecule(molecule);
    }
  }, [currentMol]);

  return (
    <article className="render" data-mol={currentMol}>
      <canvas id="render" />
    </article>
  );
};

export default Render;
