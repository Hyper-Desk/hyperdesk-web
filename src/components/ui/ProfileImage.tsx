import { UserRound } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function ProfileImage() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("accessToken");
    navigate("/login");
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="relative rounded-full">
          <UserRound size={28} color="#08C8A4" className="cursor-pointer" />
          <div className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full border-2 border-white bg-green-500"></div>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-[150px] flex flex-col items-center gap-4">
        <Link to="/profile" className="text-primary">
          마이 페이지
        </Link>
        <div onClick={handleLogout} className="cursor-pointer text-primary">
          로그아웃
        </div>
      </PopoverContent>
    </Popover>
  );
}
