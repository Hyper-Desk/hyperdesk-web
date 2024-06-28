"use client";

import { cn } from "@/lib/utils";
import { faker } from "@faker-js/faker";
import { useState } from "react";
import Image from "next/image";

type SectionType = "section-1" | "section-2" | "section-3";

export default function NavInfo() {
  const [visibleSection, setVisibleSection] =
    useState<SectionType>("section-1");

  const handleNavClick = (section: SectionType) => {
    setVisibleSection(section);
  };

  return (
    <div className="mt-10 flex justify-center items-center bg-gray-100 px-20">
      <div className="flex flex-col">
        <nav className="flex gap-6 justify-start border-b border-gray-300 text-gray-500">
          <span
            className={cn(
              visibleSection === "section-1" &&
              "border-b-2 border-primary text-black",
              "p-8 cursor-pointer hover:bg-gray-200",
            )}
            onClick={() => handleNavClick("section-1")}
          >
            <h1>{faker.lorem.word()}</h1>
          </span>
          <span
            className={cn(
              visibleSection === "section-2" &&
              "border-b-2 border-primary text-black",
              "p-8 cursor-pointer hover:bg-gray-200",
            )}
            onClick={() => handleNavClick("section-2")}
          >
            <h1>{faker.lorem.word()}</h1>
          </span>
          <span
            className={cn(
              visibleSection === "section-3" &&
              "border-b-2 border-primary text-black",
              "p-8 cursor-pointer hover:bg-gray-200",
            )}
            onClick={() => handleNavClick("section-3")}
          >
            <h1>{faker.lorem.word()}</h1>
          </span>
        </nav>
        <section
          className={cn(visibleSection !== "section-1" && "hidden", "p-10")}
        >
          <div className="flex gap-6">
            <div className="flex justify-between rounded-lg border border-gray-200 w-[500px] h-[150px] bg-white">
              <div className="flex flex-col gap-1 p-4">
                <h1 className="text-gray-500">{faker.lorem.word()}</h1>
                <p>{faker.lorem.sentence()}</p>
              </div>
              <Image
                className="rounded-r-lg"
                src={faker.image.urlLoremFlickr()}
                width="150"
                height="100"
                alt="hero IMG"
              />
            </div>
            <div className="flex justify-between rounded-lg border border-gray-200 w-[500px] h-[150px] bg-white">
              <div className="flex flex-col gap-1 p-4">
                <h1 className="text-gray-500">{faker.lorem.word()}</h1>
                <p>{faker.lorem.sentence()}</p>
              </div>
              <Image
                className="rounded-r-lg"
                src={faker.image.urlLoremFlickr()}
                width="150"
                height="100"
                alt="hero IMG"
              />
            </div>
            <div className="flex justify-between rounded-lg border border-gray-200 w-[500px] h-[150px] bg-white">
              <div className="flex flex-col gap-1 p-4">
                <h1 className="text-gray-500">{faker.lorem.word()}</h1>
                <p>{faker.lorem.sentence()}</p>
              </div>
              <Image
                className="rounded-r-lg"
                src={faker.image.urlLoremFlickr()}
                width="150"
                height="100"
                alt="hero IMG"
              />
            </div>
          </div>
        </section>
        <section
          className={cn(visibleSection !== "section-2" && "hidden", "p-10")}
        >
          <div className="flex gap-6">
            <div className="flex justify-between rounded-lg border border-gray-200 w-[500px] h-[150px] bg-white">
              <div className="flex flex-col gap-1 p-4">
                <h1 className="text-gray-500">{faker.lorem.word()}</h1>
                <p>{faker.lorem.sentence()}</p>
              </div>
              <Image
                className="rounded-r-lg"
                src={faker.image.urlLoremFlickr()}
                width="150"
                height="100"
                alt="hero IMG"
              />
            </div>
            <div className="flex justify-between rounded-lg border border-gray-200 w-[500px] h-[150px] bg-white">
              <div className="flex flex-col gap-1 p-4">
                <h1 className="text-gray-500">{faker.lorem.word()}</h1>
                <p>{faker.lorem.sentence()}</p>
              </div>
              <Image
                className="rounded-r-lg"
                src={faker.image.urlLoremFlickr()}
                width="150"
                height="100"
                alt="hero IMG"
              />
            </div>
            <div className="flex justify-between rounded-lg border border-gray-200 w-[500px] h-[150px] bg-white">
              <div className="flex flex-col gap-1 p-4">
                <h1 className="text-gray-500">{faker.lorem.word()}</h1>
                <p>{faker.lorem.sentence()}</p>
              </div>
              <Image
                className="rounded-r-lg"
                src={faker.image.urlLoremFlickr()}
                width="150"
                height="100"
                alt="hero IMG"
              />
            </div>
          </div>
        </section>
        <section
          className={cn(visibleSection !== "section-3" && "hidden", "p-10")}
        >
          <div className="flex gap-6">
            <div className="flex justify-between rounded-lg border border-gray-200 w-[500px] h-[150px] bg-white">
              <div className="flex flex-col gap-1 p-4">
                <h1 className="text-gray-500">{faker.lorem.word()}</h1>
                <p>{faker.lorem.sentence()}</p>
              </div>
              <Image
                className="rounded-r-lg"
                src={faker.image.urlLoremFlickr()}
                width="150"
                height="100"
                alt="hero IMG"
              />
            </div>
            <div className="flex justify-between rounded-lg border border-gray-200 w-[500px] h-[150px] bg-white">
              <div className="flex flex-col gap-1 p-4">
                <h1 className="text-gray-500">{faker.lorem.word()}</h1>
                <p>{faker.lorem.sentence()}</p>
              </div>
              <Image
                className="rounded-r-lg"
                src={faker.image.urlLoremFlickr()}
                width="150"
                height="100"
                alt="hero IMG"
              />
            </div>
            <div className="flex justify-between rounded-lg border border-gray-200 w-[500px] h-[150px] bg-white">
              <div className="flex flex-col gap-1 p-4">
                <h1 className="text-gray-500">{faker.lorem.word()}</h1>
                <p>{faker.lorem.sentence()}</p>
              </div>
              <Image
                className="rounded-r-lg"
                src={faker.image.urlLoremFlickr()}
                width="150"
                height="100"
                alt="hero IMG"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
