"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Nav from "@/Components/Nav";
import Socials from "@/Components/Socials";
import Image from "next/image";
import { fadeIn } from "../../variants";

function Footer(props) {
  return (
    <footer className="bg-accent section h-[500px] xl:h-auto">
      <div className="container mx-auto flex-col h-full flex items-center gap-y-8">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
        >
          <Link href="#">
            <h2 className="text-[24px] lg:text-[38px] font-semibold leading-tight">
              hello@miareynolds.com
            </h2>
          </Link>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
        >
          <Nav
            containerStyle="flex flex-col xl:flex-row justify-center items-center gay-y-4 xl:gap-x-8 text-sm uppercase font-semibold"
            linkStyles="hover:text-primary/80 transition-all"
          />
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
        >
          <Socials
            containerStyles="flex text-[24px] gap-x-8"
            iconStyles="hover:text-primary/80 transition-all justify-center"
          />
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
        >
          <Link
            href="#"
            className="relative w-[250px] h-[250px] flex transition-all mb-4"
          >
            <Image
              src={"/assets/header/logo.svg"}
              alt="logo"
              fill
              className="object-contain"
            />
          </Link>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
