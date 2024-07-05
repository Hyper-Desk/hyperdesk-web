import { auth } from "@/auth";

export default async function Console() {
  const session = await auth();

  return <div>{session?.user?.name} hi</div>;
}
