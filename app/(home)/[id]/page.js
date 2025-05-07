import HomeNavigator from "@/app/components/HomeNavigator";
import renderStars from "@/app/helpers";
import ProductService from "@/app/services/ProductService";
import Link from "next/link";

const ProductPage = async ({ params }) => {
  const { id } = await params;
  const productInfo = await ProductService.getProductById(id);

  const {
    image,
    title,
    rating: { rate, count },
    price,
    category,
    description,
  } = productInfo;

  return (
    <div className="pt-[60px] pb-[30px] px-3 xl:px-36">
      <HomeNavigator />
      <div className="grid gap-[80px] md:grid-cols-2">
        <img src={image} className="max-h-[500px] w-full" alt="product-img" />
        <div className="flex flex-col gap-1">
          <h2 className="font-medium">{title}</h2>
          <p>{description}</p>
          <div className="text-yellow-500 text-2xl">
            {renderStars(Math.round(rate))}
          </div>
          <h3>
            <b>$</b> {price}
          </h3>
          <h3>
            <b>In Store:</b> {count}
          </h3>
          <h3>
            <b>Category:</b> {category}
          </h3>

          <Link className="underline" href="/contact">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
