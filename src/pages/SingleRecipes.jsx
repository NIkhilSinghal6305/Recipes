import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { recipecontext } from "../context/RecipeContext";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const SingleRecipes = () => {
  const navigate = useNavigate();
  const { data, setdata } = useContext(recipecontext);
  const param = useParams();

  const recipe = data.find((recipe) => param.id == recipe.id);

  const { register, handleSubmit, reset } = useForm();

  const [favorite, setFavorite] = useState(
    JSON.parse(localStorage.getItem("fav")) || []
  );

  useEffect(() => {
    if (recipe) {
      reset({
        title: recipe?.title,
        chief: recipe?.chief,
        description: recipe?.description,
        category: recipe?.category,
        image: recipe?.image,
        instructions: recipe?.instructions,
        ingredients: recipe?.ingredients,
      });
    }
  }, [recipe, reset]);

  const updatehandler = (updatedRecipe) => {
    const index = data.findIndex((recipe) => recipe.id == param.id);
    const copydata = [...data];
    copydata[index] = { ...data[index], ...updatedRecipe };
    setdata(copydata);
    localStorage.setItem("recipes", JSON.stringify(copydata));
    toast.success("Recipe Updated");
  };

  const deletehandler = () => {
    const filterdata = data.filter((recipe) => recipe.id != param.id);
    setdata(filterdata);
    localStorage.setItem("recipes", JSON.stringify(filterdata));
    
    const filterfavdata = favorite.filter((recipe) => recipe.id != param.id);
    setFavorite(filterfavdata);
    localStorage.setItem("fav", JSON.stringify(filterfavdata));
    
    toast.warn("Recipe Deleted!!");
    navigate("/recipes");
  };

  const Favhandler = () => {
    const updatedFav = [...favorite, recipe];
    setFavorite(updatedFav);
    localStorage.setItem("fav", JSON.stringify(updatedFav));
    toast.success("Added to favorites ❤️");
  };

  const Unfavhandler = () => {
    const updatedFav = favorite.filter((f) => f.id !== recipe.id);
    setFavorite(updatedFav);
    localStorage.setItem("fav", JSON.stringify(updatedFav));
    toast.info("Removed from favorites 💔");
  };

  if (!recipe) return null;

  return (
    
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
        <div className="flex-1 flex flex-col gap-6 relative">
          {favorite.find((f) => f.id == recipe?.id) ? (
            <i
              onClick={Unfavhandler}
              className="ri-poker-hearts-fill text-3xl text-red-400 absolute right-0 cursor-pointer"
            ></i>
          ) : (
            <i
              onClick={Favhandler}
              className="ri-poker-hearts-line text-3xl text-red-400 absolute right-0 cursor-pointer"
            ></i>
          )}

        <h1 className="text-5xl pr-10">{recipe.title}</h1>
        <div className="overflow-hidden rounded">
         <img 
           className="w-[100%] rounded object-cover h-[50vh] transition-transform duration-500 hover:scale-110" 
           src={recipe.image} 
           alt={recipe.title} 
         />
       </div>
          
          <h1 className="text-3xl font-semibold">{recipe.chief}</h1>
          <small className="text-green-500 text-lg">
            {recipe.category}
          </small>
          <p className="break-words">
            <span className="font-bold">Description:</span> {recipe.description}
          </p>
          <p className="break-words">
            <span className="font-bold">Instructions:</span> {recipe.instructions}
          </p>
          <p className="break-words">
            <span className="font-bold">Ingredients:</span> {recipe.ingredients}
          </p>
        </div>

        <div className="hidden lg:block bg-white w-px flex-shrink-0"></div>

        <form
          onSubmit={handleSubmit(updatehandler)}
          className="flex-1 flex flex-col gap-7"
        >
          <div className="flex flex-col gap-1">
            <input
              className="w-full py-2 px-5 text-lg border-b outline-0"
              {...register("image")}
              type="url"
              placeholder="Enter image url"
            />
          </div>

          <div className="flex flex-col gap-1">
            <input
              className="w-full py-2 px-5 text-xl border-b outline-0"
              {...register("title")}
              type="text"
              placeholder="Recipe title..."
            />
          </div>

          <div className="flex flex-col gap-1">
            <input
              className="w-full py-2 px-5 text-xl border-b outline-0"
              {...register("chief")}
              type="text"
              placeholder="Chief name..."
            />
          </div>

          <div className="flex flex-col gap-1">
            <textarea
              className="w-full outline-0 border-b px-2 py-2 min-h-[130px]"
              {...register("description")}
              placeholder="Enter recipe description..."
            ></textarea>
          </div>

          <div className="flex flex-col gap-1">
            <textarea
              className="w-full outline-0 border-b px-2 py-2 min-h-[130px]"
              {...register("instructions")}
              placeholder="Enter recipe instruction..."
            ></textarea>
          </div>

          <div className="flex flex-col gap-1">
            <textarea
              className="w-full outline-0 border-b px-2 py-2 min-h-[80px]"
              {...register("ingredients")}
              placeholder="Enter recipe ingredients..."
            ></textarea>
          </div>

          <div>
            <select
              {...register("category")}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition cursor-pointer"
            >
              <option value="">Select Category</option>
              <option value="Breakfast">Breakfast</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
              <option value="other">other</option>
            </select>
          </div>

          <button className="w-full px-5 py-2 rounded bg-sky-600 font-semithin text-lg text-white">
            Update recipe
          </button>

          <button
            type="button"
            onClick={deletehandler}
            className="w-full px-5 py-2 rounded bg-red-500 font-semithin text-lg text-white"
          >
            Delete recipe
          </button>
        </form>
      </div>
    
  );
};

export default SingleRecipes;