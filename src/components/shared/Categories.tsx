import { Link } from "react-router";
import Container from "../../container/Container";

const categories = [
  { name: "Headphones", image: "/images/shared/desktop/image-category-thumbnail-headphones.png" },
  { name: "Speakers", image: "/images/shared/desktop/image-category-thumbnail-speakers.png" },
  { name: "Earphones", image: "/images/shared/desktop/image-category-thumbnail-earphones.png" },
];

interface CategoriesProps {
  className?: string;
  onLinkClick?: () => void;
}

const Categories = ({ className = "mt-10 md:mt-23.5 lg:mt-30", onLinkClick }: CategoriesProps) => {
  return (
    <Container className={className}>
      <ul className="flex flex-col gap-4 md:flex-row md:gap-2.5 lg:gap-7.5">
        {categories.map(({ name, image }) => (
          <li key={name} className="md:flex-1">
            <Link
              to={`/${name.toLowerCase()}`}
              onClick={onLinkClick}
              className="group relative block pt-13 lg:pt-20"
            >
              <img
                src={image}
                alt=""
                className="absolute top-0 left-1/2 -translate-x-1/2 w-31.25 lg:w-50"
              />
              <div className="flex flex-col items-center justify-end h-41.25 pb-5.5 bg-gray rounded-card lg:h-51 lg:pb-7.5">
                <h3 className="text-h6-sm font-bold uppercase lg:text-h6">{name}</h3>
                <span className="flex items-center gap-3 mt-4 text-subtitle font-bold uppercase text-black/50 group-hover:text-orange transition-colors">
                  Shop
                  <img src="/images/shared/desktop/icon-arrow-right.svg" alt="" />
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Categories;
