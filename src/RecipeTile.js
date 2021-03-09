import React from 'react';
import './RecipeTile.css';

export default function RecipeTile({ recipe }) {
    const handleClick = () => {
        window.open(recipe["recipe"]["url"])
    }
    return (
        recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/) != null && (
        <div className="recipeTile" onClick={handleClick}>
            <img className="recipeTile__img" alt="recipe_image" src={recipe["recipe"]["image"]}/>
            <p className="recipeTile__name">{recipe["recipe"]["label"]}</p>
            </div>
        )
    );
}
