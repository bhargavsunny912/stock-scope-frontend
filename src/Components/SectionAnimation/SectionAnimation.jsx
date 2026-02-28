import { motion } from "framer-motion";

const SectionWrapper = ({ children }) => {
  return (
    <motion.section
      initial={{opacity: 0, y:50}}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;