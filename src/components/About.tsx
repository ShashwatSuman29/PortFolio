import { motion } from "framer-motion";
import { Code2, GraduationCap, ArrowRight, Rocket, Star, Award, Brain, Zap, Cpu, TerminalSquare } from "lucide-react";

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { staggerChildren: 0.2 }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
      <div className="container px-4 mx-auto max-w-6xl">
        {/* Header with floating elements */}
        <div className="text-center mb-16 relative">
          <motion.div 
            className="absolute -top-10 -left-10 text-emerald-400/30"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Code2 size={32} />
          </motion.div>
          <motion.div 
            className="absolute -bottom-10 -right-10 text-emerald-400/30"
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Star size={32} />
          </motion.div>
          
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 text-gray-800"
            {...fadeInUp}
          >
            About Me
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            Transforming ideas into exceptional digital experiences through innovative code and creative solutions
          </motion.p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8 relative z-10">
          {/* Left Column */}
          <motion.div
            className="lg:col-span-7 space-y-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-white/90 backdrop-blur-md p-8 rounded-3xl border border-emerald-100/50 shadow-xl shadow-emerald-900/5 relative overflow-hidden group"
              variants={fadeInUp}
              whileHover={{ scale: 1.01 }}
            >
              <div className="absolute top-6 right-6 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity pointer-events-none z-0">
                <Code2 size={64} />
              </div>
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="p-3 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl shadow-lg shadow-emerald-500/20">
                  <Award className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Professional Journey</h3>
              </div>
              <p className="text-gray-600 text-base leading-relaxed mb-10">
                My journey in tech began with a simple curiosity for how things work on the internet, which quickly evolved into a relentless passion for building robust, intelligent applications. Today, I leverage cutting-edge technologies to architect end-to-end solutions that are not only highly scalable but deeply intuitive. For me, development isn't just about syntax—it's about engineering systems that bridge the gap between complex logic and elegant user experiences.
              </p>
              
              <div className="relative p-8 mt-4 bg-emerald-50/80 rounded-2xl border-l-4 border-emerald-500 italic text-emerald-900 font-semibold text-xl md:text-2xl shadow-sm flex items-center justify-center">
                <span>&quot;Code your real life problems&quot;</span>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-emerald-400/10 rounded-full blur-2xl" />
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-emerald-50/80 to-emerald-100/50 backdrop-blur-md p-8 rounded-3xl border border-emerald-200/50 shadow-xl shadow-emerald-900/5 relative overflow-hidden group"
              variants={fadeInUp}
              whileHover={{ scale: 1.01 }}
            >
              <div className="absolute top-6 right-6 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity pointer-events-none z-0">
                <Rocket size={64} className="text-emerald-900" />
              </div>
              <div className="flex items-center gap-4 mb-4 relative z-10">
                <div className="p-3 bg-emerald-200/50 backdrop-blur-md rounded-2xl">
                  <Rocket className="text-emerald-700" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Future Vision</h3>
              </div>
              <p className="text-gray-600 text-base leading-relaxed relative z-10">
                My goal is to continuously push the boundaries of Full Stack development and Artificial Intelligence. 
                I am particularly excited about creating Agentic AI systems and exploring the intersection of Automation, GenAI, and futuristic web development to create solutions that make a real impact.
              </p>
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-200/20 rounded-full blur-2xl" />
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            className="lg:col-span-5 space-y-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-white/90 backdrop-blur-md p-8 rounded-3xl border border-emerald-100/50 shadow-xl shadow-emerald-900/5 relative overflow-hidden group"
              variants={fadeInUp}
              whileHover={{ scale: 1.01 }}
            >
              <div className="absolute top-6 right-6 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity pointer-events-none z-0">
                <GraduationCap size={64} />
              </div>
              <div className="flex items-center gap-4 mb-8 relative z-10">
                <div className="p-3 bg-gradient-to-tr from-emerald-100 to-emerald-200 rounded-2xl shadow-sm">
                  <GraduationCap className="text-emerald-700" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 relative z-10">Educational Background</h3>
              </div>
              <div className="space-y-6 relative z-10">
                {[
                  {
                    title: "B.Tech in Computer Science (AIML)",
                    school: "Dronacharya Group of Institutions",
                    year: "2022 – 2026",
                    highlight: "Specializing in AI and Machine Learning"
                  },
                  {
                    title: "12th Grade",
                    school: "Goethal's Public School",
                    year: "2021",
                    highlight: "Focus on Computer Science"
                  },
                  {
                    title: "10th Grade",
                    school: "Sant Pathik Vidyalaya",
                    year: "2019",
                    highlight: "Strong foundation in Mathematics"
                  }
                ].map((edu, index) => (
                  <motion.div
                    key={index}
                    className="p-5 rounded-2xl bg-gradient-to-r from-emerald-50/80 to-transparent hover:from-emerald-100/80 transition-all duration-300 border border-emerald-100/30"
                    variants={fadeInUp}
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-bold text-gray-800 text-lg leading-tight pr-4">{edu.title}</h4>
                      <span className="shrink-0 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-semibold">
                        {edu.year}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-emerald-600/80 mb-2">{edu.school}</p>
                    <div className="flex items-center gap-2 mt-2 pt-2 border-t border-emerald-100">
                      <Star size={12} className="text-emerald-400" />
                      <p className="text-sm text-gray-500">{edu.highlight}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-emerald-400/10 rounded-full blur-2xl" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 