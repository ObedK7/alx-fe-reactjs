import { useState } from "react";
import RecipeList from "./RecipeList";
import AddRecipeForm from "./AddrecipeForm";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <RecipeList />
        <AddRecipeForm />
      </div>
    </>
  );
}

export default App;

