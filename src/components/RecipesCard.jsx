import { Link } from "react-router-dom";

const RecipesCard = (props) => {
  const { id, image, title, description, chief, category } = props.recipe;

  return (
    <Link
      to={`/recipes/details/${id}`}
      className="block w-[25vw] overflow-hidden rounded p-3 border relative "
    >
      <span
        className="
    absolute top-4 right-4
    px-3 py-1
    text-xs font-semibold
    tracking-wide
    rounded-full
    bg-zinc-900/70
    text-emerald-300
    backdrop-blur
    shadow-md z-1000
  "
      >
        {category}
      </span>

      <div className="overflow-hidden rounded">
        <img
          className="w-[100%] rounded object-cover h-[25vh] transition-transform duration-500 hover:scale-110 "
          src={image}
          alt={title}
        />
      </div>
      <h1 className="px-2 py-3 text-xl text-emerald-300 font-semibold">
        {title}
      </h1>
      <small className="px-2 py-3 text-lg text-red-400 font-semibold">
        {chief}
      </small>
      <p className="px-2 py-4 font-semithin">
        <b>Description: </b>
        {description.slice(0, 200)}...{" "}
        <small className="text-blue-400">more</small>
      </p>
    </Link>
  );
};

export default RecipesCard;
