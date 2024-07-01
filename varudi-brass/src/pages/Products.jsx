import React from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";
import categories from "../Data/categories";
//Section 1
import products_page from "../assets/products_page.png";

const Products = () => {
  return (
    <Layout>
      <div className="py-2 pb-8">
        {/* section 1 */}
        <div className="relative py-2 select-none">
          <img className="rounded-md" src={products_page} />
          <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center text-center">
            <div className="flex flex-col gap-2 text-white">
              <p className="text-[48px] text font-bold">
                High-quality brass products
              </p>
              <p className="text-[16px] max-w-[800px]">
                We specialize in the production of high-quality brass products,
                with a focus on automotive, bicycle, and motorcycle parts, as
                well as tire and tube accessories. We also offer custom
                manufacturing services.
              </p>
            </div>
          </div>
        </div>{" "}
        {/* section 2*/}
        <div className="p-4">
          {" "}
          <p className="text-[36px] font-bold	text-black">Featured categories</p>
        </div>
        {/* section 3*/}
        <div className="grid grid-cols-3 gap-5">
          {categories.map((category) => (
            <Link key={category.name} to={`/products/${category.name}`}>
              <div className="flex flex-col gap-2">
                <img
                  src={category.mainImage}
                  alt={category.name}
                  className="h-[200px] w-full object-cover mb-2 rounded-xl"
                />
                <p className="text-[16px] font-semibold">{category.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Products;
