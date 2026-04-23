import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { cn } from "@/lib/utils";

const Contact = () => {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Get In Touch
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Have a project in mind or want to collaborate? Feel free to reach out!
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            className="space-y-6 sm:space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-gray-100 shadow-sm">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-gray-800 text-center">Contact Information</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <a
                  href="mailto:shashwatsumanat29@gmail.com"
                  className="flex items-center gap-4 text-gray-600 hover:text-emerald-500 transition-colors group p-4 rounded-2xl hover:bg-emerald-50/50"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center group-hover:bg-emerald-500 transition-colors shrink-0">
                    <Mail className="w-6 h-6 text-emerald-500 group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex flex-col overflow-hidden">
                    <span className="font-semibold text-gray-800">Email</span>
                    <span className="text-sm truncate">shashwatsumanat29@gmail.com</span>
                  </div>
                </a>
                <a
                  href="https://wa.me/917992347369"
                  className="flex items-center gap-4 text-gray-600 hover:text-emerald-500 transition-colors group p-4 rounded-2xl hover:bg-emerald-50/50"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center group-hover:bg-emerald-500 transition-colors shrink-0">
                    <Phone className="w-6 h-6 text-emerald-500 group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-gray-800">WhatsApp</span>
                    <span className="text-sm">+91 7992347369</span>
                  </div>
                </a>
                <a
                  href="https://linkedin.com/in/shashwatsumanat29"
                  className="flex items-center gap-4 text-gray-600 hover:text-emerald-500 transition-colors group p-4 rounded-2xl hover:bg-emerald-50/50"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center group-hover:bg-emerald-500 transition-colors shrink-0">
                    <Linkedin className="w-6 h-6 text-emerald-500 group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-gray-800">LinkedIn</span>
                    <span className="text-sm">Let's connect</span>
                  </div>
                </a>
                <a
                  href="https://github.com/ShashwatSuman29"
                  className="flex items-center gap-4 text-gray-600 hover:text-emerald-500 transition-colors group p-4 rounded-2xl hover:bg-emerald-50/50"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center group-hover:bg-emerald-500 transition-colors shrink-0">
                    <Github className="w-6 h-6 text-emerald-500 group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-gray-800">GitHub</span>
                    <span className="text-sm">Check my repos</span>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
