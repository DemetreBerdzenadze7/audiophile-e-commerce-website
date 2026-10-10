import Container from "../../container/Container";
import Button from "../shared/Button";

const FeaturedProducts = () => {
  return (
    <Container className="flex flex-col gap-6 mt-30 md:gap-8 md:mt-24">
      {/* ZX9 */}
      <section className="relative overflow-hidden flex flex-col items-center px-6 pt-13.75 pb-13.75 text-center bg-orange rounded-card md:pt-13 md:pb-16">
        <img
          src="/images/home/desktop/pattern-circles.svg"
          alt=""
          className="absolute left-1/2 -top-30 -translate-x-1/2 w-139.5 max-w-none md:-top-72 md:w-236"
        />
        <picture className="relative">
          <source media="(min-width: 48rem)" srcSet="/images/home/tablet/image-speaker-zx9.png" />
          <img
            src="/images/home/mobile/image-speaker-zx9.png"
            alt="ZX9 speaker"
            className="w-43 md:w-49.25"
          />
        </picture>
        <h2 className="relative mt-8 max-w-65 text-h1-sm font-bold uppercase text-white md:mt-16 md:text-h1">
          ZX9 Speaker
        </h2>
        <p className="relative mt-6 max-w-70 text-body font-medium text-white/75 md:max-w-87.25">
          Upgrade to premium speakers that are phenomenally built to deliver truly remarkable
          sound.
        </p>
        <Button variant="dark" className="relative mt-6 md:mt-10">
          See product
        </Button>
      </section>

      {/* ZX7 */}
      <section className="flex flex-col justify-center gap-8 h-80 px-6 bg-cover bg-center rounded-card bg-[url('/images/home/mobile/image-speaker-zx7.jpg')] md:px-15.5 md:bg-[url('/images/home/tablet/image-speaker-zx7.jpg')]">
        <h2 className="text-h4 font-bold uppercase">ZX7 Speaker</h2>
        <Button variant="outline" className="bg-transparent">
          See product
        </Button>
      </section>

      {/* YX1 */}
      <section className="flex flex-col gap-6 md:flex-row md:gap-2.75">
        <picture className="md:flex-1">
          <source media="(min-width: 48rem)" srcSet="/images/home/tablet/image-earphones-yx1.jpg" />
          <img
            src="/images/home/mobile/image-earphones-yx1.jpg"
            alt="YX1 earphones"
            className="w-full h-50 object-cover rounded-card md:h-80"
          />
        </picture>
        <div className="flex flex-col justify-center gap-8 h-50 px-6 bg-gray rounded-card md:flex-1 md:h-80 md:px-10.25">
          <h2 className="text-h4 font-bold uppercase">YX1 Earphones</h2>
          <Button variant="outline">See product</Button>
        </div>
      </section>
    </Container>
  );
};

export default FeaturedProducts;
