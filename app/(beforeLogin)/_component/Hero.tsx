import { Button } from "@/components/ui/button";
import { faker } from "@faker-js/faker";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex w-full justify-around mt-10">
      <div className="flex flex-col gap-6">
        <span className="p-4 bg-primary-hover text-primary-dark">
          $600의 무료 크레딧과 20여 개 제품에 대한 무료 사용량이 제공될지도?
        </span>
        <div className="flex flex-col gap-2">
          <h1 className="text-primary font-extrabold text-5xl">
            세계 최강의 클라우드 플랫폼
          </h1>
          <h1 className="text-blue-400 font-extrabold text-5xl">
            하이퍼 데스크
          </h1>
        </div>
        <span>엄청난 서비스 제공 예정! 진짜 개쩔예정입니다.</span>
        <div className="flex gap-4">
          <Button className="p-6 rounded-sm text-base hover:bg-primary-dark hover:shadow-sm">
            Console로 이동
          </Button>
          <Button className="p-6 rounded-sm text-base bg-white border border-gary-300 text-primary hover:border-primary hover:bg-primary-hover">
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
