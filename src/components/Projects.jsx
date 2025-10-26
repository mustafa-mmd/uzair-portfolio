
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaFlask, FaWater, FaCertificate } from 'react-icons/fa';
import { GiChemicalDrop } from 'react-icons/gi';

const Projects = () => {
  const ref = useRef(null);
  // 🔧 useInView improved: triggers more easily and safely on mobile
  const isInView = useInView(ref, { once: true, amount: 0.05 });
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      title: 'Nanocomposite Synthesis for Dye Removal',
      description:
        'Final year research project focusing on the synthesis and characterization of Hiptage benghalensis Nickel-Manganese based nanocomposites for efficient removal of murexide dye from wastewater.',
      icon: <GiChemicalDrop />,
      color: 'from-purple-500 to-pink-500',
      tags: ['Nanotechnology', 'Green Chemistry', 'Environmental', 'Characterization'],
      techniques: ['UV-Vis', 'FTIR', 'SEM', 'XRD'],
      impact: 'Environmental sustainability through advanced nanomaterials',
    },
    {
      title: 'Water Quality Analysis System',
      description:
        'Comprehensive water quality assessment using advanced analytical techniques including physical, chemical, and biological testing for environmental monitoring and regulatory compliance.',
      icon: <FaWater />,
      color: 'from-blue-500 to-cyan-500',
      tags: ['Analytical Chemistry', 'Environmental', 'Quality Control'],
      techniques: ['Titration', 'Spectrophotometry', 'Chromatography'],
      impact: '2 years of fieldwork ensuring safe water standards',
    },
    {
      title: 'Spectroscopy & Chromatography Studies',
      description:
        'Advanced research utilizing multiple spectroscopic and chromatographic techniques for molecular characterization and quantitative analysis of complex chemical systems.',
      icon: <FaFlask />,
      color: 'from-green-500 to-emerald-500',
      tags: ['Spectroscopy', 'Chromatography', 'Analysis'],
      techniques: ['HPLC', 'NMR', 'IR', 'GC-MS'],
      impact: 'Enhanced analytical method development',
    },
    {
      title: 'Inorganic & Organometallic Research',
      description:
        'Comprehensive study of coordination chemistry, group theory applications, and synthesis of organometallic compounds with focus on catalytic and materials applications.',
      icon: <FaFlask />,
      color: 'from-orange-500 to-red-500',
      tags: ['Inorganic Chemistry', 'Organometallics', 'Synthesis'],
      techniques: ['Synthesis', 'Characterization', 'Analysis'],
      impact: 'Fundamental research in coordination chemistry',
    },
  ];

  const certifications = [
    {
      title: 'Climate Change and Sovereign Risk',
      organization: 'Asian Development Bank',
      icon: <FaCertificate />,
    },
    {
      title: 'Green Investment Renewable Energy',
      organization: 'Asian Development Bank',
      icon: <FaCertificate />,
    },
    {
      title: 'Gender Integration in Health Programs',
      organization: 'Asian Development Bank',
      icon: <FaCertificate />,
    },
  ];

  return (
    <section
      id="projects"
      ref={ref}
      //  FIXED: removed overflow-hidden, added min-h-screen + will-change-transform for GPU fix
      className="relative min-h-screen py-20 bg-gradient-to-b from-slate-800 to-slate-900 will-change-transform"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        {/*  reduced blur for mobile performance */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-500 rounded-full blur-2xl" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-2xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Research &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 text-lg">
            Innovative Chemistry Research & Analysis
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 h-full hover:border-purple-500/50 transition-all duration-300 overflow-hidden">
                {/* Glow Effect on Hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  animate={hoveredProject === index ? { scale: 1.05 } : { scale: 1 }}
                />

                {/* Icon */}
                <div
                  className={`bg-gradient-to-r ${project.color} p-4 rounded-xl text-white text-3xl w-fit mb-4 relative z-10`}
                >
                  {project.icon}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-600 transition-all duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-purple-600/20 text-purple-300 text-sm rounded-full border border-purple-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Techniques */}
                  <div className="mb-4">
                    <p className="text-gray-400 text-sm mb-2">
                      Techniques Used:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.techniques.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Impact */}
                  <div className="pt-4 border-t border-purple-500/20">
                    <p className="text-purple-400 text-sm italic">
                      {project.impact}
                    </p>
                  </div>
                </div>

                {/* Hover Decoration */}
                <motion.div
                  className={`absolute -right-10 -bottom-10 w-40 h-40 bg-gradient-to-r ${project.color} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Professional{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Certifications
            </span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-purple-400 text-3xl mb-4">{cert.icon}</div>
                <h4 className="text-lg font-bold text-white mb-2">
                  {cert.title}
                </h4>
                <p className="text-gray-400 text-sm">{cert.organization}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-purple-600/10 to-pink-600/10 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 rounded-xl text-white text-3xl">
              <FaWater />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-2">
                Water Quality Analyst
              </h3>
              <p className="text-purple-400 mb-4">
                Peace and Development Organization (NGO) | Jan 2023 - Dec 2024
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>
                    Collected and analyzed water samples from various sources including rivers, lakes, and treatment plants
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>
                    Performed comprehensive physical, chemical, and biological tests for water quality assessment
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>
                    Utilized analytical techniques including titration, spectrophotometry, and chromatography
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>
                    Ensured compliance with environmental laws, health regulations, and safety protocols
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
