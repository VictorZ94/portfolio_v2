import { transitionVariantsPage } from "../utils/motion-transition";
import { AnimatePresence, motion } from "framer-motion";

const TransitionPage = () => {
  return (
    <AnimatePresence mode="wait">
      <div>
        <motion.div
          key="transition-page"
          variants={transitionVariantsPage}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut" }}
          className="fixed top-0 bottom-0 right-full w-screen z-30 bg-slate-900"
        ></motion.div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionPage;
