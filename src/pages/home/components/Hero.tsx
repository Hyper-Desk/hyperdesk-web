import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="mt-10 flex h-[500px] w-[1200px] justify-center gap-28">
      <div className="flex flex-col gap-6">
        <span className="bg-primary-hover p-4 text-primary-dark">
          NOTICE : 서비스 제공 예정
        </span>
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl font-extrabold text-primary">
            하이퍼데스크의 놀라운
          </h1>
          <h1 className="text-5xl font-extrabold leading-[55px] text-blue-400">
            가상 클라우드 서비스를
            <br />
            경험해보세요
          </h1>
        </div>
        <span>사용자들의 컴퓨팅 자원을 모아 구성한 인프라 서비스 플랫폼</span>
        <div className="flex gap-4">
          <Button className="rounded-sm p-6 text-base hover:bg-primary-dark hover:shadow-sm">
            <Link to="/app">Console로 이동</Link>
          </Button>
          <Button className="border-gary-300 rounded-sm border bg-white p-6 text-base text-primary hover:border-primary hover:bg-primary-hover">
            영업팀에 문의
          </Button>
        </div>
      </div>
      <img
        className="rounded-2xl shadow-lg"
        src="/landing/hero.jpeg"
        width="500"
        height="500"
        alt="hero IMG"
      />
    </div>
  );
}
