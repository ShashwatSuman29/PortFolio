import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-muted/20 border-t border-white/5">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a 
              href="#home" 
              className="text-foreground font-display text-xl font-bold transition-opacity hover:opacity-80"
            >
              Shashwat<span className="text-gradient">.</span>
            </a>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-foreground/70 text-sm">
              © {currentYear} Shashwat. All rights reserved.
            </p>
            <p className="text-foreground/60 text-xs mt-1 flex items-center justify-center md:justify-end">
              Made by Shashwat
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
