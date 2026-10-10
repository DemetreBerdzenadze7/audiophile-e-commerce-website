import { Link } from "react-router";
import Container from "../../container/Container";

const links = [
  { label: "Home", to: "/home" },
  { label: "Headphones", to: "/headphones" },
  { label: "Speakers", to: "/speakers" },
  { label: "Earphones", to: "/earphones" },
];

const socials = [
  { name: "Facebook", icon: "/images/shared/desktop/icon-facebook.svg" },
  { name: "Twitter", icon: "/images/shared/desktop/icon-twitter.svg" },
  { name: "Instagram", icon: "/images/shared/desktop/icon-instagram.svg" },
];

const Footer = () => {
  return (
    <footer className="bg-black-soft text-white">
      <Container className="relative flex flex-col items-center pt-13 pb-9.5 text-center md:grid md:grid-cols-[1fr_auto] md:items-center md:pt-15 md:pb-11.5 md:text-left lg:pt-18.75 lg:pb-12">
        <span className="absolute top-0 left-1/2 -translate-x-1/2 w-25.25 h-1 bg-orange md:left-10 md:translate-x-0 lg:left-0" />

        <Link to="/home" className="md:col-span-2 md:justify-self-start lg:col-span-1">
          <img src="/images/shared/desktop/logo.svg" alt="audiophile" />
        </Link>

        <nav className="mt-12 md:col-span-2 md:mt-8 lg:col-span-1 lg:mt-0 lg:justify-self-end">
          <ul className="flex flex-col items-center gap-4 md:flex-row md:gap-8.5">
            {links.map(({ label, to }) => (
              <li key={label}>
                <Link to={to} className="text-nav font-bold uppercase hover:text-orange transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <p className="mt-12 text-body font-medium text-white/50 md:col-span-2 md:mt-8 lg:col-span-1 lg:max-w-135 lg:mt-9">
          Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music
          lovers and sound specialists who are devoted to helping you get the most out of personal
          audio. Come and visit our demo facility - we're open 7 days a week.
        </p>

        <p className="mt-12 text-body font-bold text-white/50 md:mt-20 lg:row-start-3 lg:mt-14">
          Copyright 2021. All Rights Reserved
        </p>

        <ul className="flex items-center gap-4 mt-12 md:mt-20 md:justify-self-end lg:col-start-2 lg:row-start-2 lg:self-end lg:mt-0 lg:mb-1">
          {socials.map(({ name, icon }) => (
            <li key={name}>
              <a href="#" aria-label={name}>
                <img src={icon} alt="" />
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  );
};

export default Footer;
