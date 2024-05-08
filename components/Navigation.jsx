import Link from "next/link";
import Image from "next/image";
export default function Navigation({ mode }) {
  return (
    <div
      href="/"
      className="flex w-[100%] mx-auto py-5 justify-between text-lg px-[10%] bg-[rgba(43,57,69,1)]"
    >
      <Link href="/">Where in The world?</Link>
      <button className="flex justify-evenly w-[5%] px-2 py-2 ">
        <Image
          src="/icons8-dark-mode-30.png"
          height={25}
          width={25}
          alt="icon"
        />
      </button>
    </div>
  );
}
