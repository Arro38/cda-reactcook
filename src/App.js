import React, { useState } from "react";
import Recipe from "./components/Recipe";

const App = () => {
  let [searchInput, setSearchInput] = useState("chicken");

  return (
    <div className="app">
      <div className="headerContainer">
        <h1>React Cook</h1>
        <input
          type="text"
          placeholder="Tappez le nom d'un aliment (anglais)"
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>
      <div className="recipesContainer">
        <Recipe search={searchInput} />
      </div>
    </div>
  );
};

export default App;
