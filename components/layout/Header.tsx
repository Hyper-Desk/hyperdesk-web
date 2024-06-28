import LoginModal from "@/app/(beforeLogin)/_component/LoginModal";

export default function Header() {
  return (
    <div className="flex h-16 w-full items-center justify-between border-gray-100 p-4 shadow-lg">
      <h1 className="text-xl font-extrabold text-primary">HYPERDESK</h1>
      <LoginModal />
    </div>
  );
}
