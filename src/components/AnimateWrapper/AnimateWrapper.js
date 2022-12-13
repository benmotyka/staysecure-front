import React from "react";
import { motion } from "framer-motion/dist/framer-motion";
import colors from "constans/colors";

const DURATION_S = 0.5;
const AnimateWrapper = ({ Component, ...restProps }) => {
  return (
    <>
      <Component {...restProps} />
      <motion.div
        key={Component}
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: DURATION_S } }}
        exit={{ scaleX: 1, transition: { duration: DURATION_S } }}
        style={{
          originX: 0,
          backgroundColor: colors.darkPurple,
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 30,
        }}
      />
    </>
  );
};

export default AnimateWrapper;
