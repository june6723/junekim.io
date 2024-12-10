import Link from 'next/link';
import navLinks from '../data/navLinks';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from './ui/navigation-menu';

const Nav = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navLinks.map(({ title, link }) => (
          <NavigationMenuItem key={title}>
            <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
              <Link href={link} target={title === 'About' ? '_blank' : '_self'}>
                {title}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Nav;
