import { motion } from "framer-motion";
import { ArrowRight, Code, Sparkles, Star, Rocket, Brain, Coffee, FileText, Github, Linkedin, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";

const FloatingIcon = ({ icon, delay, className }: { icon: React.ReactNode; delay: number; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ 
      opacity: 1,
      scale: 1,
      y: [-10, 10, -10],
      rotate: [-5, 5, -5]
    }}
    transition={{ 
      duration: 4,
      repeat: Infinity,
      delay 
    }}
    className={cn("absolute text-emerald-400/30", className)}
  >
    {icon}
  </motion.div>
);

const Hero = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-100 via-white to-emerald-50">
      {/* Background Decorations */}
      <div className="absolute inset-0 w-full h-full">
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-300/20 rounded-full blur-3xl" />
        </motion.div>
        
        {/* Floating Icons */}
        <FloatingIcon icon={<Code className="w-8 h-8" />} delay={0} className="top-1/4 left-[15%]" />
        <FloatingIcon icon={<Star className="w-6 h-6" />} delay={0.5} className="top-1/3 right-[20%]" />
        <FloatingIcon icon={<Brain className="w-10 h-10" />} delay={1} className="bottom-1/3 left-[20%]" />
        <FloatingIcon icon={<Rocket className="w-8 h-8" />} delay={1.5} className="top-1/2 right-[25%]" />
        <FloatingIcon icon={<Coffee className="w-6 h-6" />} delay={2} className="bottom-1/4 left-[30%]" />
        <FloatingIcon icon={<Sparkles className="w-8 h-8" />} delay={2.5} className="top-1/3 left-[40%]" />
      </div>

      <div className="container px-4 mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center md:justify-start gap-2 mb-6"
            >
              <span className="px-4 py-1.5 bg-emerald-100 text-emerald-600 rounded-full text-sm font-medium">
                Web Developer
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-800"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Hi! I'm{" "}
              <span className="text-emerald-500">Shashwat</span>
              <br />
              A Web Developer.
            </motion.h1>
            
            <motion.p
              className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto md:mx-0 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              I craft modern web applications with cutting-edge technologies,
              focusing on performance, scalability, and exceptional user experiences.
            </motion.p>

            <motion.div
              className="flex items-center justify-center md:justify-start gap-4 flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <motion.a
                href="#projects"
                className="bg-emerald-500 text-white px-6 py-3 rounded-full font-medium inline-flex items-center gap-2 hover:bg-emerald-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="https://drive.google.com/file/d/1fwKA2lfetIiO4dYp1lxcjjpUi1Y70cAk/view"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-gray-700 px-6 py-3 rounded-full font-medium inline-flex items-center gap-2 border border-gray-200 hover:bg-gray-50 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Resume
                <FileText className="w-4 h-4" />
              </motion.a>
              <div className="flex items-center gap-4">
                <motion.a
                  href="https://github.com/ShashwatSuman29"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-gray-700 p-3 rounded-full border border-gray-200"
                  whileHover={{ scale: 1.1, backgroundColor: "#333", color: "#fff" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/shashwat-suman29/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-gray-700 p-3 rounded-full border border-gray-200"
                  whileHover={{ scale: 1.1, backgroundColor: "#0077b5", color: "#fff" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://x.com/ShashwatSuman29"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-gray-700 p-3 rounded-full border border-gray-200"
                  whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Twitter className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>

            {/* Tech Stack Pills */}
            <motion.div
              className="mt-12 flex flex-wrap justify-center md:justify-start gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              {[
                "React", "Next.js", "TypeScript", "Node.js",
                "MongoDB", "AWS", "Tailwind CSS", "Framer Motion"
              ].map((tech, i) => (
                <motion.span
                  key={tech}
                  className="px-4 py-2 bg-white rounded-full text-sm border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 1 + i * 0.1 }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Profile Photo */}
          <motion.div
            className="relative flex-1 max-w-sm"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.div
              className="relative z-10 w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden border-8 border-white shadow-xl bg-white"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-100/40 via-transparent to-emerald-200/40" />
              <img
                src="/lovable-uploads/84c566b5-0de7-40da-ad6a-7f5fbe5c0dc9.png"
                alt="Shashwat Suman"
                className="w-full h-full object-cover object-center hover:scale-105 transition-all duration-300"
              />
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute inset-0 -z-10 scale-105">
              <motion.div
                className="absolute inset-0 border-4 border-dashed border-emerald-200/40 rounded-[2.5rem]"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute inset-4 border-4 border-emerald-100/20 rounded-[2.5rem]" />
              <div className="absolute inset-2 border-4 border-emerald-50/10 rounded-[2.5rem]" />
            </div>

            {/* Additional Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-emerald-100/30 rounded-full blur-xl" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-emerald-200/30 rounded-full blur-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
