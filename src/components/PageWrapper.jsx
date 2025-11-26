import React from "react";
import { motion } from "framer-motion";

export default function PageWrapper({ children, bgColor = "#f9f9f9", bgImage }) {
  return (
    <motion.div
      className="page-wrapper"
      style={{
        backgroundColor: bgColor,
        backgroundImage: bgImage ? `url(${bgImage})` : "none",
      }}
      initial={{ opacity: 0, x:50 }}
      animate={{ opacity: 1, x:0 }}
      exit={{ opacity: 0, x:-50 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}