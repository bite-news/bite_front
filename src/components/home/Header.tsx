import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoSearch } from "react-icons/io5";

export default function Header() {
  return (
    <header className="flex items-center justify-between h-16 bg-white border border-gray-200 px-4">
      <Link href="/" className="flex items-center">
        <Image
          src="/assets/images/logo.png"
          alt="logo"
          width={40}
          height={20}
        />
        <span className="text-xl font-bold font-news">Bite News</span>
      </Link>
      <Link href="/search">
        <IoSearch size={28} />
      </Link>
    </header>
  );
}
