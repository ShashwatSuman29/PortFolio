import { useState } from "react";
import { ArrowUpRight, Github, Package, Utensils, Heart, Briefcase, Database } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface Project {
  id: number;
  title: string;
  description: string;
  features: string[];
  image: string;
  techStack: { category: string; tools: string[]; }[];
  githubUrl: string;
  liveUrl: string;
  icon: React.ReactNode;
}

const projects: Project[] = [
  {
    id: 1,
    title: "JobPilot",
    description: "A SaaS web application designed to help job seekers track, manage, and automate job applications efficiently with AI-powered automation.",
    features: [
      "Job Tracking Dashboard",
      "Secure Credential Storage",
      "AI-Powered Auto-Apply",
      "Real-Time Updates"
    ],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    techStack: [
      { category: "Frontend", tools: ["React", "TypeScript", "TailwindCSS"] },
      { category: "Backend", tools: ["Node.js", "Express.js", "MongoDB"] },
      { category: "Other", tools: ["Puppeteer", "OpenAI API"] }
    ],
    githubUrl: "https://github.com/ShashwatSuman29/JobPilot",
    liveUrl: "https://jobpilot-demo.vercel.app",
    icon: <Briefcase className="w-6 h-6" />
  },
  {
    id: 2,
    title: "ApplyVault",
    description: "A streamlined job application management tool designed to help users keep track of their job applications, including associated emails and passwords.",
    features: [
      "Application Tracking",
      "Credential Management",
      "Status Updates & Notifications",
      "Search & Filters"
    ],
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=800&q=80",
    techStack: [
      { category: "Frontend", tools: ["React", "TypeScript"] },
      { category: "Backend", tools: ["Supabase"] },
      { category: "Other", tools: ["Responsive Design"] }
    ],
    githubUrl: "https://github.com/ShashwatSuman29/Apply-Vault",
    liveUrl: "https://apply-vault.vercel.app/",
    icon: <Database className="w-6 h-6" />
  },
  {
    id: 3,
    title: "Multi-Vendor Food Delivery App",
    description: "A modern food delivery platform enabling restaurants to manage their menus and orders while customers track deliveries in real-time.",
    features: [
      "Multi-vendor Management",
      "Real-time Tracking",
      "Payment Integration",
      "Order Analytics"
    ],
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
    techStack: [
      { category: "Frontend", tools: ["React.js", "Redux", "Tailwind"] },
      { category: "Backend", tools: ["Node.js", "Express.js", "MongoDB"] },
      { category: "Other", tools: ["JWT", "OAuth", "AWS"] }
    ],
    githubUrl: "https://github.com/ShashwatSuman29/Multivendor-food-delivery-webapp",
    liveUrl: "https://food-delivery-app.vercel.app",
    icon: <Utensils className="w-6 h-6" />
  },
  {
    id: 4,
    title: "NPM Package",
    description: "A lightweight currency converter package for javascipt which can be installed using npm i shashwat-currency-convertor29.",
    features: [
      "Lightweight & Fast",
      "Easy to Install",
      "Multi-Currency Support",
      "Real-time Exchange Rates"
    ],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    techStack: [
      { category: "Core", tools: ["Node.js", "JavaScript"] }
    ],
    githubUrl: "https://github.com/ShashwatSuman29/Npm-Package",
    liveUrl: "https://www.npmjs.com/settings/shashwat_suman/packages",
    icon: <Package className="w-6 h-6" />
  },
  {
    id: 5,
    title: "Nourishly",
    description: "Nourishly is a self care webapp which allowas users to track their daily routine goals (Physical , Mental and Educationals). It also calculate the daily Calories needed and also calculate the macronutreints present in food items given by users.",
    features: [
      "Physical & Mental Health Goals",
      "Nutrition & Macro Tracking",
      "Smart Notifications",
      "Rewards System"
    ],
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
    techStack: [
      { category: "Frontend", tools: ["React.js", "Framer Motion"] },
      { category: "Backend", tools: ["Node.js", "MongoDB"] },
      { category: "Services", tools: ["Firebase", "Stripe"] }
    ],
    githubUrl: "https://github.com/ShashwatSuman29/Nourishly",
    liveUrl: "https://nourishly.vercel.app/",
    icon: <Heart className="w-6 h-6" />
  }
];

const Projects = () => {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
    hover: { y: -5, transition: { duration: 0.2 } }
  };

  const techBadgeVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.2 } }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
      <div className="container px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Showcasing my expertise in full-stack development through real-world applications
          </motion.p>
        </div>

        <div className="grid gap-12">
          <AnimatePresence>
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover="hover"
                className="bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg border border-gray-100"
              >
                <div className="grid md:grid-cols-5 gap-0">
                  <div className="md:col-span-2 relative h-64 md:h-[360px] group">
                    <motion.div
                      className="absolute inset-4 z-10 rounded-2xl overflow-hidden border-4 border-white/80 shadow-lg"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-center transition-transform duration-500"
                        style={{ aspectRatio: "3/4" }}
                        whileHover={{ scale: 1.05 }}
                      />
                      <div className="absolute bottom-4 left-4 flex items-center gap-3">
                        <div className="p-2 bg-emerald-500/90 backdrop-blur-sm rounded-xl text-white">
                          {project.icon}
                        </div>
                        <h3 className="text-xl font-bold text-white">{project.title}</h3>
                      </div>
                    </motion.div>
                    
                    <div className="absolute inset-0">
                      <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-emerald-100/30 rounded-full blur-xl" />
                      <div className="absolute -top-4 -left-4 w-24 h-24 bg-emerald-200/30 rounded-full blur-xl" />
                    </div>
                  </div>

                  <div className="md:col-span-3 p-8">
                    <p className="text-gray-600 text-lg mb-6">{project.description}</p>

                    <div className="space-y-6">
                      <div>
                        <h4 className="font-medium mb-3 text-sm text-emerald-600">Key Features</h4>
                        <ul className="grid grid-cols-2 gap-3 text-sm">
                          {project.features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-2 text-gray-600">
                              <span className="w-2 h-2 bg-emerald-400 rounded-full" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-medium mb-3 text-sm text-emerald-600">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.flatMap(stack => 
                            stack.tools.map(tech => (
                              <motion.span
                                key={tech}
                                variants={techBadgeVariants}
                                whileHover="hover"
                                className={cn(
                                  "text-sm px-4 py-1.5 rounded-full cursor-pointer transition-colors",
                                  selectedTech === tech
                                    ? "bg-emerald-500 text-white"
                                    : "bg-emerald-50 text-emerald-600 hover:bg-emerald-100"
                                )}
                                onClick={() => setSelectedTech(tech)}
                              >
                                {tech}
                              </motion.span>
                            ))
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-4 pt-4">
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full px-6 py-3 text-sm font-medium transition-colors"
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          View Live
                          <ArrowUpRight size={16} />
                        </motion.a>
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full px-6 py-3 text-sm font-medium transition-colors"
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Github size={16} />
                          Code
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;
