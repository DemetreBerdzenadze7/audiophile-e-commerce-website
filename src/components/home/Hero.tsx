import Button from "../shared/Button";

const Hero = () => {
  return (
    <section className="flex items-center justify-center h-127.5 px-6 bg-black-header bg-cover bg-bottom bg-[url('/images/home/mobile/image-header.jpg')] md:h-159.75 md:bg-[url('/images/home/tablet/image-header.jpg')]">
      <div className="flex flex-col items-center text-center max-w-94 md:max-w-99.5">
        <p className="text-overline uppercase text-white/50">New product</p>
        <h1 className="mt-4 text-h1-sm font-bold uppercase text-white md:mt-6 md:text-h1">
          XX99 Mark II Headphones
        </h1>
        <p className="mt-6 max-w-82 text-body font-medium text-white/75 md:max-w-87.25">
          Experience natural, lifelike audio and exceptional build quality made for the
          passionate music enthusiast.
        </p>
        <Button className="mt-7 md:mt-10">See product</Button>
      </div>
    </section>
  );
};

export default Hero;
