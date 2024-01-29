import { useEffect } from "react";
import ChemDoodle from "../../libraries/ChemDoodleWeb/uis/ChemDoodleWeb-uis";
import "../../libraries/ChemDoodleWeb/ChemDoodleWeb.css";
import "../../libraries/ChemDoodleWeb/uis/jquery-ui-1.11.4.css";
import "./Sketcher.scss";

const Sketcher = ({ setCurrentMol }) => {
  useEffect(() => {
    const sketcher = new ChemDoodle.SketcherCanvas("sketcher", 390, 300, {
      useServices: false,
      oneMolecule: true,
      isMobile: true,
    });
    sketcher.styles.atoms_displayTerminalCarbonLabels_2D = true;
    sketcher.styles.atoms_useJMOLColors = true;
    sketcher.styles.bonds_clearOverlaps_2D = true;
    sketcher.styles.shapes_color = "c10000";
    sketcher.oldFunc = sketcher.checksOnAction;
    // using force improves efficiency, so changes will not be checked until a render occurs
    // you can force a check by sending true to this function after calling check with a false
    sketcher.checksOnAction = function (force) {
      // call the old checksOnAction function
      this.oldFunc(force);
      // there will only be one molecule because this is a single molecule sketcher
      let mol = this.getMolecule();
      let molFile = ChemDoodle.writeMOL(mol);
      setCurrentMol(molFile);
    };
    sketcher.repaint();
    sketcher.toolbarManager.setup();
  }, []);

  return (
    <article className="sketcher">
      <canvas id="sketcher" />
    </article>
  );
};

export default Sketcher;
