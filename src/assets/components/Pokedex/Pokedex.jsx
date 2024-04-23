/* eslint-disable react/prop-types */
import "./Pokedex.css";
import { PokedexGenerations } from "./PokedexGeneration/PokedexGenerations";
export function Pokedex({Mode}) {
  Mode = `Dark`
  return (
    <section className="PokedexContainer">
    <div className="PokedexTitleContainer">
      <h1 className={`PokedexTitle T${Mode}`}>POKEDEX</h1>
    </div>
    <div className="PokedexGenerationContainer">
    <PokedexGenerations Generation={`I`}/>
    <PokedexGenerations Generation={`II`}/>
    <PokedexGenerations Generation={`III`}/>
    <PokedexGenerations Generation={`IV`}/>
    <PokedexGenerations Generation={`V`}/>
    <PokedexGenerations Generation={`VI`}/>
    <PokedexGenerations Generation={`VII`}/>
    <PokedexGenerations Generation={`VIII`}/>
    <PokedexGenerations Generation={`IX`}/>
    </div>
    </section>
  );
}
