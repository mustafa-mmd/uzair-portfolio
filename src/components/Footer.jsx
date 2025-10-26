import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-dark border-t border-white/10 py-8 text-center">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-gray-400"
      >
        © {new Date().getFullYear()} <span className="text-primary">Muhammad Uzair</span> — All Rights Reserved
      </motion.p>
    </footer>
  );
};

export default Footer;
