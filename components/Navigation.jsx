import Link from "next/link";
export default function Navigation({ mode }) {
  return (
    <div
      href="/"
      className="flex w-[100%] mx-auto py-5 justify-between text-lg px-[10%] bg-[rgba(43,57,69,1)]"
    >
      <Link href="/">Where in The world?</Link>
      <button>{mode}</button>
    </div>
  );
}
