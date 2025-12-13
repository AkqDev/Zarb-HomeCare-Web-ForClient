import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';
// Import motion from framer-motion
import { motion } from 'framer-motion'; 
import logo from '/vite.png'

// Define the primary brand color for consistency
const BRAND_COLOR = '#A3912A'; // A more vibrant, golden-yellow color

// Framer Motion variants for the main container
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: {
      delay: 0.2, // Delay the whole footer
      staggerChildren: 0.15 // Stagger the animation of the children elements
    }
  },
};

// Framer Motion variants for individual sections
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Framer Motion variants for quick links
const linkVariants = {
  hover: { x: 5, color: '#FFFFFF', transition: { duration: 0.1 } }, // Slight shift and white on hover
};


export default function Footer() {
  const CURRENT_YEAR = new Date().getFullYear();

  return (
    // Use motion.footer for the main container animation
    <motion.footer 
      className="bg-black text-white mt-24 font-['Inter']" 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Animate only once when it enters the viewport
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Adjusted to grid-cols-3 for a cleaner layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand Section (Column 1) */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-white p-1 rounded-full shadow">
                <img
                  src={logo}
                  alt="ZARB Home Care Industries"
                  className="w-10 h-10 object-contain" // Reduced size for better visual balance
                />
              </div>
              <div>
                {/* Use BRAND_COLOR */}
                <h2 className="text-3xl font-extrabold text-white">
                  <span style={{ color: BRAND_COLOR }}>ZARB</span>
                </h2>
                <p className="text-xs font-semibold text-gray-400 tracking-widest uppercase">Home Care Industries</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              ZARB Home Care Industries delivers powerful, hygienic, and eco‑friendly
              cleaning solutions. Our dishwashing liquids remove tough grease while
              being gentle on hands and safe for daily use.
            </p>

            {/* Social Media Links with Hover Animation */}
            <div className="flex gap-4">
              {[Facebook, Instagram, Linkedin].map((Icon, index) => (
                <motion.a 
                  key={index}
                  href="#" 
                  className="p-2 border border-gray-700 rounded-full hover:border-white transition-all duration-300"
                  whileHover={{ scale: 1.2, color: BRAND_COLOR }} // Bounce effect on hover
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links (Column 2) */}
          <motion.div variants={itemVariants}>
            <h3 className="mb-5 font-bold text-xl tracking-wide" style={{ color: BRAND_COLOR }}>Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              {/* Apply Framer Motion to each Link component */}
              <motion.li variants={linkVariants} whileHover="hover"><Link to="/" className="transition">Home</Link></motion.li>
              <motion.li variants={linkVariants} whileHover="hover"><Link to="/about" className="transition">About Us</Link></motion.li>
              <motion.li variants={linkVariants} whileHover="hover"><Link to="/contact" className="transition">Contact</Link></motion.li>
            </ul>
          </motion.div>

          {/* Contact Info (Column 3) */}
          <motion.div variants={itemVariants}>
            <h3 className="mb-5 font-bold text-xl tracking-wide" style={{ color: BRAND_COLOR }}>Connect With Us</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex gap-3 items-start"><MapPin size={18} className="text-white mt-0.5" /> Industrial Area, City Name, Pakistan</li>
              <li className="flex gap-3 items-center"><Phone size={18} className="text-white" /> +92 300 1234567</li>
              <li className="flex gap-3 items-center"><Mail size={18} className="text-white" /> info@zarbhomecare.com</li>
            </ul>

            {/* "Get in Touch" Button with Hover Animation */}
            <motion.div
              whileHover={{ scale: 1.05 }} // Subtle lift and glow
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center mt-8  font-extrabold text-sm px-7 py-3 rounded-full "
                style={{ backgroundColor: BRAND_COLOR, color: 'white'}}
              >
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm font-semibold text-gray-400">© {CURRENT_YEAR} <span style={{ color: BRAND_COLOR }}>ZARB Home Care Industries</span>. All rights reserved.</p>
          
          {/* Added Leaf icon for the motto */}
          <p className="text-sm font-extrabold flex items-center gap-2" style={{ color: BRAND_COLOR }}>
            <Leaf size={16} /> Quality • Hygiene • Trust
          </p>
        </div>
      </div>
    </motion.footer>
  );
}