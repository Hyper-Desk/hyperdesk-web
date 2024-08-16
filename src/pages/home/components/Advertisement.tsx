import { Button } from "@/components/ui/button";
import { faker } from "@faker-js/faker";

export default function Advertisement() {
  return (
    <div className="mt-20 flex w-[1200px] h-[400px] justify-center gap-52 -z-20">
      <img
        className="rounded-2xl shadow-lg"
        src="/landing/recycle.jpeg"
        width="400"
        height="400"
        alt="hero IMG"
      />
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl font-bold leading-[60px]">
            잠들어 있는 컴퓨팅 자원의
            <br />
            재탄생
          </h1>
        </div>
        <span className="text-gray-500">{faker.lorem.sentence()}</span>
        <div className="flex gap-4">
          <Button className="border-gary-300 rounded-sm border bg-white p-6 text-base text-primary hover:border-primary hover:bg-primary-hover">
            모든 제품 보기
          </Button>
          <Button className="rounded-sm p-6 text-base hover:bg-primary-dark hover:shadow-sm">
            무료로 시작하기
          </Button>
        </div>
      </div>
    </div>
  );
}
