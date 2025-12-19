import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4">
      <h1 className="text-6xl font-bold mb-4 text-white drop-shadow">404</h1>
      <p className="text-white/70 mb-6 text-lg max-w-[320px] sm:max-w-[375px] md:max-w-md">
        The page you are looking for does not exist.
      </p>

      <Link
        to="/"
        className="
          px-6 py-3
          rounded-xl border border-white/30
          bg-white/10 hover:bg-white/30
          text-white
          transition backdrop-blur-md
          text-base sm:text-lg
          w-full max-w-[320px] sm:max-w-[375px] md:max-w-fit
          text-center shadow-md
        "
      >
        Go to Home
      </Link>
    </div>
  );
}
