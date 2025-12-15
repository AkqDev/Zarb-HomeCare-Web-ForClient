import { motion } from "framer-motion";  // runtime import
import type { Variants } from "framer-motion"; // type-only import
import {
  Leaf,
  Shield,
  Sparkles,
  Wind,
  Users,
  ShieldCheck,
} from "lucide-react";
import { message } from "antd";

import herobg from "../assets/main_bg.jpg";
import mbg from "../assets/mbg.png";
import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";
import product4 from "../assets/product4.jpg";

import type { Product, OnAddToCart } from "../types";
import type { FormEvent, ReactNode } from "react";

/* ---------------- GOOGLE FONTS (SAFE WAY) ---------------- */
if (!document.getElementById("google-fonts")) {
  const link = document.createElement("link");
  link.id = "google-fonts";
  link.rel = "stylesheet";
  link.href =
    "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&family=Inter:wght@300;400;500;700&display=swap";
  document.head.appendChild(link);
}

/* ---------------- ANIMATIONS ---------------- */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};


const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

interface HomepageProps {
  onAddToCart: OnAddToCart;
}

export default function Homepage({ onAddToCart }: HomepageProps) {
  const featuredProducts: Product[] = [
    {
      id: "1",
      name: "ZARB Stainless Steel Scourers (Jumbo Size)",
      category: "Kitchen Cleaning",
      price: 199,
      image: product1,
      variants: ["standard"],
    },
    {
      id: "2",
      name: "ZARB Dish Washing Liquid",
      category: "Dishwashing Liquid",
      price: 249,
      image: product2,
      variants: ["250ml", "500ml"],
    },
    {
      id: "3",
      name: "ZARB Nail Saver Dish Sponge / Scrubber",
      category: "Dish Sponge & Scrubber",
      price: 229,
      image: product3,
      variants: ["standard"],
    },
    {
      id: "4",
      name: "ZARB Nail Saver Dish Sponge",
      category: "Heavy-Duty Scrub Sponge",
      price: 259,
      image: product4,
      variants: ["standard"],
    },
  ];

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    message.success({ content: "Thanks for subscribing!", duration: 3 });
  };

  return (
    <div className="bg-white font-[Poppins]">
      {/* HERO */}
<section className="relative h-[500px] md:h-[650px] overflow-hidden">
  {/* Desktop Hero */}
  <motion.img
    initial={{ scale: 1.15 }}
    animate={{ scale: 1 }}
    transition={{ duration: 1.5, ease: [0.42, 0, 0.58, 1] }}
    src={herobg}
    className="hidden md:block absolute inset-0 w-full h-full object-cover"
  />

  {/* Mobile Hero */}
  <motion.img
    initial={{ scale: 1.15 }}
    animate={{ scale: 1 }}
    transition={{ duration: 1.5, ease: [0.42, 0, 0.58, 1] }}
    src={mbg}
    className="block md:hidden absolute inset-0 w-full h-full object-contain bg-black"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/20" />
</section>


      {/* ---------------- FEATURES ---------------- */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="py-16 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">
          {[
            {
              icon: <Leaf className="w-8 h-8 text-[#786808]" />,
              title: "Natural Lemon Power",
              desc: "Enriched with real lemon extracts for a sparkling shine.",
            },
            {
              icon: <Shield className="w-8 h-8 text-[#786808]" />,
              title: "Gentle on Hands",
              desc: "Protects your hands after daily use.",
            },
            {
              icon: <Sparkles className="w-8 h-8 text-[#786808]" />,
              title: "Cuts Grease Instantly",
              desc: "Removes tough oil and stains fast.",
            },
            {
              icon: <Wind className="w-8 h-8 text-[#786808]" />,
              title: "Fresh Lemon Aroma",
              desc: "Leaves utensils smelling fresh.",
            },
          ].map((f, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -6, scale: 1.05 }}
            >
              <Feature {...f} />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ---------------- PRODUCTS ---------------- */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="py-10 mb-5"
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.div variants={fadeUp} className="text-center mb-8">
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <p className="text-gray-600 text-sm">
              Top-selling utensils liquids
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <motion.div
                key={product.id}
                variants={fadeUp}
                whileHover={{ scale: 1.04 }}
              >
                <ProductCard
                  product={product}
                  onAddToCart={() =>
                    onAddToCart(product, product.variants[0])
                  }
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ---------------- WHY CHOOSE ZARB ---------------- */}
      <section className="my-10 w-full bg-[#786808] font-['Inter']">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeUp}
          className="text-center py-12 text-white"
        >
          <h1 className="font-bold text-3xl mb-2">Why Choose Zarb?</h1>
          <p className="font-medium text-sm opacity-90">
            Trusted by thousands of homes
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 px-6">
          {[
            { icon: <Users />, title: "50,000+", text: "Happy customer's" },
            { icon: <ShieldCheck />, title: "Premium", text: "Quality Assurance" },
            { icon: <Leaf />, title: "Zero Chemicals", text: "Safe & Natural" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={fadeUp}
              whileHover={{ y: -8, scale: 1.05 }}
              className="flex flex-col items-center text-center text-white"
            >
              <div className="mb-3 bg-gray-200 rounded-full p-3 text-[#786808]">
                {item.icon}
              </div>
              <h2 className="text-3xl font-bold text-gray-100">{item.title}</h2>
              <p className="text-sm mt-1 opacity-90">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------------- NEWSLETTER ---------------- */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={fadeUp}
        className="py-16 bg-white"
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-8 text-sm">
            Get tips, offers & product alerts
          </p>

          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="flex-1 px-5 py-3 rounded-full border-b-2 border-[#786808] outline-none"
            />
            <button
              type="submit"
              className="bg-[#786808] text-white px-6 py-3 rounded-full font-semibold shadow-md hover:scale-105 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </motion.section>
    </div>
  );
}

/* ---------------- COMPONENTS ---------------- */

interface FeatureProps {
  icon: ReactNode;
  title: string;
  desc: string;
}

const Feature = ({ icon, title, desc }: FeatureProps) => (
  <div className="text-center">
    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
      {icon}
    </div>
    <h3 className="text-sm font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 text-sm px-4">{desc}</p>
  </div>
);

interface ProductCardProps {
  product: Product;
  onAddToCart: () => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => (
  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition p-4 border border-gray-100 hover:-translate-y-1">
    <div className="relative h-56 overflow-hidden rounded-xl">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-contain transition duration-500 hover:scale-105"
      />
    </div>
    <div className="mt-4">
      <div className="text-xs font-semibold text-[#786808] mb-1">
        {product.category}
      </div>
      <h3 className="text-sm font-bold mb-2">{product.name}</h3>
      <div className="flex items-center justify-between">
        <span className="text-xl font-bold text-[#786808]">
          Pkr {product.price}
        </span>
        <button
          onClick={onAddToCart}
          className="bg-[#786808] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md hover:scale-105 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
);
