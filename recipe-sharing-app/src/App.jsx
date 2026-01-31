import { useState } from "react";
import RecipeList from "./RecipeList";
import AddRecipeForm from "./AddrecipeForm";
import RecipeStore from "./RecipeStore";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <RecipeList />
        <AddRecipeForm />
        <RecipeStore />
      </div>
    </>
  );
}

export default App;
