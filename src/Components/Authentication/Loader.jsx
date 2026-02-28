// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const PageLoader = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center 
                 bg-white/60 backdrop-blur-sm z-50"
    >
      <div className="flex flex-col items-center gap-6">

        {/* 🔷 Logo */}
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1.2,
            ease: "easeInOut"
          }}
        >
          <svg
            viewBox="0 0 20 20"
            fill="none"
            width="60"
            height="60"
            className="bg-blue-700 p-3 rounded-xl shadow-md"
          >
            <polyline
              points="2,14 7,8 11,11 18,4"
              stroke="white"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="18" cy="4" r="2" fill="white" />
          </svg>
        </motion.div>

        {/* 🔄 Spinner */}
        <motion.div
          className="w-10 h-10 border-4 border-gray-300 border-t-blue-600 rounded-full"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 1,
            ease: "linear"
          }}
        />
      </div>
    </motion.div>
  );
};

export default PageLoader;