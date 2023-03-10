import React from "react";
import Logo from "./Logo.js";
import BestPokemon from "./BestPokemon.js";
import CaughtPokemon from "./CaughtPokemon.js";
import PokemonMoves from "./PokemonMoves.js";

function App() {
  const logWhenClicked = function() {
    alert("meg");
  };

  return (
    <div>
      <Logo appName="Pokedex" handleClick={logWhenClicked}/>
      <BestPokemon abilities={["Anticipation", "Adaptability", "Run-Away"]}/>
      <CaughtPokemon date={new Date().toLocaleDateString()}/>
      <PokemonMoves/>
    </div>
  );
}

export default App;
