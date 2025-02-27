import Header from "@/components/watch/Header";
import Image from "next/image";

export default function Custom404() {
  return (
    <main>
      <Header />
      <div className="">
        <Image
          src="/assets/images/error-icon.png"
          className="h-[200px] w-[200px]"
          alt="valid video not exits"
        />
      </div>
    </main>
  );
}
