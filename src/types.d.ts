type Category = "headphones" | "speakers" | "earphones";

interface ResponsiveImage {
  mobile: string;
  tablet: string;
  desktop: string;
}

interface IncludedItem {
  quantity: number;
  item: string;
}

interface RelatedProduct {
  slug: string;
  name: string;
  image: ResponsiveImage;
}

interface Product {
  id: number;
  slug: string;
  shortName: string;
  cartImage: string;
  name: string;
  image: ResponsiveImage;
  categoryImage: ResponsiveImage;
  category: Category;
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: IncludedItem[];
  gallery: {
    first: ResponsiveImage;
    second: ResponsiveImage;
    third: ResponsiveImage;
  };
  others: RelatedProduct[];
}

interface CartItem {
  slug: string;
  shortName: string;
  price: number;
  image: string;
  quantity: number;
}
