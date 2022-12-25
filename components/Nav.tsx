import Link from "next/link";
import navLinks from "../data/navLinks";

const Nav = () => {
  return (
    <nav>
      {navLinks.map(({ title, link }) => (
        <Link key={title} href={link}>
          <a className={`mr-5`}>{title}</a>
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
