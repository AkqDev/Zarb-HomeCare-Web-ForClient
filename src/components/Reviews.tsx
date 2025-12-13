import React, { useState } from 'react';
import { Star, ThumbsUp, CheckCircle, Filter } from 'lucide-react';
// import { ImageWithFallback } from './figma/ImageWithFallback'; // REMOVED

// --- Type Definitions (Added for correctness) ---
interface Review {
  id: number;
  customerName: string;
  location: string;
  rating: number;
  date: string;
  verified: boolean;
  product: string;
  title: string;
  review: string;
  helpful: number;
  image?: string; // Optional image URL
}
// --- End Type Definitions ---

// Changed to default export
export default function Reviews() {
  const [filterRating, setFilterRating] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState('recent');

  const reviews: Review[] = [
    {
      id: 1,
      customerName: 'Priya Sharma',
      location: 'Mumbai, Maharashtra',
      rating: 5,
      date: 'December 10, 2025',
      verified: true,
      product: 'Eco Dish Wash Liquid',
      title: 'Amazing product! Worth every penny',
      review: 'I have been using this dish wash for the past 3 months and I am absolutely in love with it. Not only does it clean effectively, but I also feel good knowing that it\'s safe for my family and the environment. The lemon fragrance is so refreshing!',
      helpful: 24,
      image: 'https://images.unsplash.com/photo-1707143598173-944230c2de24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbmluZyUyMHNwcmF5JTIwYm90dGxlfGVufDF8fHx8MTc2NTU0NTA0Nnww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 2,
      customerName: 'Rahul Mehta',
      location: 'Delhi, NCR',
      rating: 5,
      date: 'December 8, 2025',
      verified: true,
      product: 'Natural Laundry Detergent',
      title: 'Best laundry detergent for sensitive skin',
      review: 'My daughter has very sensitive skin and we have tried countless detergents. This is the only one that doesn\'t cause any irritation. Plus, our clothes smell amazing and feel so soft. Highly recommended!',
      helpful: 18,
      image: 'https://images.unsplash.com/photo-1624372635310-01d078c05dd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxsYXVuZHJ5JTIwZGV0ZXJnZW50fGVufDF8fHx8MTc2NTU0NTA0Nnww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 3,
      customerName: 'Anjali Gupta',
      location: 'Bangalore, Karnataka',
      rating: 4,
      date: 'December 5, 2025',
      verified: true,
      product: 'Bathroom Deep Cleaner',
      title: 'Great cleaner, pleasant smell',
      review: 'Works really well on tough bathroom stains. The only reason I\'m giving 4 stars instead of 5 is that I wish the bottle was bigger. But overall, very satisfied with the product quality.',
      helpful: 12
    },
    {
      id: 4,
      customerName: 'Vikram Singh',
      location: 'Pune, Maharashtra',
      rating: 5,
      date: 'December 3, 2025',
      verified: true,
      product: 'Floor Cleaner - Lemon',
      title: 'Perfect for homes with pets',
      review: 'I have two dogs and I was always worried about using harsh chemicals on the floor. This cleaner is perfect - completely safe for my pets and leaves the house smelling fresh. My floors have never been cleaner!',
      helpful: 31,
      image: 'https://images.unsplash.com/photo-1650964336589-96b3f1719a7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxlY28lMjBjbGVhbmluZyUyMHByb2R1Y3RzfGVufDF8fHx8MTc2NTQzNzM1NXww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 5,
      customerName: 'Meera Patel',
      location: 'Ahmedabad, Gujarat',
      rating: 5,
      date: 'December 1, 2025',
      verified: true,
      product: 'Gentle Hand Wash - Lavender',
      title: 'Luxurious and eco-friendly!',
      review: 'The lavender scent is divine! My hands feel so soft after washing and I love that it\'s made with natural ingredients. The whole family loves it. Will definitely repurchase.',
      helpful: 15
    },
    {
      id: 6,
      customerName: 'Arun Kumar',
      location: 'Chennai, Tamil Nadu',
      rating: 4,
      date: 'November 28, 2025',
      verified: true,
      product: 'All-Purpose Spray',
      title: 'Very versatile product',
      review: 'I use this spray for kitchen counters, bathroom tiles, and even windows. Works well on all surfaces. Good value for money. Would love to see a bigger size option.',
      helpful: 9
    },
    {
      id: 7,
      customerName: 'Kavita Reddy',
      location: 'Hyderabad, Telangana',
      rating: 5,
      date: 'November 25, 2025',
      verified: true,
      product: 'Baby-Safe Floor Cleaner',
      title: 'Peace of mind for new parents',
      review: 'As a new mom, I\'m very careful about what products I use around my baby. This floor cleaner is perfect - effective, safe, and no harsh chemical smell. My baby crawls on the floor without any worries now.',
      helpful: 27,
      image: 'https://images.unsplash.com/photo-1650964336686-7f7be9e35f35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxuYXR1cmFsJTIwaG9tZSUyMGNsZWFuaW5nfGVufDF8fHx8MTc2NTU0NTA0NXww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 8,
      customerName: 'Sanjay Joshi',
      location: 'Jaipur, Rajasthan',
      rating: 5,
      date: 'November 22, 2025',
      verified: true,
      product: 'Toilet Bowl Cleaner',
      title: 'Powerful yet eco-friendly',
      review: 'I was skeptical that a natural cleaner could work as well as chemical ones, but this proved me wrong! It removes tough stains and leaves the toilet sparkling clean. Plus, no toxic fumes!',
      helpful: 20
    }
  ];

  const filteredReviews = reviews.filter(review => {
    if (filterRating === null) return true;
    return review.rating === filterRating;
  });

  const sortedReviews = [...filteredReviews].sort((a, b) => {
    if (sortBy === 'helpful') {
      // Sort by helpful count (descending)
      return b.helpful - a.helpful;
    } else if (sortBy === 'rating-high') {
      // Sort by rating (descending)
      return b.rating - a.rating;
    } else if (sortBy === 'rating-low') {
      // Sort by rating (ascending)
      return a.rating - b.rating;
    }
    // Default: Sort by date. Since the mock data is already sorted by date,
    // we use 0 to maintain that order unless overridden. For real data,
    // you would compare date objects.
    return 0;
  });

  const totalReviews = reviews.length;
  const averageRating = totalReviews > 0 
    ? (reviews.reduce((sum, r) => sum + r.rating, 0) / totalReviews).toFixed(1)
    : '0.0'; // Handle case with no reviews

  const ratingDistribution = [5, 4, 3, 2, 1].map(star => ({
    star,
    count: reviews.filter(r => r.rating === star).length,
    percentage: totalReviews > 0 
      ? (reviews.filter(r => r.rating === star).length / totalReviews) * 100
      : 0
  }));

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-20 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Customer Reviews</h1>
          <p className="text-xl text-emerald-100">
            See what our happy customers have to say about EcoClean products
          </p>
        </div>
      </section>

      {/* Rating Overview */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl -mt-20 relative z-10 border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Overall Rating */}
              <div className="text-center md:border-r md:border-gray-200 pr-6">
                <div className="text-6xl font-bold text-emerald-600 mb-2">{averageRating}</div>
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-6 h-6 ${
                        star <= Math.round(parseFloat(averageRating))
                          ? 'fill-amber-400 text-amber-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-600 font-medium">Based on {totalReviews} verified reviews</p>
                <div className="mt-6 p-3 bg-emerald-50 rounded-lg inline-block">
                  <p className="text-sm text-emerald-700 font-semibold flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    {/* Simplified calculation for mock data: 96% based on original data */}
                    96% of customers recommend our products
                  </p>
                </div>
              </div>

              {/* Rating Distribution */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Rating Breakdown</h3>
                {ratingDistribution.map(({ star, count, percentage }) => (
                  <div key={star} className="flex items-center gap-4">
                    <div className="flex items-center gap-1 w-20 justify-end text-gray-700">
                      <span className="text-sm font-medium">{star}</span>
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    </div>
                    <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-amber-400 to-orange-400 transition-all duration-500 rounded-full"
                        style={{ width: `${percentage}%` }}
                        role="progressbar"
                        aria-valuenow={percentage}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                    <span className="text-sm text-gray-600 w-12 text-right">{count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Sort */}
      <section className="py-8 bg-white border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-emerald-600" />
                <span className="text-md font-medium text-gray-700">Filter by rating:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setFilterRating(null)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition shadow-sm ${
                    filterRating === null
                      ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  All ({totalReviews})
                </button>
                {[5, 4].map((rating) => (
                  <button
                    key={rating}
                    onClick={() => setFilterRating(rating)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition shadow-sm flex items-center gap-1 ${
                      filterRating === rating
                        ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {rating}
                    <Star className="w-3 h-3 fill-current" />
                  </button>
                ))}
              </div>
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full md:w-auto px-4 py-2 rounded-lg border border-gray-300 bg-white focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 focus:outline-none text-sm font-medium"
              aria-label="Sort reviews by"
            >
              <option value="recent">Most Recent</option>
              <option value="helpful">Most Helpful</option>
              <option value="rating-high">Highest Rating</option>
              <option value="rating-low">Lowest Rating</option>
            </select>
          </div>
        </div>
      </section>

      {/* Reviews List */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-8">
            {sortedReviews.map((review) => (
              <div key={review.id} className="bg-white rounded-xl p-6 md:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition duration-300">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Review Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className='font-semibold text-lg'>{review.customerName}</span>
                          {review.verified && (
                            <span className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full text-xs font-medium border border-emerald-300">
                              <CheckCircle className="w-3 h-3 fill-emerald-500" />
                              Verified Buyer
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600">{review.location}</p>
                      </div>
                      <p className="text-sm text-gray-500 pt-1">{review.date}</p>
                    </div>

                    <div className="flex items-center gap-1 mb-3">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-5 h-5 ${
                            star <= review.rating
                              ? 'fill-amber-400 text-amber-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>

                    <div className="mb-4">
                      <p className="text-xs font-medium text-emerald-600 mb-2">
                        Purchased: {review.product}
                      </p>
                      <h3 className="text-xl font-bold mb-2">{review.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{review.review}</p>
                    </div>

                    {review.image && (
                      <div className="mb-4 pt-2">
                        {/* CORRECTION: Replaced ImageWithFallback with standard <img> */}
                        <div className="w-32 h-32 rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                          <img
                            src={review.image}
                            alt={`Product image for review by ${review.customerName}`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    )}

                    <div className="flex items-center gap-4 pt-2 border-t border-gray-100">
                      <button className="text-sm text-gray-600 hover:text-emerald-600 inline-flex items-center gap-1 transition font-medium">
                        <ThumbsUp className="w-4 h-4" />
                        Helpful ({review.helpful})
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {sortedReviews.length === 0 && (
            <div className="text-center py-12 bg-white rounded-xl shadow-md mt-6">
              <p className="text-gray-500 text-xl font-medium">
                No reviews found matching your selected rating filter.
              </p>
              {filterRating !== null && (
                <button
                    onClick={() => setFilterRating(null)}
                    className="mt-4 text-emerald-600 hover:text-emerald-700 font-medium"
                >
                    Show All Reviews
                </button>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Write Review CTA */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Share Your Experience</h2>
          <p className="text-emerald-100 mb-8 text-lg">
            Have you tried our products? We'd love to hear your feedback!
          </p>
          <button className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-bold transition transform hover:scale-105 shadow-2xl">
            Write a Review
          </button>
        </div>
      </section>
    </div>
  );
}




