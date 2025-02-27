import React from "react";
import Image from "next/image";

export default function Loading() {
  return (
    <Image
      src="/assets/logo.png"
      alt="로딩 중"
      width={40}
      height={40}
      className="animate-spin"
    />
  );
}
