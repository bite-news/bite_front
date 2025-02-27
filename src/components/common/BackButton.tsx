"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { IoChevronBack } from "react-icons/io5";

type BackButtonProps = {
  color?: "white" | "black";
};

export default function BackButton({ color = "white" }: BackButtonProps) {
  const router = useRouter();
  const textColor = color === "white" ? "text-white" : "text-black";

  return (
    <button
      onClick={() => router.back()}
      className={`z-20 ${textColor}`}
      aria-label="뒤로 가기"
    >
      <IoChevronBack size={30} />
    </button>
  );
}
