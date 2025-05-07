import Link from "next/link";
import React from "react";
import renderStars from "../helpers";

const ProductCard = ({ productInfo }) => {
  const {
    image,
    title,
    rating: { rate, count },
    price,
    category,
    id,
  } = productInfo;

  return (
    <Link
      href={`/${id}`}
      className="p-4 flex flex-col gap-1 rounded-[10%] border-2 border-black-500 transition-transform duration-400 hover:-translate-y-3"
    >
      <img
        src={image}
        alt="product-img"
        className="w-full h-[300px] object-cove"
      />
      <h3>{title}</h3>

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
    </Link>
  );
};

export default ProductCard;
