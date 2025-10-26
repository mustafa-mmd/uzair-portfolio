import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaGraduationCap, FaFlask, FaLeaf, FaAward } from 'react-icons/fa';
import profile from "../assets/profile.jpeg";
const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [imageLoaded, setImageLoaded] = useState(false);

  const stats = [
    { icon: <FaGraduationCap />, label: 'CGPA', value: '3.79' },
    { icon: <FaFlask />, label: 'Lab Experience', value: '2+ Years' },
    { icon: <FaLeaf />, label: 'Focus Area', value: 'Nanoscience' },
    { icon: <FaAward />, label: 'Projects', value: '5+' }
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Chemistry',
      institution: 'Islamia College University, Peshawar',
      period: 'November 2021 - July 2025',
      grade: 'CGPA: 3.79'
    },
    {
      degree: 'FSC Pre-Medical (Intermediate)',
      institution: 'ICMS College System, Peshawar',
      period: 'August 2019 - June 2021',
      grade: 'Grade: A+ (976/1100)'
    }
  ];

  return (
    <section id="about" className="relative py-20 bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto rounded-full" />
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              Chemistry Graduate & Researcher
            </h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Chemistry graduate with specialized expertise in <span className="text-purple-400 font-semibold">inorganic and analytical chemistry</span>, experienced in nanocomposite synthesis for environmental applications.
              </p>
              <p>
                My research focuses on the synthesis and characterization of <span className="text-purple-400 font-semibold">Hiptage benghalensis Nickel-Manganese based nanocomposites</span> for removal of murexide dye, combining green chemistry with nanotechnology.
              </p>
              <p>
                With over 2 years of hands-on laboratory experience as a Water Quality Analyst, I'm skilled in advanced analytical techniques including UV/Visible spectroscopy, HPLC, NMR, IR, and GC-MS.
              </p>
              <p>
                Passionate about <span className="text-purple-400 font-semibold">nanoscience and environmental applications</span>, I'm seeking opportunities in materials chemistry research to contribute to sustainable solutions.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-4 hover:border-purple-500/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="text-purple-400 text-2xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Profile Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
              
              {/* Image Container */}
              <div className="relative bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-2 border border-purple-500/30">
                <div className="relative aspect-square rounded-xl overflow-hidden bg-slate-800">
                  {!imageLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" />
                    </div>
                  )}
                  <img
                    src={profile}
                    alt="Muhammad Uzair"
                    className="w-full h-full object-cover"
                    onLoad={() => setImageLoaded(true)}
                  />
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 bg-purple-600 text-white p-4 rounded-xl shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <FaGraduationCap className="text-3xl" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            Educational <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Journey</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-3 rounded-lg">
                    <FaGraduationCap className="text-2xl text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2">{edu.degree}</h4>
                    <p className="text-purple-400 mb-2">{edu.institution}</p>
                    <p className="text-gray-400 text-sm mb-2">{edu.period}</p>
                    <p className="text-green-400 font-semibold">{edu.grade}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
