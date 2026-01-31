import { useState } from "react";
import RecipeList from "./component/RecipeList";
import AddRecipeForm from "./component/AddrecipeForm";
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

