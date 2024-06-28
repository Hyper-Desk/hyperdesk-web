import { Button } from "@/components/ui/button";
import { faker } from "@faker-js/faker";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="mt-10 flex w-[1200px] h-[500px] justify-center gap-28 -z-20">
      <div className="flex flex-col gap-6">
        <span className="bg-primary-hover p-4 text-primary-dark">
          {faker.lorem.sentence()}
        </span>
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl font-extrabold text-primary">
            {faker.lorem.slug()}
          </h1>
          <h1 className="text-5xl font-extrabold text-blue-400">
            {faker.lorem.slug()}
          </h1>
        </div>
        <span>{faker.lorem.sentence()}</span>
        <div className="flex gap-4">
          <Button className="rounded-sm p-6 text-base hover:bg-primary-dark hover:shadow-sm">
            Console로 이동
          </Button>
          <Button className="border-gary-300 rounded-sm border bg-white p-6 text-base text-primary hover:border-primary hover:bg-primary-hover">
            영업팀에 문의
          </Button>
        </div>
      </div>
      <Image
        className="rounded-2xl shadow-lg"
        src={faker.image.urlLoremFlickr()}
        width="500"
        height="500"
        alt="hero IMG"
      />
    </div>
  );
}
