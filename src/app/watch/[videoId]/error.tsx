"use client";

import Header from "@/components/watch/Header";
import Image from "next/image";
import Link from "next/link";

export default function Custom404() {
  return (
    <main className="bg-neutral-900 h-svh">
      <Header />
      <div className="h-svh flex flex-col gap-4 items-center justify-center">
        <Image
          src="/assets/images/error-icon.png"
          width={200}
          height={200}
          alt="valid video not exits"
        />
        <span className="text-white">예기치 못 한 오류가 발생했습니다.</span>
        <Link href="/" className="bg-white px-4 py-2 rounded-full">
          홈으로 돌아가기
        </Link>
      </div>
    </main>
  );
}
