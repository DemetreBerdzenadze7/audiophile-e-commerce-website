import Container from "../../container/Container";

const links = ["Home", "Headphones", "Speakers", "Earphones"];

const socials = [
  { name: "Facebook", icon: "/images/shared/desktop/icon-facebook.svg" },
  { name: "Twitter", icon: "/images/shared/desktop/icon-twitter.svg" },
  { name: "Instagram", icon: "/images/shared/desktop/icon-instagram.svg" },
];

const Footer = () => {
  return (
    <footer className="mt-30 bg-black-soft text-white md:mt-24">
      <Container className="relative flex flex-col items-center pt-13 pb-9.5 text-center md:items-start md:pt-15 md:pb-11.5 md:text-left">
        <span className="absolute top-0 left-1/2 -translate-x-1/2 w-25.25 h-1 bg-orange md:left-10 md:translate-x-0" />

        <a href="/">
          <img src="/images/shared/desktop/logo.svg" alt="audiophile" />
        </a>

        <nav className="mt-12 md:mt-8">
          <ul className="flex flex-col items-center gap-4 md:flex-row md:gap-8.5">
            {links.map((link) => (
              <li key={link}>
                <a href="#" className="text-nav font-bold uppercase hover:text-orange transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="mt-12 text-body font-medium text-white/50 md:mt-8">
          Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music
          lovers and sound specialists who are devoted to helping you get the most out of personal
          audio. Come and visit our demo facility - we're open 7 days a week.
        </p>

        <div className="flex flex-col items-center gap-12 mt-12 md:flex-row md:justify-between md:w-full md:mt-20">
          <p className="text-body font-bold text-white/50">Copyright 2021. All Rights Reserved</p>
          <ul className="flex items-center gap-4">
            {socials.map(({ name, icon }) => (
              <li key={name}>
                <a href="#" aria-label={name}>
                  <img src={icon} alt="" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
