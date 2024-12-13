import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";
import categories from "../Data/categories";
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 select-none">
        {/* Hero Section */}
        {/* Move this section outside the container */}
          <div className="-mx-4 sm:-mx-6 lg:-mx-8">
            {" "}
            {/* Negative margin to counter container padding */}
            <div className="relative w-full mb-12">
              <div className="aspect-[21/9] w-full overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={products_page}
                  alt="Overview of Sardar Industries Brass Products"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="max-w-4xl mx-auto text-center px-4">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                      High-Quality Brass Products
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
                      We specialize in the production of high-quality brass
                      products, with a focus on automotive, bicycle, and
                      motorcycle parts, as well as tire and tube accessories. We
                      also offer custom manufacturing services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        {/* Categories Section */}
        <div className="space-y-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            Featured Categories
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={`/products/${category.name}`}
                className="group block"
              >
                <div className="space-y-4">
                  <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100">
                    <img
                      src={category.mainImage}
                      alt={`Explore ${category.name} Brass Products`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                      {category.name}
                    </h3>
                    <span className="text-blue-600 group-hover:translate-x-1 transition-transform duration-200">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
