import Link from "next/link";

export default function Header() {
  return (
    <div>
      <li key={1}>
        <Link href={"/page1"} scroll={false}>
          Page1
        </Link>
      </li>{" "}
      <li key={2}>
        <Link href={"/page2"}>Page2</Link>
      </li>{" "}
      <li key={3}>
        <Link href={"/dashboard"}>dashboard</Link>
      </li>{" "}
    </div>
  );
}
