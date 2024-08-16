import { Link } from "react-router-dom";

export default function Header() {
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
