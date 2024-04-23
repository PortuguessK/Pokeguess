import ReactDOM from "react-dom/client";
import "./main.css";
import '@fontsource-variable/open-sans';
import '@fontsource/ibm-plex-mono';
import '@fontsource/fredoka-one';
import { Pokedex } from "./assets/components/Pokedex/Pokedex";
import { NavMain } from "./assets/components/nav/nav";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
  <NavMain/>
  <Pokedex/>
  </>
);
