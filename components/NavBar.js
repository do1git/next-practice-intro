import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  console.log(router);
  return (
    <nav>
      <Link href="/">
        <a
          className="hello"
          style={{ color: router.pathname === "/" ? "pink" : "whitesmoke" }}
        >
          Home
        </a>
      </Link>
      <Link href="/about">
        <a
          className="as"
          style={{
            color: router.pathname === "/about" ? "pink" : "whitesmoke",
          }}
        >
          ABaaut
        </a>
      </Link>
    </nav>
  );
}
