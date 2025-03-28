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
          ? "bg-white/80 shadow-sm backdrop-blur-sm py-3"
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
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 bg-white/95 backdrop-blur-sm z-40 transition-all duration-300 ease-in-out pt-20",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
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
      </div>
    </header>
  );
};

export default Navbar;
