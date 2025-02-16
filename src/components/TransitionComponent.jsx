import { fadeIn } from "../utils/motion-transition";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const MotionTransition = (props) => {
  const { children, position, className } = props;

  return (
    <motion.div
      variants={fadeIn(position)}
      initial={"hidden"}
      animate={"visible"}
      exit={"hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default MotionTransition;

MotionTransition.propTypes = {
  children: PropTypes.node.isRequired,
  position: PropTypes.string,
  className: PropTypes.string,
};
