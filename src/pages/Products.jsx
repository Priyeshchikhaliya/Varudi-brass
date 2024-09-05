import React from "react";
import { Helmet } from "react-helmet-async"; // Import Helmet for SEO
import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";
import categories from "../Data/categories";
// Section 1
import products_page from "../assets/products_page.png";

const Products = () => {
  return (
    <Layout>
      <Helmet>
        <title>
          Products | Sardar Industries - High-Quality Brass Products
        </title>
        <meta
          name="description"
          content="Explore our high-quality brass products including automotive, bicycle, and motorcycle parts. We also offer custom manufacturing services tailored to your needs."
        />
        <link rel="canonical" href="https://yourwebsite.com/products" />
        <meta property="og:title" content="Products - Sardar Industries" />
        <meta
          property="og:description"
          content="Discover high-quality brass products and custom manufacturing services by Sardar Industries. Contact us for more information."
        />
        <meta property="og:image" content={products_page} />
        <meta property="og:url" content="https://yourwebsite.com/products" />
      </Helmet>

      <div className="py-2 pb-8 px-4 md:px-8">
        {/* Section 1 */}
        <div className="relative py-2 select-none">
          <img
            className="rounded-md h-[200px] sm:h-[300px] md:h-[400px] w-full object-cover"
            src={products_page}
            alt="Overview of Sardar Industries Brass Products"
          />
          <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center text-center px-4">
            <div className="flex flex-col gap-2 text-white max-w-[800px]">
              <h1 className="text-[24px] sm:text-[36px] md:text-[48px] font-bold">
                High-Quality Brass Products
              </h1>
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
          <h2 className="text-[24px] sm:text-[36px] font-bold text-black">
            Featured Categories
          </h2>
        </div>
        {/* Section 3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {categories.map((category) => (
            <Link key={category.name} to={`/products/${category.name}`}>
              <div className="flex flex-col gap-2">
                <img
                  src={category.mainImage}
                  alt={`Explore ${category.name} Brass Products`}
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
