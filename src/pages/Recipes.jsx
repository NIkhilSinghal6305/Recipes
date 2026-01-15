import { useContext, useEffect } from "react";
import { recipecontext } from "../context/RecipeContext";
import RecipesCard from "../components/RecipesCard";

const Recipes = () => {
  const { data, setdata } = useContext(recipecontext);

  const renderRecipe = data.map((recipe) => {
    return <RecipesCard key={recipe.id} recipe={recipe} />;
  });

  useEffect(() => {
    setdata(JSON.parse(localStorage.getItem("recipes")) || []);
  }, []);
  return (
    <div className="flex justify-evenly flex-wrap gap-12">
      {data.length === 0 ? (
        <h1 className="text-4xl opacity-30  h-[76vh]">
          No recipe found!
        </h1>
      ) : (
        <div className="flex justify-evenly mt-8 flex-wrap gap-12">
          {" "}
          {renderRecipe}{" "}
        </div>
      )}
    </div>
  );
};

export default Recipes;
