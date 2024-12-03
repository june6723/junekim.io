import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { BLOG_URL, GITHUB_URL, TWITTER_URL } from 'constant';

interface FooterIconProps {
  icon: IconProp;
}
const FooterIcon = ({ icon }: FooterIconProps) => (
  <FontAwesomeIcon icon={icon} className="w-6 h-6 cursor-pointer hover:text-blue-400" />
);

const Footer = () => {
  const thisYear = new Date().getFullYear();

  return (
    <footer className="w-full">
      <div className="mt-16 flex flex-col items-center mb-8">
        <div className="flex gap-4">
          <a href="mailto:gjune6723@gmail.com" className="w-6 h-6">
            <FooterIcon icon={faEnvelope} />
          </a>
          <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="w-6 h-6">
            <FooterIcon icon={faGithub} />
          </a>
          <a href={TWITTER_URL} target="_blank" rel="noreferrer" className="w-6 h-6">
            <FooterIcon icon={faTwitter} />
          </a>
        </div>
        <div className="mt-4 text-sm text-gray-400">{`Copyright © ${thisYear} June Kim`}</div>
        <Link href={process.env.URL ?? ''} className="mt-2 text-sm font-medium text-gray-400 hover:text-gray-300">
          {BLOG_URL}
        </Link>
      </div>
    </footer>
  );
};
export default Footer;
