import Image from "next/image";
import Events from "@/Components/events/Events";
import Hero from "@/Components/Hero";
import Player from "@/Components/Player";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Player />
      <Events />
      <div className="h-[4000px] bg-white"></div>
    </main>
  );
}
