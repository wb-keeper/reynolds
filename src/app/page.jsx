import Image from "next/image";
import Events from "@/Components/events/Events";
import Hero from "@/Components/Hero";
import Player from "@/Components/Player";
import Albums from "@/Components/albums/Albums";
import Blog from "@/Components/blog/Blog";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Player />
      <Events />
      <Albums />
      <Blog />
      <div className="h-[3000px] bg-white"></div>
    </main>
  );
}
