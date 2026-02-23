// src/components/HomePage.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import recipesData from "../data.json";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipesData); // load recipes from JSON on mount
  }, []);

  return (
    // Centered container with max width for desktop
    <div className="container mx-auto p-4 max-w-6xl">
      {/* Page title */}
      <h1 className="text-3xl font-bold mb-6 text-center">Recipe Sharing</h1>

      {/* Grid of recipe cards */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center">
        {recipes.map((recipe) => (
          <Link key={recipe.id} to={`/recipe/${recipe.id}`}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              {/* Recipe image */}
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover rounded-3x1"
              />

              {/* Recipe content */}
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
                <p className="text-gray-700">{recipe.summary}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
