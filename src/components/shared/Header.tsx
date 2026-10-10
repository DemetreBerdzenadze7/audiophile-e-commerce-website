import { Link } from "react-router";
import Container from "../../container/Container";

const links = [
  { label: "Home", to: "/home" },
  { label: "Headphones", to: "/headphones" },
  { label: "Speakers", to: "/speakers" },
  { label: "Earphones", to: "/earphones" },
];

const Header = () => {
  return (
    <header className="bg-black-header border-b border-white/20 md:border-0">
      <Container className="relative flex items-center h-22.5 md:border-b md:border-white/20 lg:h-24.25">
        <button type="button" aria-label="Open menu" className="cursor-pointer lg:hidden">
          <img src="/images/shared/tablet/icon-hamburger.svg" alt="" />
        </button>

        <Link to="/home" className="mx-auto md:mx-0 md:ml-10.5 lg:ml-0">
          <img src="/images/shared/desktop/logo.svg" alt="audiophile" />
        </Link>

        <nav className="hidden lg:block absolute left-1/2 -translate-x-1/2">
          <ul className="flex gap-8.5">
            {links.map(({ label, to }) => (
              <li key={label}>
                <Link
                  to={to}
                  className="text-nav font-bold uppercase text-white hover:text-orange transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button type="button" aria-label="Open cart" className="cursor-pointer md:ml-auto">
          <img src="/images/shared/desktop/icon-cart.svg" alt="" />
        </button>
      </Container>
    </header>
  );
};

export default Header;
