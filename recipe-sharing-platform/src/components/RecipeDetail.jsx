import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import recipesData from "../data.json";

const RecipeDetail = () => {
  const { id } = useParams(); // get recipe ID from URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const selectedRecipe = recipesData.find((r) => r.id === parseInt(id));
    setRecipe(selectedRecipe);
  }, [id]);

  if (!recipe) return <p className="text-center mt-10">Recipe not found.</p>;

  return (
    <div className="container mx-auto p-4 max-w-3xl">
      <Link to="/" className="text-blue-500 underline mb-4 inline-block">
        &larr; Back to Home
      </Link>

      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg mb-4"
      />

      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <p className="text-gray-700 mb-6">{recipe.summary}</p>

      {/* Ingredients Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc list-inside text-gray-700">
          {recipe.ingredients ? (
            recipe.ingredients.map((item, idx) => <li key={idx}>{item}</li>)
          ) : (
            <li>Sample ingredient 1</li>
          )}
        </ul>
      </div>

      {/* Cooking Instructions Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Cooking Instructions</h2>
        <ol className="list-decimal list-inside text-gray-700">
          {recipe.steps ? (
            recipe.steps.map((step, idx) => <li key={idx}>{step}</li>)
          ) : (
            <>
              <li>Step 1: Prepare the ingredients.</li>
              <li>Step 2: Cook according to recipe.</li>
            </>
          )}
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetail;
