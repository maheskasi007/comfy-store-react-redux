import ProductsGrid from '../ProductsGrid/ProductsGrid';
import SectionTitle from '../SectionTitle/SectionTitle';

const FeaturedProducts = () => {
  return (
    <div className="pt-24">
      <SectionTitle text="featured products" />
      <ProductsGrid />
    </div>
  );
};
export default FeaturedProducts;
