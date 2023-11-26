"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/Components/SectionHeader";
import AlbumSlider from "@/Components/albums/AlbumSlider";
import { fadeIn } from "../../../variants";

function Albums(props) {
  return (
    <section id="discography">
      <div className="container mx-auto">
        <SectionHeader pretitle="Discography" title="Popular Albums" />
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
        >
          <AlbumSlider />
        </motion.div>
      </div>
    </section>
  );
}

export default Albums;
