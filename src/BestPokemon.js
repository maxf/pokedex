import React from "react";

const BestPokemon = function(props) {
  return (
    <div>
      <p>My favourite Pokemon is Pikachu</p>
      <ul>
        {props.abilities.map((ability, index) =>
          <li key={index}>{ability}</li>
        )}
      </ul>
    </div>
  );
};

export default BestPokemon;
