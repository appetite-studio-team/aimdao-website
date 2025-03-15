import Image from "next/image";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";

export default function Header() {
  return (
    <div className="navbar fixed top-0 right-0 left-0 z-10 m-auto max-w-6xl">
      <div className="navbar-start">
        <Link href="/" className="p-4">
          <Image
            src="/assets/aimdao-logo.svg"
            alt="AIMDAO Logo"
            width={48}
            height={48}
          />
        </Link>
      </div>
      <div className="navbar-end p-4">
        <a target="_blank" href="https://x.com/appetite_studio" className="btn">
          <span className="flex items-center gap-2">
            <FaXTwitter /> Follow us
          </span>
        </a>
      </div>
    </div>
  );
}
