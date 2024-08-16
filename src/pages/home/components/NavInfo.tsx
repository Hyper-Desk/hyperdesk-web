import { cn } from "@/lib/utils";
import { faker } from "@faker-js/faker";
import { useState } from "react";

type SectionType = "section-1" | "section-2" | "section-3";

export default function NavInfo() {
  const [visibleSection, setVisibleSection] =
    useState<SectionType>("section-1");

  const handleNavClick = (section: SectionType) => {
    setVisibleSection(section);
  };

  return (
    <div className="mt-20 flex justify-center items-center bg-gray-100 px-20">
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
            <h1>사용자</h1>
          </span>
          <span
            className={cn(
              visibleSection === "section-2" &&
                "border-b-2 border-primary text-black",
              "p-8 cursor-pointer hover:bg-gray-200",
            )}
            onClick={() => handleNavClick("section-2")}
          >
            <h1>개발자</h1>
          </span>
          <span
            className={cn(
              visibleSection === "section-3" &&
                "border-b-2 border-primary text-black",
              "p-8 cursor-pointer hover:bg-gray-200",
            )}
            onClick={() => handleNavClick("section-3")}
          >
            <h1>비즈니스</h1>
          </span>
        </nav>
        <section
          className={cn(visibleSection !== "section-1" && "hidden", "p-10")}
        >
          <div className="flex gap-6">
            <div className="flex justify-between rounded-lg border border-gray-200 w-[400px] h-[150px] bg-white">
              <div className="flex flex-col gap-1 p-4">
                <h1 className="text-gray-500">수익 창출</h1>
                <p>사용하지 않는 컴퓨팅 자원을 제공해 수익을 창출하세요</p>
              </div>
              <img
                className="rounded-r-lg"
                src="/landing/money.jpeg"
                width="100"
                height="100"
                alt="hero IMG"
              />
            </div>
            <div className="flex justify-between rounded-lg border border-gray-200 w-[400px] h-[150px] bg-white">
              <div className="flex flex-col gap-1 p-4">
                <h1 className="text-gray-500">컴퓨팅 자원</h1>
                <p>필요한만큼 컴퓨팅 자원을 이용하세요</p>
              </div>
              <img
                className="rounded-r-lg"
                src="/landing/computing.jpeg"
                width="100"
                height="100"
                alt="hero IMG"
              />
            </div>
            <div className="flex justify-between rounded-lg border border-gray-200 w-[400px] h-[150px] bg-white">
              <div className="flex flex-col gap-1 p-4">
                <h1 className="text-gray-500">스토리지</h1>
                <p>소중한 데이터를 안전하게 보관하세요</p>
              </div>
              <img
                className="rounded-r-lg"
                src="/landing/storage.jpeg"
                width="100"
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
            <div className="flex justify-between rounded-lg border border-gray-200 w-[400px] h-[150px] bg-white">
              <div className="flex flex-col gap-1 p-4">
                <h1 className="text-gray-500">{faker.lorem.word()}</h1>
                <p>{faker.lorem.sentence()}</p>
              </div>
              <img
                className="rounded-r-lg"
                src={faker.image.urlLoremFlickr()}
                width="100"
                height="100"
                alt="hero IMG"
              />
            </div>
            <div className="flex justify-between rounded-lg border border-gray-200 w-[400px] h-[150px] bg-white">
              <div className="flex flex-col gap-1 p-4">
                <h1 className="text-gray-500">{faker.lorem.word()}</h1>
                <p>{faker.lorem.sentence()}</p>
              </div>
              <img
                className="rounded-r-lg"
                src={faker.image.urlLoremFlickr()}
                width="100"
                height="100"
                alt="hero IMG"
              />
            </div>
            <div className="flex justify-between rounded-lg border border-gray-200 w-[400px] h-[150px] bg-white">
              <div className="flex flex-col gap-1 p-4">
                <h1 className="text-gray-500">{faker.lorem.word()}</h1>
                <p>{faker.lorem.sentence()}</p>
              </div>
              <img
                className="rounded-r-lg"
                src={faker.image.urlLoremFlickr()}
                width="100"
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
            <div className="flex justify-between rounded-lg border border-gray-200 w-[400px] h-[150px] bg-white">
              <div className="flex flex-col gap-1 p-4">
                <h1 className="text-gray-500">{faker.lorem.word()}</h1>
                <p>{faker.lorem.sentence()}</p>
              </div>
              <img
                className="rounded-r-lg"
                src={faker.image.urlLoremFlickr()}
                width="100"
                height="100"
                alt="hero IMG"
              />
            </div>
            <div className="flex justify-between rounded-lg border border-gray-200 w-[400px] h-[150px] bg-white">
              <div className="flex flex-col gap-1 p-4">
                <h1 className="text-gray-500">{faker.lorem.word()}</h1>
                <p>{faker.lorem.sentence()}</p>
              </div>
              <img
                className="rounded-r-lg"
                src={faker.image.urlLoremFlickr()}
                width="100"
                height="100"
                alt="hero IMG"
              />
            </div>
            <div className="flex justify-between rounded-lg border border-gray-200 w-[400px] h-[150px] bg-white">
              <div className="flex flex-col gap-1 p-4">
                <h1 className="text-gray-500">{faker.lorem.word()}</h1>
                <p>{faker.lorem.sentence()}</p>
              </div>
              <img
                className="rounded-r-lg"
                src={faker.image.urlLoremFlickr()}
                width="100"
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
