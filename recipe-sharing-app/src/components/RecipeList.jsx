import { useRecipeStore } from "./componenets/recipeStore";
import FavoritesList from "./FavoritesList";
import RecommendationsList from "./RecommendationsList";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);
  const favorites = useRecipeStore((state) => state.favorites);

  return (
    <div>
      <h1>All Recipes</h1>

      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>

          {favorites.includes(recipe.id) ? (
            <button onClick={() => removeFavorite(recipe.id)}>
              Remove from Favorites
            </button>
          ) : (
            <button onClick={() => addFavorite(recipe.id)}>
              Add to Favorites
            </button>
          )}
        </div>
      ))}

      <FavoritesList />
      <RecommendationsList />
    </div>
  );
};

export default RecipeList;
