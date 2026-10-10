import Container from "../../container/Container";

const Header = () => {
  return (
    <header className="bg-black-header border-b border-white/20 md:border-0">
      <Container className="flex items-center h-22.5 md:border-b md:border-white/20">
        <button type="button" aria-label="Open menu" className="cursor-pointer">
          <img src="/images/shared/tablet/icon-hamburger.svg" alt="" />
        </button>

        <a href="/" className="mx-auto md:mx-0 md:ml-10.5">
          <img src="/images/shared/desktop/logo.svg" alt="audiophile" />
        </a>

        <button type="button" aria-label="Open cart" className="cursor-pointer md:ml-auto">
          <img src="/images/shared/desktop/icon-cart.svg" alt="" />
        </button>
      </Container>
    </header>
  );
};

export default Header;
