"use client";

import { Button } from "@/components/ui/button";
import { faker } from "@faker-js/faker";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type SectionType = "section-1" | "section-2" | "section-3";

export default function TechSection() {
  const [visibleSection, setVisibleSection] =
    useState<SectionType>("section-1");

  const handleNavClick = (section: SectionType) => {
    setVisibleSection(section);
  };
  return (
    <div className="-bottom-[1600px] mt-20 flex w-[1600px] flex-col bg-black p-20">
      <div className="flex gap-8">
        <h1 className="text-5xl font-medium text-white">
          <span className="text-primary">{faker.lorem.word()}</span>{" "}
          {faker.lorem.sentence()}
        </h1>
        <div className="flex flex-col gap-4">
          <p className="text-3xl font-medium text-white">
            <span className="text-blue-400">{faker.lorem.word()}</span>{" "}
            {faker.lorem.sentence()}
          </p>
          <Button className="w-[200px] rounded-sm bg-white p-6 text-base text-primary hover:bg-primary-light hover:shadow-sm">
            콘솔에서 사용해보기
          </Button>
        </div>
      </div>
      <div className="mt-20 flex justify-between gap-6 p-6">
        <nav className="flex flex-col items-center justify-center gap-6">
          <span className="text-2xl font-medium text-white">
            {faker.lorem.word()}
          </span>
          <span className="text-2xl font-medium text-white">
            {faker.lorem.word()}
          </span>
          <span className="text-2xl font-medium text-white">
            {faker.lorem.word()}
          </span>
        </nav>
        <section className="">
          <Image
            className="rounded-2xl shadow-lg"
            src={faker.image.urlLoremFlickr({ width: 700, height: 700 })}
            width="700"
            height="700"
            alt="hero IMG"
          />
        </section>
      </div>
      <div className="mt-20 flex gap-12">
        <div className="flex w-[500px] flex-col rounded-xl bg-zinc-900 p-6 cursor-pointer hover:bg-zinc-800">
          <Image
            alt="hero IMG"
            className="rounded-2xl"
            src={faker.image.urlLoremFlickr({ width: 100, height: 100 })}
            width="100"
            height="100"
          />
          <p className="p-4 text-white">{faker.lorem.sentence()}</p>
          <Link href="/">
            <p className="cursor-pointer p-4 text-primary">
              {faker.lorem.sentence()}
            </p>
          </Link>
        </div>
        <div className="flex w-[500px] flex-col rounded-xl bg-zinc-900 p-6 cursor-pointer hover:bg-zinc-800">
          <Image
            alt="hero IMG"
            className="rounded-2xl"
            src={faker.image.urlLoremFlickr({ width: 100, height: 100 })}
            width="100"
            height="100"
          />
          <p className="p-4 text-white">{faker.lorem.sentence()}</p>
          <Link href="/">
            <p className="cursor-pointer p-4 text-primary">
              {faker.lorem.sentence()}
            </p>
          </Link>
        </div>
        <div className="flex w-[500px] flex-col rounded-xl bg-zinc-900 p-6 cursor-pointer hover:bg-zinc-800">
          <Image
            alt="hero IMG"
            className="rounded-2xl"
            src={faker.image.urlLoremFlickr({ width: 100, height: 100 })}
            width="100"
            height="100"
          />
          <p className="p-4 text-white">{faker.lorem.sentence()}</p>
          <Link href="/">
            <p className="cursor-pointer p-4 text-primary">
              {faker.lorem.sentence()}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
