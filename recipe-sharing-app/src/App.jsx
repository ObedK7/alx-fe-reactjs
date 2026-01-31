import { useState } from "react";
import RecipeList from ".src/component/recipelist";
import AddRecipeForm from ".src/component/addrecipeform";
import RecipeStore from "./RecipeStore";
import "./App.css";

function App() {
  return (
    <div>
      <RecipeList />
      <AddRecipeForm />
      <RecipeStore />
    </div>
  );
}

export default App;
