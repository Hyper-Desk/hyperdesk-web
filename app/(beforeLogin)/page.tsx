import Advertisement from "./_component/Advertisement";
import Hero from "./_component/Hero";
import NavInfo from "./_component/NavInfo";
import TechSection from "./_component/TechSection";

export default function Home() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center px-44 py-10">
      <Hero />
      <NavInfo />
      <Advertisement />
      <TechSection />
    </div>
  );
}
