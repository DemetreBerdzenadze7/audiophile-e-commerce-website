import Container from "../../container/Container";

interface BestGearProps {
  className?: string;
}

const BestGear = ({ className = "my-30 md:my-24 lg:my-50" }: BestGearProps) => {
  return (
    <Container className={`text-center lg:text-left ${className}`}>
      <section className="lg:flex lg:flex-row-reverse lg:items-center lg:justify-between">
        <picture className="lg:shrink-0">
          <source media="(min-width: 72.5rem)" srcSet="/images/shared/desktop/image-best-gear.jpg" />
          <source media="(min-width: 48rem)" srcSet="/images/shared/tablet/image-best-gear.jpg" />
          <img
            src="/images/shared/mobile/image-best-gear.jpg"
            alt="Man listening to music with headphones"
            className="w-full h-75 object-cover rounded-card lg:w-135 lg:h-147"
          />
        </picture>
        <div className="lg:max-w-111.25">
          <h2 className="mt-10 text-h2-sm font-bold uppercase md:mt-15.75 md:mx-auto md:max-w-143 md:text-h2 lg:mt-0 lg:mx-0">
            Bringing you the <span className="text-orange">best</span> audio gear
          </h2>
          <p className="mt-8 text-body font-medium text-black/50 md:max-w-143 md:mx-auto lg:mx-0">
            Located at the heart of New York City, Audiophile is the premier store for high end
            headphones, earphones, speakers, and audio accessories. We have a large showroom and
            luxury demonstration rooms available for you to browse and experience a wide range of
            our products. Stop by our store to meet some of the fantastic people who make
            Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </section>
    </Container>
  );
};

export default BestGear;
