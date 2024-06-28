import Advertisement from "./_component/Advertisement";
import Hero from "./_component/Hero";
import NavInfo from "./_component/NavInfo";

export default function Home() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center px-44 py-10">
      <Hero />
      <NavInfo />
      <Advertisement />
    </div>
  );
}
