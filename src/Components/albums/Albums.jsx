"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/Components/SectionHeader";
import AlbumSlider from "@/Components/albums/AlbumSlider";

function Albums(props) {
  return (
    <section id="discography">
      <div className="container mx-auto">
        <SectionHeader pretitle="Discography" title="Popular Albums" />
        <div>
          <AlbumSlider />
        </div>
      </div>
    </section>
  );
}

export default Albums;
