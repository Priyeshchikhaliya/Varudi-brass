import React from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";
import categories from "../Data/categories";
// Section 1
import products_page from "../assets/products_page.png";

const Products = () => {
  return (
    <Layout>
      <div className="py-2 pb-8 px-4 md:px-8">
        {/* Section 1 */}
        <div className="relative py-2 select-none">
          <img
            className="rounded-md h-[200px] sm:h-[300px] md:h-[400px] w-full object-cover"
            src={products_page}
            alt="Products"
          />
          <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center text-center px-4">
            <div className="flex flex-col gap-2 text-white max-w-[800px]">
              <p className="text-[24px] sm:text-[36px] md:text-[48px] font-bold">
                High-quality brass products
              </p>
              <p className="text-[14px] sm:text-[16px]">
                We specialize in the production of high-quality brass products,
                with a focus on automotive, bicycle, and motorcycle parts, as
                well as tire and tube accessories. We also offer custom
                manufacturing services.
              </p>
            </div>
          </div>
        </div>
        {/* Section 2 */}
        <div className="p-4">
          <p className="text-[24px] sm:text-[36px] font-bold text-black">
            Featured categories
          </p>
        </div>
        {/* Section 3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {categories.map((category) => (
            <Link key={category.name} to={`/products/${category.name}`}>
              <div className="flex flex-col gap-2">
                <img
                  src={category.mainImage}
                  alt={category.name}
                  className="h-[150px] sm:h-[200px] w-full object-cover mb-2 rounded-xl"
                />
                <p className="text-[14px] sm:text-[16px] font-semibold">
                  {category.name}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Products;
