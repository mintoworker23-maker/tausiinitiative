import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const AnimateOnScroll = ({
  children,
  animation,
  onAnimationComplete,
  triggerOnce = true,
  threshold = 0.3,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ 
    threshold,
    triggerOnce,
  });

const animations = {
    fadeUp: {
      visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      hidden: { opacity: 0, y: 50 }
    },
    fadeIn: {
      visible: { opacity: 1, transition: { duration: 0.6 } },
      hidden: { opacity: 0 }
    },
    slideIn: {
      visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
      hidden: { opacity: 0, x: -50 }
    },
    scale: {
      visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
      hidden: { opacity: 0, scale: 0.8 }
    }
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible").then(() => {
        onAnimationComplete?.();
      });
    } else if (!triggerOnce) {
      controls.start("hidden");
    }
  }, [controls, inView, onAnimationComplete, triggerOnce]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={animations[animation]}
    >
      {children}
    </motion.div>
  );
};