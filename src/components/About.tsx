import { motion } from "framer-motion";
import { Code2, GraduationCap, Briefcase, Rocket, Star, Award, Brain, Zap } from "lucide-react";

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

  const skills = [
    { icon: <Code2 size={20} />, name: "Full Stack Development", description: "MERN Stack Expert" },
    { icon: <Brain size={20} />, name: "AI/ML Integration", description: "Modern AI Solutions" },
    { icon: <Zap size={20} />, name: "Performance Optimization", description: "Speed & Efficiency" },
    { icon: <Star size={20} />, name: "UI/UX Design", description: "Creative & Intuitive" }
  ];

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

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-gray-100 hover:border-emerald-200 transition-all duration-300 shadow-sm"
              variants={fadeInUp}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="text-emerald-500 mb-3">{skill.icon}</div>
              <h3 className="text-base font-semibold mb-1 text-gray-800">{skill.name}</h3>
              <p className="text-sm text-gray-600">{skill.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left Column */}
          <motion.div
            className="space-y-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden"
              variants={fadeInUp}
              whileHover={{ scale: 1.01 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-emerald-100 rounded-xl">
                  <Award className="text-emerald-500" size={20} />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Professional Journey</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                As a passionate web developer, I specialize in creating innovative web solutions 
                using cutting-edge technologies. My expertise in modern web development practices 
                enables me to build robust and scalable applications.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Star className="text-emerald-400" size={16} />
                  <span>Freelance success on Fiverr and Upwork</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Star className="text-emerald-400" size={16} />
                  <span>Interactive and 3D website development</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Star className="text-emerald-400" size={16} />
                  <span>Modern UI/UX implementation expert</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-emerald-100/30 rounded-full blur-xl" />
            </motion.div>

            <motion.div 
              className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden"
              variants={fadeInUp}
              whileHover={{ scale: 1.01 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-emerald-100 rounded-xl">
                  <Rocket className="text-emerald-500" size={20} />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Future Vision</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                My goal is to push the boundaries of web development and artificial intelligence, 
                creating innovative solutions that make a real impact. I'm particularly excited about 
                exploring the intersection of AI and web development.
              </p>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-emerald-200/30 rounded-full blur-xl" />
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            className="space-y-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden"
              variants={fadeInUp}
              whileHover={{ scale: 1.01 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-emerald-100 rounded-xl">
                  <GraduationCap className="text-emerald-500" size={20} />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Educational Background</h3>
              </div>
              <div className="space-y-4">
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
                    className="p-3 rounded-xl bg-emerald-50/50 hover:bg-emerald-50 transition-all duration-300"
                    variants={fadeInUp}
                    whileHover={{ x: 5 }}
                  >
                    <h4 className="font-medium text-base text-gray-800">{edu.title}</h4>
                    <p className="text-sm text-gray-600">{edu.school}</p>
                    <p className="text-xs text-emerald-600">{edu.year}</p>
                    <p className="text-xs text-gray-500 mt-1">{edu.highlight}</p>
                  </motion.div>
                ))}
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-emerald-100/30 rounded-full blur-xl" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 