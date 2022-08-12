import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();

  return (
    <nav>
      <img src="/vercel.svg" />
      <Link href="/">
        <a className={router.pathname === "/" ? "active" : ""}>Home</a>
      </Link>
      <Link href="/about">
        <a className={router.pathname === "/about" ? "active" : ""}>ABaaut</a>
      </Link>
      <style jsx>{`
        nav {
          display: flex;
          justify-content: space-between;
          background-color: skyblue;
        }

        img {
          max-width: 100px;
          margin-bottom: 5px;
        }

        nav div {
          display: flex;
          gap: 10px;
        }
        a {
          text-decoration: none;
        }
        .active {
          color: blue;
        }
      `}</style>
    </nav>
  );
}
