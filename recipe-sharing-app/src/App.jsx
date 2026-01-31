import { useState } from "react";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddrecipeForm";
import RecipeStore from "./components/RecipeStore";
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
