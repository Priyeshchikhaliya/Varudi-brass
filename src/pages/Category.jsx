import React from "react";
import { Helmet } from "react-helmet-async"; // Import Helmet for SEO
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
      <Helmet>
        <title>{`${categoryData.name} | Sardar Industries - Brass Products`}</title>
        <meta
          name="description"
          content={`Explore our ${
            categoryData.name
          } category for high-quality brass products. Discover a range of products including ${categoryData.products
            .map((product) => product.name)
            .join(", ")}.`}
        />
        <link
          rel="canonical"
          href={`https://yourwebsite.com/products/${category}`}
        />
        <meta
          property="og:title"
          content={`${categoryData.name} - Sardar Industries`}
        />
        <meta
          property="og:description"
          content={`Check out the ${categoryData.name} products at Sardar Industries. We offer a wide selection of premium brass items.`}
        />
        <meta property="og:image" content={product_listing} />
        <meta
          property="og:url"
          content={`https://yourwebsite.com/products/${category}`}
        />
      </Helmet>

      <div className="py-2 pb-8 flex flex-col gap-4 px-4 md:px-8 max-w-[960px]">
        {/* Section 1 */}
        <div className="relative py-2 select-none">
          <img
            className="rounded-md h-[200px] sm:h-[300px] md:h-[400px] w-full object-cover"
            src={product_listing}
            alt={`Overview of ${categoryData.name} Brass Products`}
          />
          <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center text-center px-4">
            <div className="flex flex-col gap-2 text-white max-w-[800px]">
              <h1 className="text-[24px] sm:text-[36px] md:text-[48px] font-bold">
                {categoryData.name}
              </h1>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {categoryData.products.map((product) => (
            <div
              key={product.name}
              className="cursor-pointer bg-white transition-all duration-200 transform hover:scale-105 rounded-lg overflow-hidden shadow-md"
            >
              <img
                src={product.image}
                alt={`Image of ${product.name} from ${categoryData.name}`}
                className={`h-[150px] sm:h-[200px] w-full object-contain mb-2 rounded-xl`}
              />
              <p className="text-center font-semibold text-[14px] sm:text-[16px]">
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
