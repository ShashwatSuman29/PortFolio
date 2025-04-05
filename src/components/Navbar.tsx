import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2, Rocket, Briefcase, User, Mail, Star, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

import { cn } from "@/lib/utils";

const navItems = [
  { name: "About", href: "#about", icon: <User className="w-4 h-4" /> },
  { name: "Skills", href: "#skills", icon: <Code2 className="w-4 h-4" /> },
  { name: "Projects", href: "#projects", icon: <Briefcase className="w-4 h-4" /> },
  { name: "Contact", href: "#contact", icon: <Mail className="w-4 h-4" /> },
];

const FloatingIcon = ({ icon, delay, className }: { icon: React.ReactNode; delay: number; className?: string }) => (
  <motion.div
    initial={{ y: 0 }}
    animate={{ 
      y: [-10, 10, -10],
      rotate: [-5, 5, -5]
    }}
    transition={{ 
      duration: 4,
      repeat: Infinity,
      delay 
    }}
    className={cn("absolute text-secondary/30", className)}
  >
    {icon}
  </motion.div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/", isPage: true },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
    { name: "Blog", href: "/blog", isPage: true },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4",
        isScrolled
          ? "bg-white shadow-sm backdrop-blur-sm py-3"
          : "bg-transparent py-4"
      )}
    >
      <div className="container px-8 mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="text-gray-800 font-display text-xl font-bold transition-opacity hover:opacity-80"
        >
          Shashwat<span className="text-emerald-500">.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-gray-600 hover:text-emerald-500 font-medium text-sm transition-all duration-200 hover:scale-105"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 bg-white shadow-md text-gray-800 hover:text-emerald-500"
            style={{ backgroundColor: 'white' }}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={20} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={20} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, x: 0, pointerEvents: "auto" },
          closed: { opacity: 0, x: 20, pointerEvents: "none" }
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed inset-0 bg-white z-40 pt-20"
        style={{ backgroundColor: 'white' }}
      >
        {/* Back Button for Mobile Menu */}
        <button
          className="absolute top-6 right-8 text-gray-800 hover:text-emerald-500 transition-colors"
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
        >
          <X size={24} />
        </button>
        
        <nav className="container px-4 flex flex-col items-center space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-gray-800 hover:text-emerald-500 font-medium text-2xl transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </motion.div>
    </header>
  );
};

export default Navbar;
