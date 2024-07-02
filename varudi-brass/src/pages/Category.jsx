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
      <div className="py-2 pb-8 flex flex-col gap-4 px-4 md:px-8">
        {/* Section 1 */}
        <div className="relative py-2 select-none">
          <img
            className="rounded-md h-[200px] sm:h-[300px] md:h-[400px] w-full object-cover"
            src={product_listing}
            alt="Product Listing"
          />
          <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center text-center px-4">
            <div className="flex flex-col gap-2 text-white max-w-[800px]">
              <p className="text-[24px] sm:text-[36px] md:text-[48px] font-bold">
                {categoryData.name}
              </p>
            </div>
          </div>
        </div>
        {/* Section 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {categoryData.products.map((product) => (
            <div key={product.name} className="cursor-pointer">
              <img
                src={product.image}
                alt={product.name}
                className="h-[150px] sm:h-[200px] w-full object-cover mb-2 rounded-xl"
              />
              <p className="text-center text-[14px] sm:text-[16px]">
                {product.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Category;
