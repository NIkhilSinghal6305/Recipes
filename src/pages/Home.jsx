import { useState, useContext, useEffect } from 'react';
import { Search, ChefHat, TrendingUp, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { recipecontext } from '../context/RecipeContext';
import { toast } from 'react-toastify';

const Home = () => {
  const navigate = useNavigate();
  const { data } = useContext(recipecontext);
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(JSON.parse(localStorage.getItem("fav")) || []);
  }, []);

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      toast.info("Please enter a recipe name to search");
      return;
    }

    // Search for exact or partial match in recipe titles
    const foundRecipe = data.find(recipe => 
      recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (foundRecipe) {
      // Navigate directly to the recipe details page
      navigate(`/recipes/details/${foundRecipe.id}`);
      setSearchQuery('');
    } else {
      // Show not found message
      toast.error(`Recipe "${searchQuery}" not found! Try browsing all recipes.`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  // Get latest 3 recipes
  const featuredRecipes = data.slice(-3).reverse();

  // Count recipes by category
  const categoryCounts = {
    Breakfast: data.filter(r => r.category === 'Breakfast').length,
    Lunch: data.filter(r => r.category === 'Lunch').length,
    Dinner: data.filter(r => r.category === 'Dinner').length,
  };

  const categories = [
    { name: 'Breakfast', icon: '🍳', count: categoryCounts.Breakfast },
    { name: 'Lunch', icon: '🥗', count: categoryCounts.Lunch },
    { name: 'Dinner', icon: '🍝', count: categoryCounts.Dinner },
    { name: 'Favorites', icon: '❤️', count: favorites.length },
    { name: 'All Recipes', icon: '📖', count: data.length },
    { name: 'Create New', icon: '✨', count: '+' }
  ];

  const handleCategoryClick = (categoryName) => {
    if (categoryName === 'Create New') {
      navigate('/create-recipes');
    } else if (categoryName === 'Favorites') {
      navigate('/favorites');
    } else {
      navigate('/recipes');
    }
  };

  const NumOfrecipe = JSON.parse(localStorage.getItem("recipes")).length;
  const NumOfFav = JSON.parse(localStorage.getItem("fav")).length;
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl font-light tracking-tight">
              Discover Your Next
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500 font-normal">
                Favorite Recipe
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Explore delicious recipes, save your favorites, and share your culinary creations with the world.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search for a specific recipe by name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onClick={handleKeyPress}
              className="w-full px-6 py-4 pl-14 bg-gray-700 border border-gray-600 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
            />
            <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <button
              onClick={handleSearch}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-6 py-2 rounded-full transition-all"
            >
              Search
            </button>
          </div>

          {/* Quick Stats */}
          <div className="flex justify-center gap-12 pt-4">
            <div className="text-center">
              <div className="text-3xl font-light text-orange-400">{NumOfrecipe}</div>
              <div className="text-sm text-gray-400">Recipes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-pink-400">{NumOfFav}</div>
              <div className="text-sm text-gray-400">Favorites</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-purple-400">{Object.keys(categoryCounts).length}</div>
              <div className="text-sm text-gray-400">Categories</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-light">Browse by Category</h2>
          <Link to="/recipes" className="text-orange-400 hover:text-orange-300 transition-colors flex items-center gap-2">
            View All <ArrowRight size={18} />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => handleCategoryClick(category.name)}
              className="group bg-gray-700 hover:bg-gray-600 border border-gray-600 rounded-xl p-6 transition-all hover:scale-105 hover:border-orange-500"
            >
              <div className="text-4xl mb-2">{category.icon}</div>
              <div className="text-sm font-normal mb-1">{category.name}</div>
              <div className="text-xs text-gray-400">{category.count} {category.count === '+' ? '' : 'recipes'}</div>
            </button>
          ))}
        </div>
      </section>

      {/* Featured Recipes */}
      {featuredRecipes.length > 0 && (
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <TrendingUp className="text-orange-400" size={28} />
            <h2 className="text-3xl font-light">Recent Recipes</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredRecipes.map((recipe) => (
              <Link
                key={recipe.id}
                to={`/recipes/details/${recipe.id}`}
                className="group bg-gray-700 border border-gray-600 rounded-2xl overflow-hidden hover:border-orange-500 transition-all"
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                    {recipe.category}
                  </div>
                </div>
                <div className="p-5 space-y-3">
                  <h3 className="text-xl font-normal group-hover:text-orange-400 transition-colors line-clamp-1">
                    {recipe.title}
                  </h3>
                  <p className="text-sm text-gray-400 line-clamp-2">{recipe.description}</p>
                  <div className="flex items-center gap-2 text-sm text-emerald-400">
                    <ChefHat size={16} />
                    <span>{recipe.chief}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="relative">
        <div className="bg-gradient-to-r from-orange-500/20 to-pink-500/20 border border-orange-500/30 rounded-3xl p-12 text-center space-y-6">
          <ChefHat className="mx-auto text-orange-400" size={48} />
          <div className="space-y-3">
            <h2 className="text-4xl font-light">Share Your Culinary Creations</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Join our community of passionate cooks and share your favorite recipes with food lovers around the world.
            </p>
          </div>
          <Link
            to="/create-recipes"
            className="inline-block bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-8 py-3 rounded-full font-normal transition-all hover:scale-105"
          >
            Create Your Recipe
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;