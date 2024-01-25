import { useEffect } from "react";
import ChemDoodle from "../../libraries/ChemDoodleWeb/uis/ChemDoodleWeb-uis";
import "../../libraries/ChemDoodleWeb/ChemDoodleWeb.css";
import "../../libraries/ChemDoodleWeb/uis/jquery-ui-1.11.4.css";
import "./Sketcher.scss";

const Sketcher = () => {
  useEffect(() => {
    ChemDoodle.ELEMENT["H"].jmolColor = "black";
    ChemDoodle.ELEMENT["S"].jmolColor = "#B9A130";

    const sketcher = new ChemDoodle.SketcherCanvas("sketcher", 390, 300, {
      useServices: false,
      oneMolecule: true,
      isMobile: true,
    });
    sketcher.styles.atoms_displayTerminalCarbonLabels_2D = true;
    sketcher.styles.atoms_useJMOLColors = true;
    sketcher.styles.bonds_clearOverlaps_2D = true;
    sketcher.styles.shapes_color = "c10000";
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
