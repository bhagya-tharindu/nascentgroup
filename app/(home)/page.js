import ProductCard from "../components/ProductCard";
import ProductService from "../services/ProductService";

const Products = async () => {
  const products = await ProductService.getAllProducts();

  return (
    <div className="pt-[60px] pb-[30px] px-3 xl:px-36">
      <h1 className="text-center text-4xl font-medium mb-6">Our Products</h1>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} productInfo={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
