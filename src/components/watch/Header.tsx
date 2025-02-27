"use client";

import { useRouter } from "next/navigation";
import { IoChevronBack } from "react-icons/io5";

export default function Header() {
  const router = useRouter();
  return (
    <header>
      <button
        onClick={() => router.back()}
        className="absolute top-4 left-4 z-20 text-white"
        aria-label="뒤로 가기"
      >
        <IoChevronBack size={35} />
      </button>
    </header>
  );
}
