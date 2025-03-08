import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom"; // Assuming you'll use React Router for navigation

const calculators = [
  { name: "CAGR & SIP", gradient: "from-teal-500 to-teal-700", path: "/sip-cagr" },
  { name: "Lumpsum", gradient: "from-purple-500 to-purple-700", path: "/lumpsum" },
  { name: "EMI", gradient: "from-red-500 to-red-700", path: "/emi" },
  { name: "Stock Profit", gradient: "from-yellow-500 to-yellow-700", path: "/stock-profit" },
  { name: "Option Pricing", gradient: "from-indigo-500 to-indigo-700", path: "/option-pricing" },
];

export default function CalculatorGrid() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-gray-100 dark:bg-gray-900 transition-all">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 sm:p-8 max-w-5xl">
        {calculators.map((calc, index) => (
          <Link to={calc.path} key={index}>
            <motion.button
              whileHover={{
                scale: 1.1,
                rotate: 2,
                boxShadow: "0px 10px 30px rgba(255,255,255,0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className={`h-32 w-full text-white text-xl font-semibold rounded-2xl shadow-lg 
                        bg-gradient-to-r ${calc.gradient} transition-all relative overflow-hidden 
                        flex items-center justify-center group`}
            >
              {/* Shiny overlay effect */}
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 mix-blend-overlay"></span>
              {/* Text */}
              <span className="relative z-10 drop-shadow-md">{calc.name}</span>
              {/* Subtle glow effect */}
              {calc.name === "CAGR & SIP" && (
                <motion.span
                  className="absolute inset-0 rounded-2xl bg-teal-400 opacity-20 blur-xl"
                  animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.3, 0.2] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}
            </motion.button>
          </Link>
        ))}
      </div>
    </div>
  );
}