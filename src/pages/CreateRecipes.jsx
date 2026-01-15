import { nanoid } from "nanoid";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { recipecontext } from "../context/RecipeContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CreateRecipes = () => {
  const navigate = useNavigate();
  const { data, setdata } = useContext(recipecontext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submithandler = (recipe) => {
    recipe.id = nanoid();
    const copydata = [...data];
    copydata.push(recipe)
    setdata(copydata);
    localStorage.setItem("recipes", JSON.stringify(copydata))
    reset();
    toast.success("Reciepe Created!!");
    navigate("/recipes");
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(submithandler)}
        className="flex flex-col gap-7 w-[50%] ml-75"
      >
        <div className="flex flex-col gap-1 ">
          <input
            className="py-2 px-5 text-lg border-b outline-0 "
            {...register("image", { required: "This can not be empty" })}
            type="url"
            placeholder="Enter image url"
          />
          <small className="text-red-300 text-sm">
            {errors?.image?.message}
          </small>
        </div>

        <div className="flex flex-col gap-1 ">
          <input
            className="py-2 px-5 text-xl border-b outline-0 "
            {...register("title", { required: "This can not be empty" })}
            type="text"
            placeholder="Recipe title..."
          />
          <small className="text-red-300 text-sm">
            {errors?.title?.message}
          </small>
        </div>

        <div className="flex flex-col gap-1 ">
          <input
            className="py-2 px-5 text-xl border-b outline-0 "
            {...register("chief", { required: "This can not be empty" })}
            type="text"
            placeholder="Chief name..."
          />
          <small className="text-red-300 text-sm">
            {errors?.chief?.message}
          </small>
        </div>

        <div className="flex flex-col gap-1 ">
          <textarea
            className="outline-0 border-b px-2 mt-4 ml-5m min-h-21"
            {...register("description", { required: "This can not be empty" })}
            placeholder="Enter recipe description..."
          ></textarea>
          <small className="text-red-300 text-sm ml-5">
            {errors?.description?.message}
          </small>
        </div>

        <div className="flex flex-col gap-1 ">
          <textarea
            className="outline-0 border-b px-2 mt-4 ml-5 min-h-18"
            {...register("instructions", { required: "This can not be empty" })}
            placeholder="Enter recipe instruction..."
          ></textarea>
          <small className="text-red-300 text-sm ml-5">
            {errors?.instructions?.message}
          </small>
        </div>

        <div className="flex flex-col gap-1 ">
          <textarea
            className="outline-0 border-b px-2 mt-4 ml-5 min-h-18"
            {...register("ingredients", { required: "This can not be empty" })}
            placeholder="Enter recipe ingredients..."
          ></textarea>
          <small className="text-red-300 text-sm ml-5">
            {errors?.ingredients?.message}
          </small>
        </div>
        <div>
          <select
            {...register("category", { required: "This can not be empty" })}
            className="
    block w-64
    mt-4 ml-5
    px-3 py-2
    border border-gray-300
    rounded-md
    bg-white
    text-gray-700
    focus:outline-none
    focus:ring-2
    focus:ring-blue-500
    focus:border-blue-500
    transition
    cursor-pointer
  "
          >
            <option value="">Select Category</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="other">other</option>
          </select>
          <small className="text-red-300 text-sm ml-5">
            {errors?.category?.message}
          </small>
        </div>

        <button className="px-5 py-2 rounded bg-gray-600 font-semithin text-lg ml-5">
          Save recipe
        </button>
      </form>
    </div>
  );
};

export default CreateRecipes;
