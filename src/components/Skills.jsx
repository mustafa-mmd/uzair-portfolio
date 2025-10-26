import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaFlask, FaMicroscope, FaVial, FaChartLine, FaLaptopCode, FaLanguage } from 'react-icons/fa';
import { GiChemicalDrop, GiMolecule } from 'react-icons/gi';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const skillCategories = [
    {
      title: 'Laboratory Techniques',
      icon: <FaFlask />,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'UV/Visible Spectroscopy', level: 95 },
        { name: 'HPLC', level: 90 },
        { name: 'NMR Spectroscopy', level: 85 },
        { name: 'IR Spectroscopy', level: 90 },
        { name: 'GC-MS', level: 88 }
      ]
    },
    {
      title: 'Analytical Chemistry',
      icon: <FaMicroscope />,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Chromatography', level: 92 },
        { name: 'Titration', level: 95 },
        { name: 'Spectrophotometry', level: 90 },
        { name: 'Quality Control', level: 88 },
        { name: 'Data Analysis', level: 85 }
      ]
    },
    {
      title: 'Research Areas',
      icon: <GiMolecule />,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Nanocomposite Synthesis', level: 90 },
        { name: 'Inorganic Chemistry', level: 92 },
        { name: 'Environmental Chemistry', level: 88 },
        { name: 'Green Chemistry', level: 85 },
        { name: 'Materials Chemistry', level: 87 }
      ]
    },
    {
      title: 'Technical Skills',
      icon: <FaLaptopCode />,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'ChemDraw', level: 90 },
        { name: 'Origin Software', level: 85 },
        { name: 'MS Excel', level: 92 },
        { name: 'MS Word', level: 95 },
        { name: 'PowerPoint', level: 90 }
      ]
    }
  ];

  const languages = [
    { name: 'English', level: 'Fluent' },
    { name: 'Urdu', level: 'Fluent' },
    { name: 'Pashto', level: 'Fluent' }
  ];

  const softSkills = [
    'Analytical Thinking',
    'Problem Solving',
    'Scientific Writing',
    'Team Collaboration',
    'Laboratory Safety',
    'Research Planning',
    'Time Management',
    'Critical Analysis'
  ];

  return (
    <section id="skills" className="relative py-20 bg-slate-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
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
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 text-lg">Expertise in Chemistry & Research</p>
        </motion.div>

        {/* Technical Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`bg-gradient-to-r ${category.color} p-4 rounded-xl text-white text-2xl`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-purple-400 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Languages Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            <FaLanguage className="inline-block mr-3 text-purple-400" />
            Languages
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {languages.map((lang, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 text-center hover:border-purple-500/50 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-5xl mb-3">{lang.flag}</div>
                <h4 className="text-xl font-bold text-white mb-2">{lang.name}</h4>
                <p className="text-purple-400 font-semibold">{lang.level}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Competencies</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 rounded-xl p-4 text-center hover:border-purple-500/60 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                whileHover={{ scale: 1.1, rotate: 2 }}
              >
                <p className="text-white font-medium">{skill}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
