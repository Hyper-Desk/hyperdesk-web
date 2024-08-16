import { Button } from "@/components/ui/button";
import { faker } from "@faker-js/faker";
import { Link } from "react-router-dom";
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
      <div className="flex gap-8 justify-center">
        <h1 className="text-5xl font-medium text-white leading-[60px]">
          <span className="text-primary">하이퍼데스크</span>는 분산된 가상화
          기반의 개인 유휴 컴퓨팅 자원을 통합/관리하여 하나로 구성한 사설
          클라우드 인프라 서비스 플랫폼입니다.
        </h1>
        <div className="flex flex-col gap-4">
          <p className="text-3xl font-medium text-white">
            차별화된 <span className="text-blue-400">가상화</span> 기술을 이용한
            신세계를 경험해보세요.
          </p>
          <Button className="w-[200px] rounded-sm bg-white p-6 text-base text-primary hover:bg-primary-light hover:shadow-sm">
            콘솔에서 사용해보기
          </Button>
        </div>
      </div>
      <div className="mt-20 flex justify-around gap-6 p-6">
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
          <img
            className="rounded-2xl shadow-lg"
            src="/landing/cloud.jpeg"
            width="600"
            height="600"
            alt="hero IMG"
          />
        </section>
      </div>
      <div className="mt-20 flex gap-12 justify-center">
        <div className="flex w-[400px] flex-col rounded-xl bg-zinc-900 p-6 cursor-pointer hover:bg-zinc-800">
          <img
            alt="hero IMG"
            className="rounded-2xl"
            src={faker.image.urlLoremFlickr({ width: 100, height: 100 })}
            width="100"
            height="100"
          />
          <p className="p-4 text-white">{faker.lorem.sentence()}</p>
          <Link to="/">
            <p className="cursor-pointer p-4 text-primary">
              {faker.lorem.sentence()}
            </p>
          </Link>
        </div>
        <div className="flex w-[400px] flex-col rounded-xl bg-zinc-900 p-6 cursor-pointer hover:bg-zinc-800">
          <img
            alt="hero IMG"
            className="rounded-2xl"
            src={faker.image.urlLoremFlickr({ width: 100, height: 100 })}
            width="100"
            height="100"
          />
          <p className="p-4 text-white">{faker.lorem.sentence()}</p>
          <Link to="/">
            <p className="cursor-pointer p-4 text-primary">
              {faker.lorem.sentence()}
            </p>
          </Link>
        </div>
        <div className="flex w-[400px] flex-col rounded-xl bg-zinc-900 p-6 cursor-pointer hover:bg-zinc-800">
          <img
            alt="hero IMG"
            className="rounded-2xl"
            src={faker.image.urlLoremFlickr({ width: 100, height: 100 })}
            width="100"
            height="100"
          />
          <p className="p-4 text-white">{faker.lorem.sentence()}</p>
          <Link to="/">
            <p className="cursor-pointer p-4 text-primary">
              {faker.lorem.sentence()}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
