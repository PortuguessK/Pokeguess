import { useEffect, useState } from "react";
import "./Generation.css"
export function NewGeneration({sendGeneration}) {
  const [currentPokemon, newPokemon] = useState([]);
  useEffect(() => {
  let indexI = 0
  let indexF = 0
  if(sendGeneration === `I`){
    indexI = 0
    indexF = 151
  } else if(sendGeneration === `II`){
    indexI = 151
    indexF =251 - 151
  }
  else if(sendGeneration === `III`){
    indexI = 251
    indexF = 386 - 251
  }
  else if(sendGeneration === `IV`){
    indexI = 386
    indexF = 494 - 386
  }
  else if(sendGeneration === `V`){
    indexI = 494
    indexF = 649 - 494
  }
  else if(sendGeneration === `VI`){
    indexI = 649
    indexF = 721 - 649
  }
  else if(sendGeneration === `VII`){
    indexI = 721
    indexF = 809 - 721
  }
  else if(sendGeneration === `VIII`){
    indexI = 809
    indexF = 905 - 809
  }
  else if(sendGeneration === `IX`){
    indexI = 905
    indexF = 1025 - 905 
  }
    const getPokemonList = async () => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${indexF}&offset=${indexI}`
      );
      const PokedexList = await response.json();
      const { results } = PokedexList;
      const GetPokemon = results.map(async (Pokemon) => {
        const response = await fetch(Pokemon.url);
        const PokemonList = await response.json();
        const Type2 = PokemonList.types['1']
        if (Type2 === undefined) {
          return {
          name: PokemonList.name,
          id: PokemonList.id,
          sprite: PokemonList.sprites.front_default,
          type1: PokemonList.types['0'].type.name,
        };
        } else {
          return {
            name: PokemonList.name,
            id: PokemonList.id,
            sprite: PokemonList.sprites.front_default,
            type1: PokemonList.types['0'].type.name,
            type2: PokemonList.types['1'].type.name,
          };
         }
        
      });
      newPokemon(await Promise.all(GetPokemon));
      };
      getPokemonList();
  }, []);
  return currentPokemon.map((Pokemon) => {
    const PokeName = `${Pokemon.name}`.toUpperCase();
    const PokeId = `${Pokemon.id}`.toUpperCase();
    const PokeUrl = Pokemon.sprite;
    const PokeType1 = Pokemon.type1
    const PokeType2 = Pokemon.type2
    return (
      <li className="PokedexGeneration" key={PokeId}>
        <div className="PokedexGenerationSpriteContainer">
          <img src={PokeUrl} className="PokedexGenerationSprite"></img>
        </div>
        <div className="PokedexGenerationInfoContainer">
          <div className="PokedexGenerationInfo">
          <div className="PokedexGenerationId">
            <strong className="PokedexGenerationStrong">{PokeId}</strong>
          </div>
          <div className="PokedexGenerationName">
            <strong className="PokedexGenerationStrong">{PokeName}</strong>
          </div>
          </div>
          <div className="PokedexGenerationType">
          <div className={`Type ${PokeType1}`}>{`${PokeType1}`.toUpperCase()}</div>
          <div className={`Type ${PokeType2}`}>{`${PokeType2}`.toUpperCase()}</div>
          </div>
        </div>
      </li>
    );
  });
}
