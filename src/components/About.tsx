import React from 'react';
import { Leaf, Heart, Users, Award, Target, Lightbulb } from 'lucide-react';

// CORRECTED: Using 'export default function' to resolve the import error in App.tsx

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-br from-emerald-600 to-teal-600 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1697788189761-d954ed91cdb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMHBsYW50cyUyMG5hdHVyZXxlbnwxfHx8fDE3NjU1MDg2NTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="About Us"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl mb-6">About EcoClean</h1>
            <p className="text-xl text-emerald-100">
              We're on a mission to make sustainable cleaning accessible to every Indian household
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  EcoClean was born from a simple belief: cleaning your home shouldn't come at the cost of harming the planet. Founded in 2020, we started with a small team of environmental enthusiasts determined to create effective cleaning solutions that are safe for families and the environment.
                </p>
                <p>
                  Today, we're proud to serve over 50,000 households across India with our range of 100% natural, biodegradable cleaning products. Every product we create is carefully formulated to be tough on dirt but gentle on your home and the planet.
                </p>
                <p>
                  Our commitment goes beyond just products. We're building a community of conscious consumers who believe that small changes in daily habits can create a significant positive impact on our environment.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1650964336589-96b3f1719a7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY28lMjBjbGVhbmluZyUyMHByb2R1Y3RzfGVufDF8fHx8MTc2NTQzNzM1NXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Our Story"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Our Values</h2>
            <p className="text-gray-600 text-lg">The principles that guide everything we do</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl mb-3">100% Natural</h3>
              <p className="text-gray-600">
                Every ingredient is plant-based and biodegradable, ensuring zero harm to the environment
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl mb-3">Family Safe</h3>
              <p className="text-gray-600">
                Formulated to be gentle and safe for kids, pets, and those with sensitive skin
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl mb-3">Quality First</h3>
              <p className="text-gray-600">
                Eco-friendly doesn't mean compromising on effectiveness - our products work brilliantly
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-emerald-600 to-teal-600 text-white p-10 rounded-2xl">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8" />
              </div>
              <h2 className="text-3xl mb-4">Our Mission</h2>
              <p className="text-emerald-100 text-lg">
                To provide every Indian household with effective, affordable, and eco-friendly cleaning solutions that protect both families and the planet, making sustainable living accessible to all.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white p-10 rounded-2xl">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8" />
              </div>
              <h2 className="text-3xl mb-4">Our Vision</h2>
              <p className="text-blue-100 text-lg">
                To become India's most trusted eco-cleaning brand, inspiring millions to adopt sustainable practices and creating a cleaner, greener future for generations to come.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}