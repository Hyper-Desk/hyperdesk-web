import { Button } from "@/components/ui/button";
import { faker } from "@faker-js/faker";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="mt-10 flex w-full justify-center gap-28 -z-20">
      <div className="flex flex-col gap-6">
        <span className="bg-primary-hover p-4 text-primary-dark">
          $300의 무료 크레딧과 30여 개 제품에 대한 무료 사용량이 제공될지도?
        </span>
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl font-extrabold text-primary">
            세계 최강의 클라우드 플랫폼
          </h1>
          <h1 className="text-5xl font-extrabold text-blue-400">
            하이퍼 데스크
          </h1>
        </div>
        <span>엄청난 서비스 제공 예정! 진짜 개쩔예정입니다.</span>
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
        src={faker.image.urlLoremFlickr({ width: 400, height: 400 })}
        width="400"
        height="400"
        alt="hero IMG"
      />
    </div>
  );
}
