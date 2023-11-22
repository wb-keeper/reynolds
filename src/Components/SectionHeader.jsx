"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

function SectionHeader({ pretitle, title }) {
  return (
    <header>
      <motion.h1
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="pretitle text-center"
      >
        {pretitle}
      </motion.h1>
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="h2 text-center mb-8"
      >
        {title}
      </motion.div>
    </header>
  );
}

export default SectionHeader;
