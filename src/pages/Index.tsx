import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Initialize animation observers
    const animateOnScroll = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const target = entry.target;
              // Apply different animations based on data attribute
              const animation = target.getAttribute("data-animation") || "scale-in";
              target.classList.add(`animate-${animation}`);
              observer.unobserve(target);
            }
          });
        },
        { threshold: 0.1 }
      );

      document.querySelectorAll("[data-animate]").forEach((element) => {
        observer.observe(element);
      });
    };

    animateOnScroll();

    // Smooth anchor link scrolling
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && link.hash && link.hash.startsWith('#')) {
        const targetElement = document.querySelector(link.hash);
        if (targetElement) {
          e.preventDefault();
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.pageYOffset - 80,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleLinkClick);
    
    return () => {
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800 relative">
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-100/30 rounded-full filter blur-[120px]"></div>
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-emerald-200/30 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-emerald-100/30 rounded-full filter blur-[100px]"></div>
      </div>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
