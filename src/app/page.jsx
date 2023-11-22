import Image from "next/image";
import Events from "@/Components/events/Events";
import Hero from "@/Components/Hero";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Events />
      <div className="h-[4000px]"></div>
    </main>
  );
}
