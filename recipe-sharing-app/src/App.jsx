import { useState } from "react";
import RecipeList from "./component/RecipeList";
import AddRecipeForm from "./component/AddrecipeForm";
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
