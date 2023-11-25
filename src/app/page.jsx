import Image from "next/image";
import Events from "@/Components/events/Events";
import Hero from "@/Components/Hero";
import Player from "@/Components/Player";
import Albums from "@/Components/albums/Albums";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Player />
      <Events />
      <Albums />
      <div className="h-[3000px] bg-white"></div>
    </main>
  );
}
