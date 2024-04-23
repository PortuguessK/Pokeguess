import { useState } from "react";
import "./PokedexGenerations.css";
import { ArrowSvg } from "./svg/arrow";
import { NewGeneration } from "./Generation1/PokedexGeneration";

// eslint-disable-next-line react/prop-types
export function PokedexGenerations({ Generation }) {
  const [Deploy, setDeploy] = useState(false);
  const toggleDeploy = () => {
    setDeploy(!Deploy);
  };
  return (
    <>
      <ul className="GenerationContainer">
        <li className="GenerationTitleContainer">
          <button className="GenerationTitleButton" onClick={toggleDeploy}>
            <h2 className="GenerationTitle"> {`GENERATION ${Generation}`}</h2>
            <ArrowSvg Rotation={Deploy ? `down` : `right`} />
          </button>
        </li>
        <li className="GenerationPokedexContainer">
          <ul
            className={
              Deploy ? `GenerationPokedex Deployed` : `GenerationPokedex Deploy`
            }
          >
            <NewGeneration sendGeneration={Generation} />
          </ul>
        </li>
      </ul>
    </>
  );
}
