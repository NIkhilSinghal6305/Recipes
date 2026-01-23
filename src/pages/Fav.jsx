import RecipesCard from "../components/RecipesCard";

const Fav = () => {
  const favourite = JSON.parse(localStorage.getItem("fav") || "[]");

  return (
    <div className="flex justify-evenly mt-8 flex-wrap gap-12">
      {favourite.length > 0 ? (
        favourite.map((recipe) => (
          <RecipesCard key={recipe.id} recipe={recipe} />
        ))
      ) : (
        <p className="text-4xl text-center opacity-30">
          No favorite found!
        </p>
      )}
    </div>
  );
};

export default Fav;
