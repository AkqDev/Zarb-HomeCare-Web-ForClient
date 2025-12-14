import { Phone, Mail, MapPin, Leaf } from 'lucide-react';
import { SiTiktok } from 'react-icons/si';
import { FaWhatsapp, FaLinkedin ,FaInstagram , FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '/vite.png';

const BRAND_COLOR = '#A3912A';

// Framer Motion variants
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { delay: 0.2, staggerChildren: 0.15 }
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
const linkVariants = {
  hover: { x: 5, color: '#FFFFFF', transition: { duration: 0.1 } },
};

export default function Footer() {
  const CURRENT_YEAR = new Date().getFullYear();

  // Contact details
  const phoneNumber = '+923261247039'; // WhatsApp format without +
  const email = 'zarbhomecareindustries@gmail.com';

  return (
    <motion.footer 
      className="bg-black text-white mt-15 font-['Inter']" 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand Section */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-white p-1 rounded-full shadow">
                <img src={logo} alt="ZARB Home Care Industries" className="w-10 h-10 object-contain" />
              </div>
              <div>
                <h2 className="text-3xl font-extrabold text-white">
                  <span style={{ color: BRAND_COLOR }}>ZARB</span>
                </h2>
                <p className="text-xs font-semibold text-gray-400 tracking-widest uppercase">Home Care Industries</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              ZARB Home Care Industries delivers powerful, hygienic, and eco‑friendly cleaning solutions.
              Our dishwashing liquids remove tough grease while being gentle on hands and safe for daily use.
            </p>

            {/* Social Media Links */}
            <div className="flex gap-4">
              <motion.a href="https://www.facebook.com/zarbofficial" target="_blank" whileHover={{ scale: 1.2, color: BRAND_COLOR }}>
                <FaFacebook size={18} />
              </motion.a>
              <motion.a href="https://www.instagram.com/zarbofficial9/" target="_blank" whileHover={{ scale: 1.2, color: BRAND_COLOR }}>
                <FaInstagram size={18} />
              </motion.a>
              <motion.a href="https://www.linkedin.com/in/zarb-home-care-industries-9177b8399" target="_blank" whileHover={{ scale: 1.2, color: BRAND_COLOR }}>
                <FaLinkedin size={18} />
              </motion.a>
              <motion.a href="https://www.tiktok.com/@zarb.official" target="_blank" whileHover={{ scale: 1.2, color: BRAND_COLOR }}>
                <SiTiktok size={18} />
              </motion.a>
              <motion.a href="https://whatsapp.com/channel/0029Vb6iDrR9hXFEi5MZrU42" target="_blank" whileHover={{ scale: 1.2, color: BRAND_COLOR }}>
                <FaWhatsapp size={18} />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="mb-5 font-bold text-xl tracking-wide" style={{ color: BRAND_COLOR }}>Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <motion.li variants={linkVariants} whileHover="hover"><Link to="/" className="transition">Home</Link></motion.li>
              <motion.li variants={linkVariants} whileHover="hover"><Link to="/about" className="transition">About Us</Link></motion.li>
              <motion.li variants={linkVariants} whileHover="hover"><Link to="/contact" className="transition">Contact</Link></motion.li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="mb-5 font-bold text-xl tracking-wide" style={{ color: BRAND_COLOR }}>Connect With Us</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex gap-3 items-start">
                <MapPin size={18} className="text-white mt-0.5" />
                Lahore, Punjab, Pakistan
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={18} className="text-white" />
                <a href={`https://wa.me/${phoneNumber}`} target="_blank" className="hover:text-[#A3912A]">{phoneNumber}</a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={18} className="text-white" />
                <a href={`mailto:${email}`} className="hover:text-[#A3912A]">{email}</a>
              </li>
            </ul>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center mt-8 font-extrabold text-sm px-7 py-3 rounded-full"
                style={{ backgroundColor: BRAND_COLOR, color: 'white'}}
              >
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>

        </div>

        {/* Bottom Bar */}
<div className="border-t border-gray-700 mt-16 pt-6 flex flex-col md:flex-row items-center justify-center md:justify-between gap-3 md:gap-0 text-center md:text-left">
  <p className="text-sm font-semibold text-gray-400">
    © {CURRENT_YEAR} <span style={{ color: BRAND_COLOR }}>ZARB Home Care Industries</span>. All rights reserved.
  </p>
  
  <p className="text-sm font-extrabold flex items-center justify-center gap-2 mt-2 md:mt-0" style={{ color: BRAND_COLOR }}>
    <Leaf size={16} /> Quality • Hygiene • Trust
  </p>
</div>

      </div>
    </motion.footer>
  );
}
