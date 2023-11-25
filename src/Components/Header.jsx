"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import NavMobile from "@/Components/NavMobile";
import Nav from "@/Components/Nav";
import MenuBtn from "@/Components/MenuBtn";
import Socials from "@/Components/Socials";

function Header(props) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handlerScroll = () => {
      setActive(window.scrollY > 100);
    };
    window.addEventListener("scroll", handlerScroll);
    return () => {
      window.removeEventListener("scroll", handlerScroll);
    };
  }, []);

  return (
    <header
      className={`fixed z-50 w-full transition-all ${
        active ? "bg-[#030315] py-6" : "bg-transparent py-8"
      }`}
    >
      <div className="container mx-auto flex flex-col xl:flex-row items-center justify-between">
        <Link
          href={"#"}
          className="relative flex w-[226px] h-[37.64px] transition-all mb-4 xl:mb-0"
        >
          <Image
            src={"/assets/header/logo.svg"}
            alt="logo"
            fill
            className="object-contain"
          />
        </Link>
        <Nav containerStyle="hidden xl:flex items-center gap-x-8" />
        <NavMobile />
        <div className="absolute right-7 top-9 z-10 xl:hidden">
          <MenuBtn />
        </div>

        <Socials
          containerStyles="flex text-[24px] gap-x-4"
          iconStyles="hover:text-accent transition-all"
        />
      </div>
    </header>
  );
}

export default Header;
