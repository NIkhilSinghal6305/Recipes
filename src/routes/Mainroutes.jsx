import { Route, Routes } from "react-router-dom"
import Home from '../pages/Home'
import About from '../pages/About'
import Recipes from '../pages/Recipes'
import CreateRecipes from '../pages/CreateRecipes'
import SingleRecipes from '../pages/SingleRecipes'
import PageNotFound from "../pages/PageNotFound"
import Fav from "../pages/Fav"

const Mainroutes = () => {
   return (
      <Routes>
         <Route path="/" element={<Home />}/>
         <Route path="/about" element={<About/> } />
         <Route path="/recipes" element={<Recipes />} />
         <Route path="/recipes/details/:id" element={<SingleRecipes />} />
         <Route path="/create-recipes" element={<CreateRecipes />} />
         <Route path="/favorite-recipes" element={<Fav />} />
         <Route path="*" element={<PageNotFound />} />
         
     </Routes>
  )
}

export default Mainroutes