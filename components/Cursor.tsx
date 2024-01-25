import { motion } from "framer-motion";

const cursorVariants = {
  blinking: {
    opacity: [0, 0, 1, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatDelay: 0,
      ease: "linear",
      times: [0, 0.5, 0.5, 1]
    }
  }
};

const Cursor = () => {
  return (
    <motion.div
    variants={cursorVariants}
    animate="blinking"
    className="inline-block ml-2 lg:h-24 h-8 w-[2px] translate-y-1 bg-slate-900"
  />
  )
}

export default Cursor