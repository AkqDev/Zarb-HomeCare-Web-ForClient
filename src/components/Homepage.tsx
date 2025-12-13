import { motion } from "framer-motion";
import {
  Leaf,
  Shield,
  Sparkles,
  Users,
  Award,
  Wind,
} from "lucide-react";
import { message } from "antd";
import herobg from "../assets/main_bg.jpg";
import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";
import product4 from "../assets/product4.jpg";

// ⬇️ Google Fonts
const fontLink = document.createElement("link");
fontLink.href =
  "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&family=Inter:wght@300;400;500;700&display=swap";
fontLink.rel = "stylesheet";
document.head.appendChild(fontLink);

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  variants?: string[]; // optional, to match App.tsx
}

interface HomepageProps {
  onAddToCart: (product: Product, variant: string) => void; // ✅ match App.tsx
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function Homepage({ onAddToCart }: HomepageProps) {
  const featuredProducts: Product[] = [
    { id: "1", name: "ZARB Stainless Steel Scourers (Jumbo Size)", category: "Kitchen Cleaning", price: 199, image: product1 },
    { id: "2", name: "ZARB Dish Washing Liquid", category: "Dishwashing Liquid (250ml & 500ml)", price: 249, image: product2 },
    { id: "3", name: "ZARB Nail Saver Dish Sponge / Scrubber", category: "Dish Sponge & Scrubber", price: 229, image: product3 },
    { id: "4", name: "ZARB Nail Saver Dish Sponge", category: "Heavy-Duty Scrub Sponge", price: 259, image: product4 },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    message.success({ content: "Thanks for subscribing!", duration: 3 });
  };

  return (
    <div className="bg-white font-[Poppins]">
      {/* HERO */}
      <section className="relative h-[500px] md:h-[650px] overflow-hidden">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src={herobg}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </section>

      {/* FEATURES */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">
          {[{ icon: <Leaf className="w-8 h-8 text-emerald-600" />, title: "Natural Lemon Power", desc: "Enriched with real lemon extracts for a sparkling shine." },
            { icon: <Shield className="w-8 h-8 text-blue-600" />, title: "Gentle on Hands", desc: "Protects your hands after daily use." },
            { icon: <Sparkles className="w-8 h-8 text-yellow-600" />, title: "Cuts Grease Instantly", desc: "Removes tough oil and stains fast." },
            { icon: <Wind className="w-8 h-8 text-orange-600" />, title: "Fresh Lemon Aroma", desc: "Leaves utensils smelling fresh." },
          ].map((f, i) => (
            <motion.div key={i} variants={fadeUp}>
              <Feature {...f} />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* PRODUCTS */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
        className="py-10 mb-5"
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.div variants={fadeUp} className="text-center mb-8">
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <p className="text-gray-600 text-sm">Top-selling utensils liquids</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <motion.div key={product.id} variants={fadeUp}>
                {/* ✅ Pass default variant 'standard' to match App.tsx */}
                <ProductCard product={product} onAddToCart={() => onAddToCart(product, "standard")} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* WHY CHOOSE US */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
        className="py-16 bg-[#659430] text-gray-200 text-center"
      >
        <motion.h2 variants={fadeUp} className="text-3xl font-bold">Why Choose Zarb?</motion.h2>
        <motion.p variants={fadeUp} className="font-semibold mt-1 mb-12">Trusted by thousands of homes</motion.p>

        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          <motion.div variants={fadeUp}><Stat icon={<Users />} value="50,000+" label="Happy Families" /></motion.div>
          <motion.div variants={fadeUp}><Stat icon={<Award />} value="Premium" label="Quality Assurance" /></motion.div>
          <motion.div variants={fadeUp}><Stat icon={<Sparkles />} value="Zero Chemicals" label="Safe & Natural" /></motion.div>
        </div>
      </motion.section>

      {/* NEWSLETTER */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-16 bg-white"
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-8 text-sm">Get tips, offers & product alerts</p>

          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input type="email" required placeholder="Enter your email" className="flex-1 px-5 py-3 rounded-full border-b-2 border-[#786808] outline-none" />
            <button type="submit" className="bg-[#786808] text-white px-6 py-3 rounded-full font-semibold shadow-md">Subscribe</button>
          </form>
        </div>
      </motion.section>
    </div>
  );
}

const Feature = ({ icon, title, desc }: any) => (
  <div className="text-center">
    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">{icon}</div>
    <h3 className="text-sm font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 text-sm px-4">{desc}</p>
  </div>
);

const Stat = ({ icon, value, label }: any) => (
  <div className="text-center">
    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">{icon}</div>
    <h3 className="text-3xl font-bold">{value}</h3>
    <p className="text-black font-semibold text-sm">{label}</p>
  </div>
);

const ProductCard = ({ product, onAddToCart }: any) => (
  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition p-4 border border-gray-100 hover:-translate-y-1">
    <div className="relative h-56 overflow-hidden rounded-xl">
      <img src={product.image} alt={product.name} className="w-full h-full object-contain transition duration-500 hover:scale-105" />
    </div>
    <div className="mt-4">
      <div className="text-xs font-semibold text-[#786808] mb-1">{product.category}</div>
      <h3 className="text-sm font-bold mb-2">{product.name}</h3>
      <div className="flex items-center justify-between">
        <span className="text-xl font-bold text-[#786808]">Pkr{product.price}</span>
        <button onClick={onAddToCart} className="bg-[#786808] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md">Add to Cart</button>
      </div>
    </div>
  </div>
);
