"use client";

import { motion } from "framer-motion";
import { AudioPlayer } from "react-audio-play";
import Image from "next/image";

function Player(props) {
  return (
    <>
      <div className="bg-gradient-to-r from-tertiary/70 to-primary/10 backdrop-blur-[15px] -mt-[5px] pb-[15px] h-[112px] flex items-center relative z-40">
        <div className="container mx-auto flex flex-col justify-between items-center xl:flex-row">
          <div className="hidden w-[310px] xl:flex items-center gap-x-4">
            <div className="relative w-14 h-14">
              <Image
                src={"/assets/player/avatar.png"}
                fill
                alt="avatar"
                priority
              />
            </div>
          </div>
          <div className="w-full max-w-4xl">
            <AudioPlayer
              loop
              preload="none"
              color="#fff"
              volume={40}
              volumePlacement="top"
              src="/assets/freedom.mp3"
              style={{
                background: "transparent",
                boxShadow: "none",
                maxWidth: "100%",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Player;
