import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href="/login">
        <Button className="text-xl p-4 w-10 h-2" size="lg">
          Hi!!
        </Button>
      </Link>
    </>
  );
}
