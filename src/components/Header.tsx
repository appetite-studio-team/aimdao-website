import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Header() {
  return (
    <div className="navbar fixed top-0 right-0 left-0 z-10 m-auto max-w-6xl">
      <div className="navbar-start">
        <Link
          href="/"
          className="bg-opacity-50 rounded-full bg-white px-4 py-2 backdrop-blur-3xl"
        >
          <Image
            src="/assets/aimdao-logo-full.svg"
            alt="AIMDAO Logo"
            width={120}
            height={48}
          />
        </Link>
      </div>
      <div className="navbar-end p-4">
        <a
          target="_blank"
          href="https://aimdao-alpha.netlify.app"
          className="btn"
        >
          <span className="flex items-center gap-2">
            <FaExternalLinkAlt /> Try app (alpha)
          </span>
        </a>
      </div>
    </div>
  );
}
