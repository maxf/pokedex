import React, { useState } from "react";

const CaughtPokemon = function(props) {
  const [ caught, updateCaught ] = useState([]);
  const incrementCaught = () => {
    updateCaught((c) => c.concat(`pok${Math.random().toFixed(2)}`));
  };
  return (
    <div>
      <p>
        Caught {caught.length} Pokemon on {props.date}
        <button onClick={incrementCaught}>Catch Pokemon</button>
      </p>
      <ul>
        {caught.map((c) => <li>{c}</li>)}
      </ul>
    </div>
  );
};

export default CaughtPokemon;
