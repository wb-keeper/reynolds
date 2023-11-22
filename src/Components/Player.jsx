"use client";

import { motion } from "framer-motion";
import { AudioPlayer } from "react-audio-play";

function Player(props) {
  return (
    <>
      <div>
        <div className="container mx-auto">
          <div>text & avatar img</div>
          <div>
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
                width: "100%",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Player;
