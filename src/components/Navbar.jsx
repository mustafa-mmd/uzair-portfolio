
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // update active section by checking each section's rect
      const sections = navItems.map(item => item.id);
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // pick threshold near top of viewport (tweak 100 if necessary)
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // run once on mount to set initial state
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // navItems is static here; keep [] to avoid reattaching in your app

  // Robust scroll helper: accounts for fixed nav height and menu closing
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) {
      // Element not found — nothing to do
      setIsMobileMenuOpen(false);
      return;
    }

    // compute scroll action (so we can call it after menu close)
    const doScroll = () => {
      const rect = el.getBoundingClientRect();
      // determine nav height (fallback to 64)
      const navEl = document.querySelector('nav');
      const navHeight = navEl ? navEl.offsetHeight : 64;
      const top = window.scrollY + rect.top - navHeight - 12; // slight offset
      window.scrollTo({ top, behavior: 'smooth' });
      // close mobile menu if not already closed
      setIsMobileMenuOpen(false);
    };

    if (isMobileMenuOpen) {
      // Close the menu first, wait for exit animation, then scroll
      setIsMobileMenuOpen(false);
      // 300ms matches your mobile menu animation duration — tweak if you changed it
      setTimeout(doScroll, 320);
    } else {
      doScroll();
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-slate-900/95 backdrop-blur-md shadow-lg shadow-purple-500/10'
        : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div className="text-2xl font-bold" whileHover={{ scale: 1.05 }}>
            <span className="text-white">Muhammad</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"> Uzair</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-white bg-purple-600/20'
                    : 'text-gray-300 hover:text-white hover:bg-purple-600/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
                {activeSection === item.id && (
                  <motion.div
                    className="h-0.5 bg-gradient-to-r from-purple-400 to-pink-600 mt-1"
                    layoutId="activeSection"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-white text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-slate-900/98 backdrop-blur-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-6 space-y-3">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-white bg-purple-600/20'
                      : 'text-gray-300 hover:text-white hover:bg-purple-600/10'
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
