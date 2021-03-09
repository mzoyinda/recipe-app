import React, { useState } from 'react';
import './App.css';
import Axios from 'axios';
import RecipeTile from './RecipeTile';

function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [healthLabels, setHealthLabels] = useState("vegan")
  
  const YOUR_APP_ID = "cecef15a";
  const YOUR_APP_KEY = "814276916cba7e955ea50ca090f1ea73";
  
  var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabels}`;

  const getRecipes = async() => {
    var result = await Axios.get(url);
    setRecipes(result.data.hits);
    console.log(result.data.hits)

  }
  const handleChange = (e) => {
    setQuery(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    getRecipes();
}

  return (
    <div className="app">
      <h1 onClick={getRecipes}>Food Recipe Plaza 🍔</h1>
      <form className="app__searchForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className="app__input"
          placeholder="Enter ingredient"
          value={query}
          onChange={handleChange}
        />
        <input type="submit" className="app__submit" value="Search" />
        <select className="app_healthLabels">
          <option
            onClick={() => setHealthLabels("vegan")}>
            Vegan</option>
            <option
            onClick={() => setHealthLabels("vegetarian")}>
            Vegetarian</option>
            <option
            onClick={() => setHealthLabels("paleo")}>
            Paleo</option>
            <option
            onClick={() => setHealthLabels("diary-free")}>
            Diary-free</option>
            <option
            onClick={() => setHealthLabels("gluten-free")}>
            Gluten-free</option>
            <option
            onClick={() => setHealthLabels("wheat-free")}>
            Wheat-free</option>
            <option
            onClick={() => setHealthLabels("low-sugar")}>
            Low-sugar</option>
            <option
            onClick={() => setHealthLabels("egg-free")}>
            Egg-free</option>
            <option
            onClick={() => setHealthLabels("peanut-free")}>
            Peanut-free</option>
            <option
            onClick={() => setHealthLabels("tree-nut-free")}>
            Tree-nut-free</option>
            <option
            onClick={() => setHealthLabels("soy-free")}>
            Soy-free</option>
            <option
            onClick={() => setHealthLabels("fish-free")}>
            Fish-free</option>
            <option
            onClick={() => setHealthLabels("shellfish-free")}>
            Shellfish-free</option>
        </select>
      </form>
      <div className="app__recipes">
        {recipes.map((recipe) => {
          return <RecipeTile recipe={recipe}/>
        })}
      </div>
    </div>
  );
}

export default App;
