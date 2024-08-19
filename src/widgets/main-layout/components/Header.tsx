import useSession from "@/hooks/useSession";
import { Link } from "react-router-dom";
import ProfileImage from "./ProfileImage";

export default function Header() {
  const { userId } = useSession();

  if (userId) {
    return (
      <div className="flex h-16 w-full items-center justify-between border-gray-100 p-4 shadow-lg">
        <Link to="/" className="text-xl font-extrabold text-primary">
          HYPERDESK
        </Link>
        <ProfileImage />
      </div>
    );
  }

  return (
    <div className="flex h-16 w-full items-center justify-between border-gray-100 p-4 shadow-lg">
      <Link to="/" className="text-xl font-extrabold text-primary">
        HYPERDESK
      </Link>
      <Link to="/login" className="text-primary hover:text-primary-dark">
        로그인
      </Link>
    </div>
  );
}
