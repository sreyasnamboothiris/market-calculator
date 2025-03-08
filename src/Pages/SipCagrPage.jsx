import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";

export default function SipCagrPage() {
  return (
    <div className="w-full min-h-screen bg-gray-100 dark:bg-gray-900 transition-all flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex-1 flex flex-col items-center justify-center p-4 sm:p-8"
      >
        {/* Back Button */}
        <Link to="/" className="absolute top-20 left-6">
          <motion.div
            whileHover={{ x: -5 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-2 text-gray-800 dark:text-white"
          >
            <ArrowLeft className="w-6 h-6" />
            <span className="text-sm font-medium">Back to Home</span>
          </motion.div>
        </Link>

        {/* Title */}
        <motion.h2
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-8 tracking-tight"
        >
          SIP & CAGR Calculator
        </motion.h2>

        {/* Placeholder Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full max-w-lg bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8"
        >
          <div className="space-y-6">
            {/* Placeholder Inputs */}
            <motion.div
              className="h-12 bg-gray-200 dark:bg-gray-700 rounded-lg"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className="h-12 bg-gray-200 dark:bg-gray-700 rounded-lg"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
            />
            <motion.div
              className="h-12 bg-gray-200 dark:bg-gray-700 rounded-lg"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
            />

            {/* Calculate Button */}
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(0,0,0,0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="w-full h-12 bg-teal-600 text-white font-semibold rounded-lg shadow-md"
            >
              Calculate (Coming Soon)
            </motion.button>
          </div>
        </motion.div>

        {/* Decorative Background Element */}
        <motion.div
          className="absolute inset-0 -z-10 bg-teal-500 opacity-10 blur-3xl rounded-full w-96 h-96"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </motion.div>
    </div>
  );
}