import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-white border-t border-emerald-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="mb-4 md:mb-0">
            <a 
              href="#home" 
              className="text-gray-800 font-display text-2xl font-bold transition-opacity hover:opacity-80"
            >
              Shashwat<span className="text-emerald-500">.</span>
            </a>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-600 text-sm font-medium">
              © {currentYear} Shashwat. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm mt-2 flex items-center justify-center md:justify-end gap-1.5">
              Made with <Heart className="w-4 h-4 text-emerald-500 fill-emerald-500" /> by Shashwat
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
