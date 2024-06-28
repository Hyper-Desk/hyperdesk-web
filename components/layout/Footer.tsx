export default function Footer() {
  return (
    <div className="flex h-16 w-full items-center justify-around border-gray-100 p-4 shadow-lg">
      <h1 className="text-xl font-extrabold text-primary">HYPERDESK</h1>
      <p className="text-gray-500">© 2024 HYPERDESK. All rights reserved.</p>
      <p className="text-gray-500">
        Made by
        <span className="text-primary">
          <a href="https://github.com/MinboyKim" target="_blank">
            {" "}
            MinboyKim
          </a>
        </span>
      </p>
    </div>
  );
}
