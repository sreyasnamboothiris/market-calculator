import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sun, Moon, Home } from "lucide-react";

export default function Header() {
  // State for dark mode
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  // Toggle theme
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 sm:px-6 py-4 
                 bg-white dark:bg-gray-900 shadow-lg dark:shadow-gray-800 transition-all duration-300"
    >
      {/* Project Name */}
      <Link to="/">
        <motion.h1
          className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white tracking-wide 
                     flex items-center gap-2 group relative"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          {/* Subtle glow effect */}
          <span className="absolute inset-0 bg-teal-500 opacity-0 group-hover:opacity-10 blur-md rounded-full transition-opacity duration-300"></span>
          <span className="relative z-10">StockCalc</span>
        </motion.h1>
      </Link>

      {/* Icons - Home & Dark Mode Toggle */}
      <div className="flex items-center gap-4 sm:gap-6">
        {/* Home Button */}
        <Link to="/">
          <motion.div
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 transition-colors duration-300"
          >
            <Home className="text-gray-800 dark:text-white w-6 h-6 sm:w-7 sm:h-7 cursor-pointer" />
          </motion.div>
        </Link>

        {/* Dark Mode Toggle */}
        <motion.button
          onClick={() => setDarkMode(!darkMode)}
          whileHover={{ scale: 1.2, rotate: 360 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 sm:p-3 bg-gray-100 dark:bg-gray-800 rounded-full transition-colors duration-300 
                     relative overflow-hidden group"
        >
          {/* Shiny effect on hover */}
          <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 mix-blend-overlay"></span>
          {darkMode ? (
            <Sun className="text-yellow-400 w-5 h-5 sm:w-6 sm:h-6 relative z-10" />
          ) : (
            <Moon className="text-gray-800 dark:text-white w-5 h-5 sm:w-6 sm:h-6 relative z-10" />
          )}
        </motion.button>
      </div>
    </motion.header>
  );
}