import { Heart, Users, BookOpen, Award, Sparkles, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const features = [
    {
      icon: <BookOpen className="text-orange-400" size={32} />,
      title: 'Vast Recipe Collection',
      description: 'Access thousands of recipes ranging from quick weeknight dinners to gourmet weekend projects.'
    },
    {
      icon: <Heart className="text-pink-400" size={32} />,
      title: 'Save Your Favorites',
      description: 'Create your personal cookbook by saving recipes you love and want to try again.'
    },
    {
      icon: <Users className="text-purple-400" size={32} />,
      title: 'Community Driven',
      description: 'Share your own recipes and connect with fellow food enthusiasts from around the world.'
    },
    {
      icon: <Award className="text-yellow-400" size={32} />,
      title: 'Quality Content',
      description: 'Every recipe is crafted with care, tested thoroughly, and includes detailed instructions.'
    }
  ];

  const stats = [
    { number: '1000+', label: 'Recipes Available' },
    { number: '500+', label: 'Active Users' },
    { number: '50+', label: 'Contributing Chefs' },
    { number: '1 lakh+', label: 'Recipe Views Monthly' }
  ];

  const team = [
    {
      name: 'Chef Maria Rodriguez',
      role: 'Culinary Director',
      specialty: 'Mediterranean Cuisine',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80'
    },
    {
      name: 'Chef David Chen',
      role: 'Asian Cuisine Expert',
      specialty: 'Japanese & Chinese',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80'
    },
    {
      name: 'Chef Sarah Johnson',
      role: 'Pastry Chef',
      specialty: 'Desserts & Baking',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80'
    }
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="text-center space-y-6 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-pink-500/20 border border-orange-500/30 px-4 py-2 rounded-full">
          <Sparkles className="text-orange-400" size={20} />
          <span className="text-sm">About Our Platform</span>
        </div>
        <h1 className="text-6xl font-light tracking-tight">
          Where Passion Meets
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500 font-normal">
            Delicious Food
          </span>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          We're a community of food lovers, home cooks, and professional chefs dedicated to making cooking accessible, 
          enjoyable, and inspiring for everyone. From beginners to experts, everyone has a place at our table.
        </p>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center space-y-2">
            <div className="text-4xl font-light text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">
              {stat.number}
            </div>
            <div className="text-sm text-gray-400">{stat.label}</div>
          </div>
        ))}
      </section>

      {/* Mission Section */}
      <section className="bg-gray-700 border border-gray-600 rounded-3xl p-12 space-y-6">
        <h2 className="text-4xl font-light text-center">Our Mission</h2>
        <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto leading-relaxed">
          Our mission is to inspire and empower people to cook delicious, healthy meals at home. 
          We believe that cooking should be fun, accessible, and rewarding. Whether you're looking for 
          a quick weeknight dinner or planning an elaborate feast, we're here to guide you every step of the way.
        </p>
      </section>

      {/* Features Grid */}
      <section className="space-y-8">
        <h2 className="text-4xl font-light text-center">Why Choose Us</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-4 hover:border-orange-500 transition-all"
            >
              <div className="bg-gray-800 w-16 h-16 rounded-xl flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-normal">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="space-y-8">
        <div className="text-center space-y-3">
          <h2 className="text-4xl font-light">Meet Our Culinary Team</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our team of passionate chefs and food experts work tirelessly to bring you the best recipes 
            and cooking tips from around the world.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="group bg-gray-700 border border-gray-600 rounded-2xl overflow-hidden hover:border-orange-500 transition-all"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-2">
                <h3 className="text-xl font-normal">{member.name}</h3>
                <p className="text-orange-400 text-sm">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gradient-to-r from-orange-500/20 to-pink-500/20 border border-orange-500/30 rounded-3xl p-12 space-y-8">
        <h2 className="text-4xl font-light text-center">Our Core Values</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="space-y-3">
            <div className="text-4xl">🌟</div>
            <h3 className="text-xl font-normal">Quality First</h3>
            <p className="text-gray-300">Every recipe is tested and refined to ensure success in your kitchen.</p>
          </div>
          <div className="space-y-3">
            <div className="text-4xl">🤝</div>
            <h3 className="text-xl font-normal">Community</h3>
            <p className="text-gray-300">We believe in the power of sharing knowledge and experiences.</p>
          </div>
          <div className="space-y-3">
            <div className="text-4xl">💡</div>
            <h3 className="text-xl font-normal">Innovation</h3>
            <p className="text-gray-300">Always exploring new flavors, techniques, and culinary trends.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center space-y-6 bg-gray-700 border border-gray-600 rounded-3xl p-12">
        <Mail className="mx-auto text-orange-400" size={48} />
        <h2 className="text-4xl font-light">Join Our Community Today</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Start exploring thousands of recipes, save your favorites, and share your own culinary creations with 
          food lovers around the world.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            to="/recipes"
            className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-8 py-3 rounded-full font-normal transition-all hover:scale-105"
          >
            Browse Recipes
          </Link>
          <Link
            to="/create-recipes"
            className="bg-gray-600 hover:bg-gray-500 text-white px-8 py-3 rounded-full font-normal transition-all"
          >
            Share Your Recipe
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;