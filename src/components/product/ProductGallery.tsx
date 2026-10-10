import Container from "../../container/Container";
import type { Product } from "../../types/product";

interface ProductGalleryProps {
  product: Product;
}

const ProductGallery = ({ product }: ProductGalleryProps) => {
  const { first, second, third } = product.gallery;

  const images = [
    { image: first, pictureClass: "", imgClass: "h-43.5 lg:h-70" },
    { image: second, pictureClass: "", imgClass: "h-43.5 lg:h-70" },
    {
      image: third,
      pictureClass: "md:col-start-2 md:row-start-1 md:row-span-2",
      imgClass: "h-92 md:h-full",
    },
  ];

  return (
    <Container className="grid gap-5 mt-22 md:grid-cols-[277fr_395fr] md:gap-x-4.5 md:mt-30 lg:gap-x-7.5 lg:gap-y-8 lg:mt-40">
      {images.map(({ image, pictureClass, imgClass }, index) => (
        <picture key={index} className={`block ${pictureClass}`}>
          <source media="(min-width: 72.5rem)" srcSet={image.desktop} />
          <source media="(min-width: 48rem)" srcSet={image.tablet} />
          <img
            src={image.mobile}
            alt={`${product.name} gallery image ${index + 1}`}
            className={`w-full object-cover rounded-card ${imgClass}`}
          />
        </picture>
      ))}
    </Container>
  );
};

export default ProductGallery;
