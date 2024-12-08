import Link from 'next/link';
import navLinks from '../data/navLinks';

const Nav = () => {
  return (
    <nav>
      {navLinks.map(({ title, link }) => (
        <Link key={title} href={link} className={`mr-5`} target={title === 'About' ? '_blank' : '_self'}>
          {title}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
