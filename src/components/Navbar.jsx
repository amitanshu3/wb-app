"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-white  shadow-lg h-20 flex items-center justify-between px-6 border border-gray-300">
      <div className="flex items-center">
        <Link href="/" passHref>
          <Image
            src="/company-logo.png"
            alt="Company Logo"
            width={150}
            height={80}
            className="mr-2 ml-4 sm:ml-0 cursor-pointer"
          />
        </Link>
      </div>

      <div className="flex items-center shadow-md p-1 rounded-sm border border-gray-300">
        <Image
          src="/userimg.jpg"
          alt="Profile Photo"
          width={40}
          height={40}
          className="rounded-full"
        />
        <span className="font-semibold">Amitanshu </span>
      </div>
    </header>
  );
}
