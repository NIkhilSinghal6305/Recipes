import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
     <div className="flex gap-20 justify-center items-center h-[10vh] text-xl mt-2">
        <NavLink className={(e) => e.isActive? "text-pink-600":""} to="/">Home</NavLink>
        <NavLink className={(e) => e.isActive? "text-pink-600":""} to="/about">About</NavLink>
        <NavLink className={(e) => e.isActive? "text-pink-600":""} to="/recipes">Recipes</NavLink>
        <NavLink className={(e) => e.isActive? "text-pink-600":""} to="/create-recipes">Create Recipes</NavLink>
        <NavLink className={(e) => e.isActive? "text-pink-600":""} to="/favorite-recipes">Favorite</NavLink>
    </div>
  )
}

export default Navbar