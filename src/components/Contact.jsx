// import { motion } from 'framer-motion';
// import { useInView } from 'framer-motion';
// import { useRef, useState } from 'react';
// import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter, FaPaperPlane } from 'react-icons/fa';

// const Contact = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.3 });
  
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });
  
//   const [formStatus, setFormStatus] = useState({ type: '', message: '' });
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const contactInfo = [
//     {
//       icon: <FaEnvelope />,
//       title: 'Email',
//       value: 'muhammaduzairicp123@gmail.com',
//       link: 'mailto:muhammaduzairicp123@gmail.com',
      
//       color: 'from-purple-500 to-pink-500'
//     },
//     {
//       icon: <FaPhone />,
//       title: 'Phone',
//       value: '+92 344 0068860',
//       link: 'tel:+923440068860',
//       color: 'from-blue-500 to-cyan-500'
//     },
//     {
//       icon: <FaMapMarkerAlt />,
//       title: 'Location',
//       value: 'Charsadda, Pakistan',
//       link: null,
//       color: 'from-green-500 to-emerald-500'
//     }
//   ];

//   const socialLinks = [
//     { icon: <FaLinkedin />, name: 'LinkedIn', color: 'hover:text-blue-500', link: '#' },
//     { icon: <FaGithub />, name: 'GitHub', color: 'hover:text-gray-400', link: '#' },
//     { icon: <FaTwitter />, name: 'Twitter', color: 'hover:text-blue-400', link: '#' }
//   ];

  

  
//   return (
//     <section id="contact" className="relative py-20 bg-slate-900 overflow-hidden">
//       {/* Background Effects */}
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
//         <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500 rounded-full blur-3xl" />
//       </div>

//       <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Title */}
//         <motion.div
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
//             Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Touch</span>
//           </h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto rounded-full" />
//           <p className="text-gray-400 mt-4 text-lg">Let's discuss research opportunities and collaborations</p>
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-12">
//           {/* Contact Information */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
            
//             <div className="space-y-6 mb-8">
//               {contactInfo.map((info, index) => (
//                 <motion.div
//                   key={index}
//                   className="flex items-start gap-4 group"
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={isInView ? { opacity: 1, x: 0 } : {}}
//                   transition={{ delay: 0.3 + index * 0.1 }}
//                 >
//                   <div className={`bg-gradient-to-r ${info.color} p-4 rounded-xl text-white text-xl group-hover:scale-110 transition-transform duration-300`}>
//                     {info.icon}
//                   </div>
//                   <div className="flex-1">
//                     <h4 className="text-gray-400 text-sm mb-1">{info.title}</h4>
//                     {info.link ? (
//                       <a
//                         href={info.link}
//                         className="text-white text-lg hover:text-purple-400 transition-colors duration-300 break-all"
//                       >
//                         {info.value}
//                       </a>
//                     ) : (
//                       <p className="text-white text-lg">{info.value}</p>
//                     )}
//                   </div>
//                 </motion.div>
//               ))}
//             </div>

//             {/* Social Links */}
//             <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
//               <h4 className="text-xl font-bold text-white mb-4">Connect With Me</h4>
//               <div className="flex gap-4">
//                 {socialLinks.map((social, index) => (
//                   <motion.a
//                     key={index}
//                     href={social.link}
//                     className={`bg-slate-700/50 p-4 rounded-xl text-white text-2xl ${social.color} transition-all duration-300 hover:scale-110`}
//                     whileHover={{ y: -5 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     {social.icon}
//                   </motion.a>
//                 ))}
//               </div>
//             </div>

//             {/* References */}
//             <motion.div
//               className="mt-8 bg-gradient-to-r from-purple-600/10 to-pink-600/10 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6"
//               initial={{ opacity: 0 }}
//               animate={isInView ? { opacity: 1 } : {}}
//               transition={{ delay: 0.6 }}
//             >
//               <h4 className="text-xl font-bold text-white mb-4">References</h4>
//               <div className="space-y-4">
//                 <div>
//                   <p className="text-purple-400 font-semibold">Dr. Hamayun Khan (Professor)</p>
//                   <p className="text-gray-400 text-sm">Islamia College University, Peshawar</p>
//                   <p className="text-gray-300 text-sm">hamayun84@icp.edu.pk</p>
//                 </div>
//                 <div>
//                   <p className="text-purple-400 font-semibold">Dr. Sayyar Muhammad (Assistant Professor)</p>
//                   <p className="text-gray-400 text-sm">Islamia College University, Peshawar</p>
//                   <p className="text-gray-300 text-sm">sayyar@icp.edu.pk</p>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>

          
          
//         </div>
      
//       </div>
      
//     </section>
//   );
// };

// export default Contact;




import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'muhammaduzairicp123@gmail.com',
      link: 'mailto:muhammaduzairicp123@gmail.com',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      value: '+92 344 0068860',
      link: 'tel:+923440068860',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      value: 'Charsadda, Pakistan',
      link: null,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const socialLinks = [
    { icon: <FaFacebook />, name: 'LinkedIn', color: 'hover:text-blue-500', link: '#' },
    { icon: <FaInstagram />, name: 'GitHub', color: 'hover:text-gray-400', link: '#' },
    { icon: <FaWhatsapp />, name: 'WhatsApp', color: 'hover:text-blue-400', link: 'https://wa.me/923440068860' }
  ];

  return (
    <section id="contact" className="relative py-20 bg-slate-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 text-lg">Let's discuss research opportunities and collaborations</p>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
          
          <div className="grid md:grid-cols-3 gap-5 mb-12">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center group"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <div className={`bg-gradient-to-r ${info.color} p-3 rounded-xl text-white text-xl group-hover:scale-110 transition-transform duration-300 mb-4`}>
                  {info.icon}
                </div>
                <div className="text-center">
                  <h4 className="text-gray-400 text-sm mb-1">{info.title}</h4>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-white text-md hover:text-purple-400 transition-colors duration-300 break-all"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-white text-lg">{info.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Social Links */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 mb-12">
            <h4 className="text-xl font-bold text-white mb-6">Connect With Me</h4>
            <div className="flex justify-center gap-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  className={`bg-slate-700/50 p-4 rounded-xl text-white text-2xl ${social.color} transition-all duration-300 hover:scale-110`}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* References */}
          <motion.div
            className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
          >
            <h4 className="text-2xl font-bold text-white mb-6">References</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center md:text-left">
                <p className="text-purple-400 font-semibold text-lg mb-2">Dr. Hamayun Khan</p>
                <p className="text-gray-400 text-sm mb-1">Professor</p>
                <p className="text-gray-400 text-sm mb-2">Islamia College University, Peshawar</p>
                <a href="mailto:hamayun84@icp.edu.pk" className="text-gray-300 text-sm hover:text-purple-400 transition-colors">
                  hamayun84@icp.edu.pk
                </a>
              </div>
              <div className="text-center md:text-left">
                <p className="text-purple-400 font-semibold text-lg mb-2">Dr. Sayyar Muhammad</p>
                <p className="text-gray-400 text-sm mb-1">Assistant Professor</p>
                <p className="text-gray-400 text-sm mb-2">Islamia College University, Peshawar</p>
                <a href="mailto:sayyar@icp.edu.pk" className="text-gray-300 text-sm hover:text-purple-400 transition-colors">
                  sayyar@icp.edu.pk
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;