/** Aethera visual language: this route deliberately remains a single cinematic frame, with no added content competing with the hero. */
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
      </main>
    </>
  );
}
