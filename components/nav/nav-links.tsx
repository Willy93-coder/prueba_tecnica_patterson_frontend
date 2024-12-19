import Link from "next/link";
import { links } from "./helpers";

export function NavLinks() {
  return (
    <>
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="p-4 hover:bg-green-300"
        >
          <p>{link.name}</p>
        </Link>
      ))}
    </>
  );
}
