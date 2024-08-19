import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const [active, setActive] = useState(true);

  if (!active)
    return (
      <div
        className="h-full flex flex-col border-r hover:bg-gray-100 p-4 cursor-pointer"
        onClick={() => setActive(true)}
      >
        <Menu color="#04c8a4" />
      </div>
    );

  return (
    <div className="h-full flex flex-col bg-gray-50 relative">
      <X
        className="absolute top-3 right-3 cursor-pointer"
        onClick={() => setActive(false)}
        color="#04c8a4"
      />
      <NavLink
        to="/app/computing"
        className={({ isActive }) =>
          `w-[200px] p-6 hover:bg-gray-200 ${isActive ? "text-[#04c8a4]" : ""}`
        }
      >
        컴퓨팅
      </NavLink>
      <NavLink
        to="/app/storage"
        className={({ isActive }) =>
          `w-[200px] p-6 hover:bg-gray-200 ${isActive ? "text-[#04c8a4]" : ""}`
        }
      >
        스토리지
      </NavLink>
      <NavLink
        to="/app/firewall"
        className={({ isActive }) =>
          `w-[200px] p-6 hover:bg-gray-200 ${isActive ? "text-[#04c8a4]" : ""}`
        }
      >
        방화벽
      </NavLink>
    </div>
  );
}
