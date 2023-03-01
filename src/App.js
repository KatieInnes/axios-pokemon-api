import './App.css';
import React, {useEffect, useState} from "react";
import axios from "axios";


const Pokemon = props => {
  const [apiData, setApiData] = useState(null);
  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0")
      .then(response => {
        console.log(response.data.results)
        setApiData(response.data.results)
      })
  }, []);

  return (
    <main className='App'>
      <h1>Pokemon List</h1>
      <ul class="list-container">
        {apiData && apiData.length > 0 && apiData.map((pokemonObj, index) => (
            <li className="list" key={pokemonObj.id}>{pokemonObj.name}</li>
          ))}
      </ul>
    </main>
  );
}

export default Pokemon;