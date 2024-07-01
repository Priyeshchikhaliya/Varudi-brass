import React from "react";
import { useParams } from "react-router-dom";
import categories from "../Data/categories";
import Layout from "../Layout/Layout";
import product_listing from "../assets/product_listing.png";

const Category = () => {
  const { category } = useParams();
  const categoryData = categories.find((cat) => cat.name === category);

  if (!categoryData) {
    return <p>Category not found</p>;
  }

  return (
    <Layout>
      <div className="py-2 pb-8 flex flex-col gap-4">
        <div className="relative py-2 select-none">
          <img
            className="rounded-md"
            src={product_listing}
            alt="Product Listing"
          />
          <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center text-center">
            <div className="flex flex-col gap-2 text-white">
              <p className="text-[48px] font-bold">{categoryData.name}</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {categoryData.products.map((product) => (
            <div key={product.name} className="cursor-pointer">
              <img
                src={product.image}
                alt={product.name}
                className="h-[200px] w-full object-cover mb-2 rounded-xl"
              />
              <p className="text-center">{product.name}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Category;
