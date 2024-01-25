import { useEffect, useRef } from "react";
import ChemDoodle from "../../libraries/ChemDoodleWeb/uis/ChemDoodleWeb-uis";
import "../../libraries/ChemDoodleWeb/ChemDoodleWeb.css";
import "../../libraries/ChemDoodleWeb/uis/jquery-ui-1.11.4.css";
import "./Sketcher.scss";

const Sketcher = () => {
  const sketcher = useRef(null);

  useEffect(() => {
    ChemDoodle.ELEMENT["H"].jmolColor = "black";
    ChemDoodle.ELEMENT["S"].jmolColor = "#B9A130";

    sketcher.current = new ChemDoodle.SketcherCanvas("sketcher", 375, 300, {
      useServices: false,
      oneMolecule: true,
      isMobile: true,
    });
    sketcher.current.styles.atoms_displayTerminalCarbonLabels_2D = true;
    sketcher.current.styles.atoms_useJMOLColors = true;
    sketcher.current.styles.bonds_clearOverlaps_2D = true;
    sketcher.current.styles.shapes_color = "c10000";
    sketcher.current.repaint();
    sketcher.current.toolbarManager.setup();
  }, []);

  return (
    <div className="sketcher">
      <canvas id="sketcher"></canvas>
    </div>
  );
};

export default Sketcher;
