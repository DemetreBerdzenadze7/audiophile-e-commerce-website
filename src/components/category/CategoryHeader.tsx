import Container from "../../container/Container";

interface CategoryHeaderProps {
  title: string;
}

const CategoryHeader = ({ title }: CategoryHeaderProps) => {
  return (
    <section className="bg-black-header">
      <Container className="flex items-center justify-center h-25.5 md:h-61.5 lg:h-59.75">
        <h1 className="text-h4 font-bold uppercase text-white md:text-h2">{title}</h1>
      </Container>
    </section>
  );
};

export default CategoryHeader;
