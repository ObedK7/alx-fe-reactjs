import React, { useState } from "react";

const AddRecipeForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required";
    if (!ingredients.trim() || ingredients.split("\n").length < 2)
      newErrors.ingredients = "Please add at least 2 ingredients";
    if (!instructions.trim())
      newErrors.instructions = "Instructions are required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Build new recipe object
      const newRecipe = {
        id: Date.now(),
        title,
        summary: ingredients.split("\n")[0] || "",
        image: "/images/default-placeholder.png",
        ingredients: ingredients.split("\n"),
        instructions: instructions.split("\n"),
      };

      if (onAdd) onAdd(newRecipe); // pass to parent if using state

      // Clear form
      setTitle("");
      setIngredients("");
      setInstructions("");
      setErrors({});
      alert("Recipe added!");
    }
  };

  return (
    <div className="container mx-auto max-w-2xl p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Add a New Recipe</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6"
      >
        {/* Title */}
        <div className="mb-4">
          <label className="block font-semibold mb-1">Recipe Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`w-full p-2 border rounded-md focus:outline-none focus:ring ${
              errors.title ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.title && <p className="text-red-500 mt-1">{errors.title}</p>}
        </div>

        {/* Ingredients */}
        <div className="mb-4">
          <label className="block font-semibold mb-1">
            Ingredients (one per line)
          </label>
          <textarea
            rows="4"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className={`w-full p-2 border rounded-md focus:outline-none focus:ring ${
              errors.ingredients ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.ingredients && (
            <p className="text-red-500 mt-1">{errors.ingredients}</p>
          )}
        </div>

        {/* Instructions */}
        <div className="mb-4">
          <label className="block font-semibold mb-1">
            Preparation Steps (one per line)
          </label>
          <textarea
            rows="4"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            className={`w-full p-2 border rounded-md focus:outline-none focus:ring ${
              errors.instructions ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.instructions && (
            <p className="text-red-500 mt-1">{errors.instructions}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors w-full"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
