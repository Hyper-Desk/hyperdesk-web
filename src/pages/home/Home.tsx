import Hero from "./components/Hero";
import NavInfo from "./components/NavInfo";
import Advertisement from "./components/Advertisement";
import TechSection from "./components/TechSection";

export default function Home() {
  return (
    <div className="flex w-full flex-col items-center justify-center px-44 py-10 font-inter">
      <Hero />
      <NavInfo />
      <Advertisement />
      <TechSection />
    </div>
  );
}
