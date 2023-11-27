import Image from "next/image";
import Events from "@/Components/events/Events";
import Hero from "@/Components/Hero";
import Player from "@/Components/Player";
import Albums from "@/Components/albums/Albums";
import Blog from "@/Components/blog/Blog";
import Newsletter from "@/Components/Newsletter";
import Footer from "@/Components/Footer";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Player />
      <Events />
      <Albums />
      <Blog />
      <Newsletter />
    </main>
  );
}
