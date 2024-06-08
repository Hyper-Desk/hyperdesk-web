import { Button } from "@/components/ui/button";
import Link from "next/link";
import Hero from "./_component/Hero";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full justify-center items-center px-44 py-10">
      <Hero />
    </div>
  );
}
