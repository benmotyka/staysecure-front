import React from "react";
import { motion } from "framer-motion/dist/framer-motion";
import colors from "constans/colors";

const AnimateWrapper = ({ Component, ...restProps }) => {
  return (
    <>
      <Component {...restProps} />
      <motion.div
        key={Component}
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.8 } }}
        exit={{ scaleX: 1, transition: { duration: 0.8 } }}
        style={{
          originX: 0,
          backgroundColor: colors.darkPurple,
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 2,
        }}
      />
    </>
  );
};

export default AnimateWrapper;
