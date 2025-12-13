import { useState, useEffect } from "react";
import {
  ShoppingCart,
  Menu,
  X,
  Heart,
  User,
  Search,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

/* 🔥 Google Fonts Injection */
const fontLink = document.createElement("link");
fontLink.href =
  "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap";
fontLink.rel = "stylesheet";
document.head.appendChild(fontLink);

interface HeaderProps {
  totalItems: number;
  isMenuOpen: boolean;
  onToggleMenu: () => void;
  onOpenCart: () => void;
}

const NAV_LINKS = [
  { name: "home", path: "/" },
  { name: "about", path: "/about" },
  { name: "contact", path: "/contact" },
];

const MENU_ITEM_COLOR = "#E8D8A5";

export function Header({
  totalItems,
  isMenuOpen,
  onToggleMenu,
  onOpenCart,
}: HeaderProps) {
  const location = useLocation();
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);

  const isActive = (path: string) =>
    path === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(path);

  useEffect(() => {
    const handleScroll = () => setIsHeaderSticky(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ================= HEADER ================= */}
      <header
        className={`fixed top-0 left-0 w-full z-50 font-[Poppins] transition-all duration-500 ${
          isHeaderSticky
            ? "bg-white/90 backdrop-blur-md py-2 shadow-lg"
            : "bg-white py-1 shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2">
            <motion.img
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              src="/vite.png"
              alt="Zarb"
              className="w-14 h-14 object-contain"
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8 uppercase tracking-widest font-semibold">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative py-2 text-sm text-gray-800 group"
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] w-full bg-[#D9C67C] transition-transform duration-300 origin-left ${
                    isActive(link.path)
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* ACTIONS */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex gap-2">
              {[Search, User, Heart].map((Icon, i) => (
                <motion.button
                  key={i}
                  whileHover={{ y: -2 }}
                  className="p-2 rounded-full text-gray-600 hover:text-black hover:bg-gray-100 transition"
                >
                  <Icon size={20} />
                </motion.button>
              ))}
            </div>

            {/* CART */}
            <button onClick={onOpenCart} className="relative p-2">
              <ShoppingCart size={22} />
              {totalItems > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 bg-black text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold"
                >
                  {totalItems}
                </motion.span>
              )}
            </button>

            {/* MOBILE MENU */}
            <button
              onClick={onToggleMenu}
              className="md:hidden p-2 rounded-full hover:bg-gray-100 transition z-[60]"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* ================= MOBILE SIDEBAR ================= */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onToggleMenu}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[51]"
            />

            {/* SIDEBAR */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 22, stiffness: 180 }}
              className="fixed top-0 right-0 h-screen w-full bg-black z-[55] flex flex-col font-[Poppins]"
            >
              {/* SIDEBAR HEADER */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl font-bold tracking-widest text-[#D9C67C]"
                >
                  ZARB
                </motion.h2>
                
                <motion.button
                  onClick={onToggleMenu}
                  whileHover={{ rotate: 90, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-white p-2 rounded-full hover:bg-white/10"
                >
                  <X size={26} />
                </motion.button>
              </div>

              {/* MENU ITEMS */}
              <div className="flex flex-col gap-8 px-10 pt-14">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ x: 30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.15 + i * 0.12 }}
                  >
                    <Link
                      to={link.path}
                      onClick={onToggleMenu}
                      style={{ color: MENU_ITEM_COLOR }}
                      className={`text-lg font-bold uppercase tracking-widest hover:pl-4 transition-all duration-300 ${
                        isActive(link.path) ? "brightness-150" : ""
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* FOOTER */}
<div className="mt-auto px-10 py-8 border-t border-white/10">
  <p className="text-gray-400 text-sm">
    Need help?{' '}
    <Link
      to="/contact"
      className="text-[#796907]"
    >
      Contact us
    </Link>
  </p>
</div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
