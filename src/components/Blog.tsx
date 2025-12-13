import React, { useState } from 'react'; // 1. Added useState
import { Search, Tag, Calendar, User, ArrowRight } from 'lucide-react'; // 2. Added missing icons

// Note: ImageWithFallback component import has been removed as requested.

// Define the type for a blog post for better type safety
interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
}

// Renamed to 'Blog' as per the App.tsx file structure
export default function Blog() { 
  // 3. Added missing state definitions
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Static list of all available categories for the filter buttons
  const categories = ['All', 'DIY Cleaning', 'Sustainability', 'Health & Safety', 'Product Reviews'];

  // Static Blog Data
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Top 5 Eco-Friendly Swaps for Your Kitchen',
      excerpt: 'Make your kitchen green with these simple, sustainable product alternatives.',
      image: 'https://images.unsplash.com/photo-1714479120969-436c216a3cd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRocm9vbSUyMGNsZWFuaW5nfGVufDF8fHx8MTc2NTUyNTg3MXww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'DIY Cleaning',
      author: 'Aisha Sharma',
      date: 'December 10, 2025',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'A Deep Dive into Our Concentrated Cleaners',
      excerpt: 'Discover the power and cost-effectiveness of our super-concentrated cleaning solutions.',
      image: 'https://images.unsplash.com/photo-1624372635310-01d078c05dd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXVuZHJ5JTIwZGV0ZXJnZW50fGVufDF8fHx8MTc2NTU0NTA0Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Product Reviews',
      author: 'Priya Verma',
      date: 'December 8, 2025',
      readTime: '8 min read'
    },
    {
      id: 3,
      title: 'Natural Cleaning Techniques for a Sparkling Clean Bathroom',
      excerpt: 'Use natural cleaning techniques for a sparkling clean bathroom without harsh chemicals.',
      image: 'https://images.unsplash.com/photo-1714479120969-436c216a3cd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRocm9vbSUyMGNsZWFuaW5nfGVufDF8fHx8MTc2NTUyNTg3MXww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'DIY Cleaning',
      author: 'Anjali Gupta',
      date: 'December 5, 2025',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'Understanding Biodegradable Products',
      excerpt: 'What makes a product biodegradable? Learn about the science behind eco-friendly cleaning solutions.',
      image: 'https://images.unsplash.com/photo-1650964336686-7f7be9e35f35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwaG9tZSUyMGNsZWFuaW5nfGVufDF8fHx8MTc2NTU0NTA0NXww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Sustainability',
      author: 'Dr. Vikram Singh',
      date: 'December 3, 2025',
      readTime: '7 min read'
    },
    {
      id: 5,
      title: 'Safe Cleaning Practices for Homes with Pets',
      excerpt: 'Keep your furry friends safe while maintaining a clean home with these pet-friendly cleaning tips.',
      image: 'https://images.unsplash.com/photo-1707143598173-944230c2de24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbmluZyUyMHNwcmF5JTIwYm90dGxlfGVufDF8fHx8MTc2NTU0NTA0Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Health & Safety',
      author: 'Meera Patel',
      date: 'December 1, 2025',
      readTime: '5 min read'
    },
    {
      id: 6,
      title: 'The Environmental Impact of Conventional Cleaners',
      excerpt: 'Discover why traditional cleaning products harm the environment and what you can do about it.',
      image: 'https://images.unsplash.com/photo-1624372635310-01d078c05dd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXVuZHJ5JTIwZGV0ZXJnZW50fGVufDF8fHx8MTc2NTU0NTA0Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Sustainability',
      author: 'Arun Kumar',
      date: 'November 28, 2025',
      readTime: '9 min read'
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts[0];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl mb-6">Our Blog</h1>
          <p className="text-xl text-emerald-100 mb-8">
            Tips, guides, and insights for sustainable living
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-emerald-300"
            />
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl overflow-hidden shadow-xl -mt-20 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-80 lg:h-auto">
                {/* CORRECTION: Replaced ImageWithFallback with standard <img> */}
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-emerald-600 text-white px-4 py-2 rounded-full text-sm">
                  Featured
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <Tag className="w-4 h-4" />
                    {featuredPost.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {featuredPost.date}
                  </span>
                </div>
                <h2 className="text-3xl mb-4">{featuredPost.title}</h2>
                <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <User className="w-4 h-4" />
                    {featuredPost.author}
                  </div>
                  <button className="text-emerald-600 hover:text-emerald-700 inline-flex items-center gap-2 transition">
                    Read More
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition ${
                  selectedCategory === category
                    ? 'bg-emerald-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl mb-2">Latest Articles</h2>
            {/* Logic adjustment for accurate article count */}
            <p className="text-gray-600">
              Showing {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => ( // Removed .slice(1) to show all filtered posts
              <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition group">
                <div className="relative h-48 overflow-hidden">
                  {/* CORRECTION: Replaced ImageWithFallback with standard <img> */}
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs text-emerald-600">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl mb-3 group-hover:text-emerald-600 transition">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                    <button className="text-emerald-600 hover:text-emerald-700 inline-flex items-center gap-1 text-sm transition">
                      Read
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && ( // Corrected check to be 0
            <div className="text-center py-12">
              <p className="text-gray-500">No articles found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl mb-4">Never Miss an Article</h2>
          <p className="text-emerald-100 mb-8 text-lg">
            Subscribe to our newsletter and get the latest eco-tips delivered to your inbox
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-emerald-300"
            />
            <button className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 rounded-full transition transform hover:scale-105">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}