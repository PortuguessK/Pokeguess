import { useEffect, useState } from "react";
import "./PokedexGeneration.css"
export function NewGeneration({sendGeneration}) {
  let indexI = 0
  let indexF = 0
  if(sendGeneration === `I`){
    indexI = 0
    indexF = 151
  } else if(sendGeneration === `II`){
    indexI = 151
    indexF = 251
  }
  else if(sendGeneration === `III`){
    indexI = 251
    indexF = 386
  }
  else if(sendGeneration === `IV`){
    indexI = 386
    indexF = 493
  }
  else if(sendGeneration === `V`){
    indexI = 493
    indexF = 649
  }
  else if(sendGeneration === `VI`){
    indexI = 649
    indexF = 721
  }
  else if(sendGeneration === `VII`){
    indexI = 721
    indexF = 809
  }
  else if(sendGeneration === `VIII`){
    indexI = 809
    indexF = 905
  }
  else if(sendGeneration === `IX`){
    indexI = 905
    indexF = 1025
  }
  const [currentPokemon, newPokemon] = useState([]);
  useEffect((indexI, indexF) => {
    const getPokemonList = async () => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${indexF}&offset=${indexI}`
      );
      const PokedexList = await response.json();
      const { results } = PokedexList;
      const GetPokemon = results.map(async (Pokemon) => {
        const response = await fetch(Pokemon.url);
        const PokemonList = await response.json();
        return {
          name: PokemonList.name,
          id: PokemonList.id,
          sprite: PokemonList.sprites.front_default,
        };
      });
      newPokemon(await Promise.all(GetPokemon));
    };
    getPokemonList();
  }, []);
  return currentPokemon.map((Pokemon) => {
    const PokeName = `${Pokemon.name}`.toUpperCase();
    const PokeId = `${Pokemon.id}`.toUpperCase();
    const PokeUrl = Pokemon.sprite;
    return (
      <li className="GenPokedexPokemon" key={PokeId}>
        <div className="GenPokedexPokemonImg">
          <img src={PokeUrl} className="GenPokedexPokemonSprite"></img>
        </div>
        <div className="GenPokedexInfo">
          <div className="GenPokedexPokemonName">
            <p>{PokeName}</p>
          </div>
        </div>
      </li>
    );
  });
}
