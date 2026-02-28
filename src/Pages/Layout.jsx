import { Outlet, useLocation } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import Scrollable from "../Components/Scrolling/Scrollable";
import ExchangeRates from "../Components/ExchangeRates/ExchangeRates";

const Layout = () => {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <Scrollable />
      <ExchangeRates />

      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
};

export default Layout;